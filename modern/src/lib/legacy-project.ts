import { readFile } from "node:fs/promises";
import path from "node:path";

export type LegacyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "media";
      src: string;
      alt?: string;
      href?: string;
    };

function normalizeAssetPath(value: string) {
  return value
    .replace(/^\/static\/projects\//, "/projects/")
    .replace(/^\/static\/img\//, "/img/");
}

function extractUrlFromMarkdownTarget(target: string) {
  const trimmed = target.trim();
  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("<")) {
    const end = trimmed.indexOf(">");
    if (end > 1) {
      return trimmed.slice(1, end);
    }
  }

  const firstSpace = trimmed.search(/\s/);
  return firstSpace === -1 ? trimmed : trimmed.slice(0, firstSpace);
}

function extractLinkedImage(line: string) {
  const match = line.match(
    /^\s*\[!\[([^\]]*)\]\(([^)]+)\)(?:\{:[^}]*\})?\]\(([^)]+)\)\s*$/,
  );
  if (!match) {
    return null;
  }

  return {
    type: "media" as const,
    alt: match[1]?.trim() || undefined,
    src: normalizeAssetPath(extractUrlFromMarkdownTarget(match[2])),
    href: normalizeAssetPath(extractUrlFromMarkdownTarget(match[3])),
  };
}

function extractStandaloneImage(line: string) {
  const match = line.match(/^\s*!\[([^\]]*)\]\(([^)]+)\)(?:\{:[^}]*\})?\s*$/);
  if (!match) {
    return null;
  }

  return {
    type: "media" as const,
    alt: match[1]?.trim() || undefined,
    src: normalizeAssetPath(extractUrlFromMarkdownTarget(match[2])),
  };
}

function cleanLine(line: string) {
  return line
    .replace(/\\\\/g, "")
    .replace(/<center>|<\/center>|<hr\s*\/?>/gi, "")
    .replace(/\{:[^}]*\}/g, "")
    .trim();
}

export function parseLegacyMarkdown(markdown: string): LegacyBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: LegacyBlock[] = [];

  let inFrontMatter = false;
  let seenFrontMatter = false;
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let inUnorderedList = false;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        blocks.push({ type: "p", text });
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: "ul", items: [...currentList] });
      currentList = [];
    }
    inUnorderedList = false;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === "---") {
      if (!seenFrontMatter) {
        inFrontMatter = !inFrontMatter;
        seenFrontMatter = true;
        continue;
      }
      if (inFrontMatter) {
        inFrontMatter = false;
        continue;
      }
    }

    if (inFrontMatter) {
      continue;
    }

    const linkedImage = extractLinkedImage(rawLine);
    if (linkedImage) {
      flushParagraph();
      flushList();
      blocks.push(linkedImage);
      continue;
    }

    const standaloneImage = extractStandaloneImage(rawLine);
    if (standaloneImage) {
      flushParagraph();
      flushList();
      blocks.push(standaloneImage);
      continue;
    }

    const cleaned = cleanLine(rawLine);

    if (!cleaned) {
      flushParagraph();
      flushList();
      continue;
    }

    if (cleaned.startsWith("# ")) {
      continue;
    }

    if (cleaned.startsWith("## ") || cleaned.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: cleaned.replace(/^#{2,3}\s+/, "").trim() });
      continue;
    }

    if (cleaned.startsWith("* ") || cleaned.startsWith("- ")) {
      flushParagraph();
      currentList.push(cleaned.slice(2).trim());
      inUnorderedList = true;
      continue;
    }

    const isListContinuation =
      inUnorderedList && /^\s{2,}\S/.test(rawLine) && !/^\s*[-*]\s+/.test(rawLine);
    if (isListContinuation && currentList.length > 0) {
      const lastIndex = currentList.length - 1;
      currentList[lastIndex] = `${currentList[lastIndex]} ${cleaned}`.trim();
      continue;
    }

    if (cleaned.startsWith("_Contributors:")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "p", text: cleaned.replace(/^_+|_+$/g, "") });
      continue;
    }

    flushList();
    currentParagraph.push(cleaned);
  }

  flushParagraph();
  flushList();

  return blocks;
}

export async function loadLegacyProjectBlocks(publicPath: string) {
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  const source = await readFile(filePath, "utf-8");
  return parseLegacyMarkdown(source);
}
