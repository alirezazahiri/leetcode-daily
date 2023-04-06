# URL: https://leetcode.com/problems/rising-temperature/

# solution 1 
select w1.id from Weather w1, Weather w2 
    where w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
    and w1.temperature > w2.temperature

# solution 2
select w1.id
    from Weather w1
        join Weather w2 
        on w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
    where w1.temperature > w2.temperature

# solution 3
select w1.id from Weather w1, Weather w2 
    where DATEDIFF(w1.recordDate , w2.recordDate) = 1
    and w1.temperature > w2.temperature
