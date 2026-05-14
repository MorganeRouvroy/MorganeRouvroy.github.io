"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ContactIcon } from "@/components/contact-icon";
import { navigation } from "@/lib/site-data";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("http")) {
      return false;
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-a" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-b" aria-hidden="true" />

      <header className="topbar">
        <div className="container topbar-inner">
          <Link className="brand" href="/">
            Morgane Rouvroy
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label === "GitHub" ? (
                        <ContactIcon kind="github" className="contact-icon" />
                      ) : null}
                      {item.label === "LinkedIn" ? (
                        <ContactIcon kind="linkedin" className="contact-icon" />
                      ) : null}
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={isActive(item.href) ? "nav-active" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            Senior Software Engineer focused on database systems, query
            optimization, and metadata interoperability.
          </p>
          <div className="footer-links">
            <a href="https://github.com/mrouvroy-floe" target="_blank" rel="noreferrer">
              <ContactIcon kind="github" className="contact-icon" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/morgane-rouvroy/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon kind="linkedin" className="contact-icon" />
              LinkedIn
            </a>
            <a href="mailto:morgane.rouvroy@hotmail.com">
              <ContactIcon kind="email" className="contact-icon" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
