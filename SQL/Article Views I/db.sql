# https://leetcode.com/problems/article-views-i/


# solution 1
select author_id as id from
    (
        select distinct 
            author_id,
            viewer_id,
            count(view_date) as view_count
        from Views
        where author_id = viewer_id
        group by article_id
    ) as Views
order by id asc

# solution 2
select distinct 
    author_id as id
from Views
    where author_id = viewer_id
order by id asc;