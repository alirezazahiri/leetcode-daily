# https://leetcode.com/problems/patients-with-a-condition/

select * from Patients where conditions REGEXP '^DIAB1.*|.* +DIAB1.*'