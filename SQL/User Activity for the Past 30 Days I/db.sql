# URL: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/

# solution 1
select
  activity_date as day,
  count(distinct user_id) as active_users 
  from Activity
where (activity_date > "2019-06-27" AND activity_date <= "2019-07-27")
  group by activity_date;

# solution 2
select
  activity_date as day,
  count(distinct user_id) as active_users 
  from Activity
where DATEDIFF('2019-07-27', activity_date) < 30 AND activity_date <='2019-07-27'
  group by activity_date;