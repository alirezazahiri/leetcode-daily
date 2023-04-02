# https://leetcode.com/problems/calculate-special-bonus/

# solution 1
select employee_id, salary as bonus from Employees
    where employee_id%2=1 and name not like 'M%'
union 
select employee_id, 0 as bonus from Employees
    where employee_id%2=0 or name like 'M%'
order by employee_id asc

# solution 2
select 
    employee_id, 
    (
    case when employee_id%2=1 and name not like 'M%' then 
        salary 
    else 
        0
    end
    ) as bonus
from 
    Employees
order by 
    employee_id asc;

# solution 3
select 
    employee_id,
    salary*(employee_id%2)*(name not like 'M%') as bonus
from 
    employees
order by 
    employee_id asc;