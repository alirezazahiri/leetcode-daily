# URL: https://leetcode.com/problems/combine-two-tables/


# solution 1
select firstName, lastName, city, state 
  from Person 
  left join Address 
    on Person.personId = Address.personId


# solution 2
select firstName, lastName, city, state
  from Person 
  left join Address USING(personId)