# URL: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/

select 
    customer_id,
    count(V.visit_id) as count_no_trans 
    from Visits V
left join 
    Transactions T
on 
    T.visit_id = V.visit_id
where 
    T.transaction_id is null
group by 
    V.customer_id