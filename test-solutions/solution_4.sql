/* 

Given a table called 'transactions' like this
+----+--------+
| id | amount |
+----+--------+
|  1 |      5 |
|  2 |      2 |
|  3 |      8 |
|  4 |     62 |
|  5 |     34 |
+----+--------+ 

Expected result
+----+--------+-------+
| id | amount | total |
+----+--------+-------+
|  1 |      5 |     5 |
|  2 |      2 |     7 |
|  3 |      8 |    15 |
|  4 |     62 |    77 |
|  5 |     34 |   111 |
+----+--------+-------+

*/

select t.amount, /* get `amount` from `transactions` table */
       (@sum := @sum + t.amount) as total /* sum up `amount` then stored in `total` */
from transactions t cross join
     (select @sum := 0) params
order by t.amount;