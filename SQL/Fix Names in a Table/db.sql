# URL: https://leetcode.com/problems/fix-names-in-a-table/

select
    user_id,
    CONCAT(
        UPPER(SUBSTRING(name, 1, 1)),
        LOWER(SUBSTRING(name, 2, LENGTH(name)))
    ) as name
from
    Users
order by
    user_id