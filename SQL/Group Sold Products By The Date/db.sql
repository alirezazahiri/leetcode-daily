# URL: https://leetcode.com/problems/group-sold-products-by-the-date/

select 
    sell_date,
    COUNT(sell_date) as num_sold, 
    GROUP_CONCAT(distinct product order by product) as products
from (SELECT DISTINCT sell_date,product FROM Activities) as Activities
    group by sell_date