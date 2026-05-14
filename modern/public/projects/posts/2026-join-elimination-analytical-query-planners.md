In the summer of 2022, I implemented join elimination for a newer version of the Yellowbrick query planner. The codebase was based on PostgreSQL 9.5 at the time, which defined the scope we were working within: outer join to-one removal, where a join can be safely dropped when the joined table contributes nothing to the output and is guaranteed to match at most one row on the driving side.

That scope sounds narrow, but it covers a large share of real analytical queries. ETL pipelines and BI tools routinely generate joins to dimension tables for filtering or labeling that never make it into the final projection.

The most common pattern is a left join on a foreign key where none of the joined columns appear in the output. That feels obviously safe to remove. But the planner still has to verify: is the join actually outer? Is the joined side guaranteed to be to-one? If the FK column is nullable, does that affect cardinality? Getting those checks right is most of the work.

Cardinality is the key invariant. A join can change the number of output rows even if none of the joined columns appear in the projection. An inner join on a non-unique key will duplicate rows from the driving side. An outer join to a non-unique FK can do the same. The planner has to know the join is row-preserving before elimination is safe.

What I liked about this kind of work is the downstream payoff. In a distributed analytical system, eliminating a join can remove an entire shuffle or broadcast stage. The optimizer rule looks small. The runtime impact often isn't.
