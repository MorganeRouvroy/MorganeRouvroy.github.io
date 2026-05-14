`to_number` looks like a formatting function. You give it a string and a format mask, it gives you a number. The interface is simple enough that implementing it feels like a few hours of work.

It is not.

The first surprise is the format mask itself. Characters like `9`, `0`, `.`, and `,` have specific meanings that interact in ways you only discover through edge cases. A `,` in the format is a grouping separator in most contexts, but that changes with locale settings. `9` means optional digit, not just any digit. `FM` (fill mode) strips padding and changes how the output is constructed. Each of these is small. Together they form a combinatorial space that is much larger than the function signature suggests.

The second surprise is compatibility. Yellowbrick targets PostgreSQL compatibility, and PostgreSQL's `to_number` has its own set of baked-in decisions, some of which differ from Oracle's version that many users are migrating from. Getting the edge cases right means knowing which behavior the user expects and why.

The third surprise is that format string parsing happens at runtime, not at planning time. This limits what the optimizer can reason about and changes how error handling has to work across the execution layer.

What made this kind of work interesting to me is that it touches every layer of the system: parser, planner, execution, type system, error paths. A function that looks like a string utility turns out to be a small cross-section of the whole engine.

The Yellowbrick Engineering post goes into specific cases and the decisions behind them:

