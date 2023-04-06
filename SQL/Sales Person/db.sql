# URL: https://leetcode.com/problems/sales-person/

# solution 1
select distinct name from SalesPerson where name not in (
    select distinct sp.name from SalesPerson sp 
    left join Orders o on sp.sales_id = o.sales_id
    left join Company c on c.com_id = o.com_id 
    where c.name = 'RED'
)

# solution 2
select name from (select distinct sp.name, GROUP_CONCAT(c.name) as companies from SalesPerson sp 
    left join Orders o on sp.sales_id = o.sales_id
    left join Company c on c.com_id = o.com_id 
    group by sp.sales_id) as Records
where not (companies like '%RED%') or companies is null
