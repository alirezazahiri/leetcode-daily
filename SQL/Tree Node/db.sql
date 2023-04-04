# URL: https://leetcode.com/problems/tree-node/

SELECT t.id,
    CASE
        WHEN t.p_id IS NULL THEN 'Root'
        WHEN EXISTS (SELECT 1 FROM Tree WHERE p_id = t.id) THEN 'Inner'
        ELSE 'Leaf'
    END AS type
FROM Tree t