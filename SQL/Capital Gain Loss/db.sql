# URL: https://leetcode.com/problems/capital-gainloss/

select 
    stock_name, 
    SUM(
            case 
                when operation = 'Buy' then (-1)*price
                when operation = 'Sell' then price
            end 
        ) as capital_gain_loss 
from Stocks 
group by stock_name 