# URL: https://leetcode.com/problems/top-travellers/

select 
    name, 
        (
        case 
            when Rides.distance is null then 0    
            when not Rides.distance is null then
                sum(Rides.distance)
        end
        )
        as travelled_distance
from Users 
    left join Rides on 
        Users.id = Rides.user_id 
    group by 
        user_id 
    order by 
        travelled_distance desc, 
        name asc