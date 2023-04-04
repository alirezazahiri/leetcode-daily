# URL: https://leetcode.com/problems/second-highest-salary/

# solution 1
SELECT DISTINCT MAX(salary) AS SecondHighestSalary FROM Employee a
  WHERE salary < (SELECT MAX(salary) FROM Employee b WHERE b.salary > a.salary)

# solution 2
SELECT
( 
    SELECT DISTINCT
        salary 
    FROM
        Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;