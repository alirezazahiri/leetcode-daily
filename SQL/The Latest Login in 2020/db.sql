# URL: https://leetcode.com/problems/the-latest-login-in-2020/

select 
    user_id, 
    MAX(time_stamp) as last_stamp 
from Logins 
    where YEAR(time_stamp) = 2020
group by user_id
