# URL: https://leetcode.com/problems/find-followers-count/

select 
  user_id, 
  count(distinct follower_id) as followers_count 
from Followers
  group by user_id