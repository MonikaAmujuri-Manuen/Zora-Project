ZORA BACKEND – PERFORMANCE TEST REPORT

Project Overview

Project Name: Zora 
Environment: Localhost (Node.js + Express)
Database: MongoDB Atlas (M0 Free Tier)
Testing Tool: k6
Test Date: 02-03-2026


Test Environment

| Component     | Details                           |
| ------------- | --------------------------------- |
| Backend       | Node.js + Express                 |
| Database      | MongoDB Atlas (M0 Shared Cluster) |
| Test Tool     | k6                                |
| Virtual Users | 100-200 VUs                       |
| Duration      | 20–30 seconds                     |


Login api - http://localhost:5000/api/auth/firebase-login


| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 882                     |
| Avg Response Time         | 194 ms                  |
| p90 Response Time         | 978 ms                  |
| p95 Response Time         | 1.29 s                  |
| Max Response Time         | 1.76 s                  |
| Requests per Second (RPS) | 79/s                    |
| Failure Rate              | 0%                      |
| CPU Usage                 | 7.6%                    |
| Memory Usage              | 125 MB                  |
| Notes                     | Stable under load       |



Product Get All API Performance - http://localhost:5000/api/products

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 511                     |
| Avg Response Time         | 1.13 s                  |
| p90 Response Time         | 2.15 s                  |
| p95 Response Time         | 2.23 s                  |
| Max Response Time         | 2.58 s                  |
| Requests per Second (RPS) | 43/s                    |
| Failure Rate              | 0%                      |
| CPU Usage                 | 7.3%                    |
| Memory Usage              | 152 MB                  |
| Notes                     | Stable                  |



Product Get one API Performance - http://localhost:5000/api/products/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 965                     |
| Avg Response Time         | 97 ms                   |
| p90 Response Time         | 140 ms                  |
| p95 Response Time         | 522 ms                  |
| Max Response Time         | 1.21 s                  |
| Requests per Second (RPS) | 87/s                    |
| Failure Rate              | 0%                      |
| CPU Usage                 | 6.75%                   |
| Memory Usage              | 119 MB                  |
| Notes                     | Stable                  |



Protected Routes Security Test (10 VUs)

| Metric            | Result                        |
| ----------------- | ----------------------------- |
| Virtual Users     | 10                            |
| Duration          | 20                            |
| Avg Response Time | 127.47ms                      |
| p95               | 470ms                         |
| Max               | 723ms                         |
| Iterations        | 517                           |
| http_req_failed   | 66% (Expected due to 401/403) |
| CPU Usage         | 17%                           |
| Disk Usage        | 2%                            |


Protected Route Validation Summary

Scenario	                 | Expected | Actual	| Status
No token	                 |   401	  |   401	  |  Pass
User token on admin route  |   403	  |   403	  |  Pass
Admin token on admin route |   200	  |   200	  |  Pass


Cart Add API - http://localhost:5000/api/cart/add


| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 30                      |
| Total Requests            | 931                     |
| Avg Response Time         | 647ms                   |
| p90 Response Time         | 1.46 s                  |
| p95 Response Time         | 2.23 s                  |
| Max Response Time         | 2.88 s                  |
| Requests per Second (RPS) | 29.75/s                 |
| Failure Rate              | 0%                      |
| Notes                      | Stable under load       |


Cart Update API - http://localhost:5000/api/cart/update


| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 30                      |
| Total Requests            | 1340                    |
| Avg Response Time         | 144 ms                  |
| p90 Response Time         | 113 ms                  |
| p95 Response Time         | 182 ms                  |
| Max Response Time         | 2.0 s                   |
| Requests per Second (RPS) | 43.14/s                 |
| Failure Rate              | 0%                      |
| CPU Usage                 | 5%                      |
| Disk Usage                | 2%                      |
| Notes                     | Excellent performance   |


Cart Remove API - http://localhost:5000/api/cart/remove

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 495                     |
| Avg Response Time         | 101 ms                  |
| p90 Response Time         | 113 ms                  |
| p95 Response Time         | 121 ms                  |
| Max Response Time         | 1.17 s                  |
| Requests per Second (RPS) | 45/s                    |
| Failure Rate              | 0%                      |
| CPU Usage                 | 4%                      |
| Disk Usage                | 2%                      |
| Notes                     | stable                  |



Cart Clear API - http://localhost:5000/api/cart/clear

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 415                     |
| Avg Response Time         | 297 ms                  |
| p90 Response Time         | 1.14 s                  |
| p95 Response Time         | 1.55 s                  |
| Max Response Time         | 1.55 s                  |
| Requests per Second (RPS) | 37.42/s                 |
| Failure Rate              | 0%                      |
| CPU Usage                 | 4.8%                    |
| Disk Usage                | 1%                      |
| Notes                     | stable                  |


Order Creation API - http://localhost:5000//api/orders

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Duration                  | 30                      |
| Total Requests            | 130                     |
| Avg Response Time         | 179 ms                  |
| p90 Response Time         | 233 ms                  |
| p95 Response Time         | 330 ms                  |
| Max Response Time         | 515 ms                  |
| Requests per Second (RPS) | 4.23/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 4.8%                    |
| Disk Usage                | 1%                      |
| Notes                     | Stable write performance|


Get Order API - http://localhost:5000//api/orders/my-orders

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 338                     |
| Avg Response Time         | 602 ms                  |
| p90 Response Time         | 1.32 s                  |
| p95 Response Time         | 1.57 s                  |
| Max Response Time         | 2.06 s                  |
| Requests per Second (RPS) | 29.0/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 12%                     |
| Disk Usage                | 4%                      |
| Memory Usage              | 69MB                    |
| Notes                     | High payload            |



Orders cancel API - http://localhost:5000/api/orders/cancel/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 10                      |
| Duration                  | 10                      |
| Total Requests            | 80                      |
| Avg Response Time         | 298 ms                  |
| p90 Response Time         | 996 ms                  |
| p95 Response Time         | 1.18 s                  |
| Max Response Time         | 1.56 s                  |
| Requests per Second (RPS) | 7.07/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 31%                     |
| Disk Usage                | 4%                      |
| Memory Usage              | 47 MB                   |
| Notes                     | Stable Performance      |



Payments Create API - http://localhost:5000/api/payments/create

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 959                     |
| Avg Response Time         | 105 ms                  |
| p90 Response Time         | 209 ms                  |
| p95 Response Time         | 518 ms                  |
| Max Response Time         | 1.2 s                   |
| Requests per Second (RPS) | 86.8/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.15%                   |
| Memory Usage              | 105 MB                  |
| Notes                     | Stable under high       |


Payments Get API - http://localhost:5000/api/payments/:userId

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 960                     |
| Avg Response Time         | 103 ms                  |
| p90 Response Time         | 208 ms                  |
| p95 Response Time         | 506 ms                  |
| Max Response Time         | 1.21 s                  |
| Requests per Second (RPS) | 86.9/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.29%                   |
| Memory Usage              | 105 MB                  |
| Notes                     | Efficient read          |


Address Add API - http://localhost:5000/api/address/add

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 962                     |
| Avg Response Time         | 98 ms                   |
| p90 Response Time         | 141 ms                  |
| p95 Response Time         | 511 ms                  |
| Max Response Time         | 1.0 s                   |
| Requests per Second (RPS) | 86.9/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.98%                   |
| Memory Usage              | 103 MB                  |
| Notes                     | Stable                  |


Address Update API - http://localhost:5000/api/address/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 956                     |
| Avg Response Time         | 104 ms                  |
| p90 Response Time         | 189 ms                  |
| p95 Response Time         | 558 ms                  |
| Max Response Time         | 1.2 s                   |
| Requests per Second (RPS) | 86.5/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 4.01%                   |
| Memory Usage              | 102.15 MB               |
| Notes                     | Stable update           |


Address Delete API - http://localhost:5000/api/address/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 963                     |
| Avg Response Time         | 98.4ms                  |
| p90 Response Time         | 136.31ms                |
| p95 Response Time         | 500.93ms                |
| Max Response Time         | 1.4 s                   |
| Requests per Second (RPS) | 87.1/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.29%                   |
| Memory Usage              | 88.6 MB                 |
| Notes                     | Stable Delete           |


Address Get API - http://localhost:5000/api/address/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 839                     |
| Avg Response Time         | 248 ms                  |
| p90 Response Time         | 861.73ms                |
| p95 Response Time         | 1.44 s                  |
| Max Response Time         | 2.66s                   |
| Requests per Second (RPS) | 76.0/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.26%                   |
| Memory Usage              | 101.9 MB                |
| Notes                     | Stable                  |


Contacts Create API - http://localhost:5000/api/contact

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 896                     |
| Avg Response Time         | 164 ms                  |
| p90 Response Time         | 419 ms                  |
| p95 Response Time         | 808 ms                  |
| Max Response Time         | 2.14 s                  |
| Requests per Second (RPS) | 81.1/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 6.67%                   |
| Memory Usage              | 105.59 MB               |
| Notes                     | Stable                  |


Wishlist Toggle API - http://localhost:5000/api/wishlist/toggle

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 421                     |
| Avg Response Time         | 1.59 s                  |
| p90 Response Time         | 2.27 s                  |
| p95 Response Time         | 2.32 s                  |
| Max Response Time         | 3.21 s                  |
| Requests per Second (RPS) | 34.7/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 11.9%                   |
| Memory Usage              | 95.92 MB                |
| Notes                     | Stable                  |


Wishlist Count API - http://localhost:5000/api/wishlist/count

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 537                     |
| Avg Response Time         | 974 ms                  |
| p90 Response Time         | 1.63 s                  |
| p95 Response Time         | 1.76 s                  |
| Max Response Time         | 2.61 s                  |
| Requests per Second (RPS) | 47.5/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 5.31%                   |
| Memory Usage              | 113.33 MB               |
| Notes                     | Stable                  |



Wishlist Get API - http://localhost:5000/api/wishlist

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 335                     |
| Avg Response Time         | 565 ms                  |
| p90 Response Time         | 1.57 s                  |
| p95 Response Time         | 1.66 s                  |
| Max Response Time         | 2.28 s                  |
| Requests per Second (RPS) | 29.5/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 5.31%                   |
| Memory Usage              | 113.33 MB               |
| Notes                     | Stable                  |



Review Guest Create API - http://localhost:5000/api/reviews

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 268                     |
| Avg Response Time         | 1.08 s                  |
| p90 Response Time         | 1.68 s                  |
| p95 Response Time         | 1.91 s                  |
| Max Response Time         | 2.34 s                  |
| Requests per Second (RPS) | 22.9/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.87%                   |
| Memory Usage              | 113.33 MB               |
| Notes                     | Stable                  |


Review Get API - http://localhost:5000/api/reviews/:productId

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 982                     |
| Avg Response Time         | 84 ms                   |
| p90 Response Time         | 185 ms                  |
| p95 Response Time         | 449 ms                  |
| Max Response Time         | 1.32 s                  |
| Requests per Second (RPS) | 86.9/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 3.5%                    |
| Memory Usage              | 100.46 MB               |
| Notes                     | Efficient               |


Review Update API - http://localhost:5000/api/reviews/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 231                     |
| Avg Response Time         | 3.73 s                  |
| p90 Response Time         | 4.63 s                  |
| p95 Response Time         | 5.07 s                  |
| Max Response Time         | 5.17 s                  |
| Requests per Second (RPS) | 18.7/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 4.95%                   |
| Memory Usage              | 258.03 MB               |
| Notes                     | Slow due to full review |


Review Delete API - http://localhost:5000/api/reviews/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 100                     |
| Duration                  | 10                      |
| Total Requests            | 594                     |
| Avg Response Time         | 203.1 ms                |
| p90 Response Time         | 324.28 ms               |
| p95 Response Time         | 386.13 ms               |
| Max Response Time         | 400.87 ms               |
| Requests per Second (RPS) | 7.7/s                   |
| Failure Rate              | 0%                      |
| CPU Usage                 | 5.67%                   |
| Memory Usage              | 81.47 MB                |
| Notes                     | Stable deletion         |

Update Profile API - http://localhost:5000/api/users/update-profile

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 50                      |
| Duration                  | 10                      |
| Total Requests            | 332                     |
| Avg Response Time         | 601 ms                  |
| p90 Response Time         | 1.21 s                  |
| p95 Response Time         | 1.30 s                  |
| Max Response Time         | 2.46 s                  |
| Requests per Second (RPS) | 29.4/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 6.71%                   |
| Memory Usage              | 106.66 MB               |
| Notes                     | Stable                  |


ADMIN
-------------------------------------------------------------------------------------------

Product Create API Performance - http://localhost:5000/api/products/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 3                       |
| Duration                  | 10                      |
| Total Requests            | 27                      |
| Avg Response Time         | 238.77 ms               |
| p90 Response Time         | 332.2 ms                |
| p95 Response Time         | 338.05 ms               |
| Max Response Time         | 340.93 ms               |
| Requests per Second (RPS) | 2.41/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 6.39%                   |
| Memory Usage              | 79.72 MB                |
| Notes                     | Stable DB write         |


Product Update API Performance - http://localhost:5000/api/products/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Duration                  | 10                      |
| Total Requests            | 40                      |
| Avg Response Time         | 357.15 ms               |
| p90 Response Time         | 797.94 ms               |
| p95 Response Time         | 805.71 ms               |
| Max Response Time         | 811.08 ms               |
| Requests per Second (RPS) | 3.63/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 7.61%                   |
| Memory Usage              | 80.64 MB                |
| Notes                     | Stable                  |


Product Delete API Performance - http://localhost:5000/api/products/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 18                      |
| Avg Response Time         | 228.05 ms               |
| p90 Response Time         | 273.66 ms               |
| p95 Response Time         | 364.18 ms               |
| Max Response Time         | 367.92 ms               |
| Requests per Second (RPS) | 1.62/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 8.20%                   |
| Memory Usage              | 78.52 MB                |
| Notes                     | Fastest write operation |


Admin Get Orders API  - http://localhost:5000/api/admin/orders

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 3                       |
| Test Duration             | 10                      |
| Total Requests            | 24                      |
| Avg Response Time         | 341.41 ms               |
| p90 Response Time         | 510.96 ms               |
| p95 Response Time         | 532.56 ms               |
| Max Response Time         | 557.22 ms               |
| Requests per Second (RPS) | 2.22 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 9.57%                   |
| Memory Usage              | 84.62 MB                |
| Notes                     | Stable performance      |


Orders Update Status API - http://localhost:5000/api/orders/:id/status

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 10                      |
| Test Duration             | 10                      |
| Total Requests            | 90                      |
| Avg Response Time         | 132 ms                  |
| p90 Response Time         | 176 ms                  |
| p95 Response Time         | 187 ms                  |
| Max Response Time         | 204 ms                  |
| Requests per Second (RPS) | 8.78/s                  |
| Failure Rate              | 0%                      |
| CPU Usage                 | 7.7%                    |
| Memory Usage              | 57.83 MB                |
| Notes                     | Fast & Stable           |


Admin Dashboard Get API - http://localhost:5000/api/admin/dashboard

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 3                       |
| Test Duration             | 10                      |
| Total Requests            | 21                      |
| Avg Response Time         | 490.99 ms               |
| p90 Response Time         | 666.93 ms               |
| p95 Response Time         | 676.45 ms               |
| Max Response Time         | 687.41 ms               |
| Requests per Second (RPS) | 1.97 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 10.14%                  |
| Memory Usage              | 80.59 MB                |
| Notes                     | Stable                  |


Admin Users Get API - http://localhost:5000/api/admin/all

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 3                       |
| Test Duration             | 10                      |
| Total Requests            | 30                      |
| Avg Response Time         | 93.91 ms                |
| p90 Response Time         | 101.09 ms               |
| p95 Response Time         | 102.08 ms               |
| Max Response Time         | 108.74 ms               |
| Requests per Second (RPS) | 2.73 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 10.87%                  |
| Memory Usage              | 76.52 MB                |
| Notes                     | Fast read operation     |



Admin Users Delete API - http://localhost:5000/api/admin/users/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 18                      |
| Avg Response Time         | 136.24 ms               |
| p90 Response Time         | 145.22 ms               |
| p95 Response Time         | 146.14 ms               |
| Max Response Time         | 147.11 ms               |
| Requests per Second (RPS) | 1.75 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 11.12%                  |
| Memory Usage              | 74.63 MB                |
| Notes                     | Fast and stable         |


Admin Reviews Get API - http://localhost:5000/api/admin/reviews

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 3                       |
| Test Duration             | 10                      |
| Total Requests            | 24                      |
| Avg Response Time         | 291.06 ms               |
| p90 Response Time         | 520.96 ms               |
| p95 Response Time         | 532.84 ms               |
| Max Response Time         | 927.78 ms               |
| Requests per Second (RPS) | 2.29 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 11.47%                  |
| Memory Usage              | 80.79 MB                |
| Notes                     |Late due to large dataset|


Admin Reviews Delete API - http://localhost:5000/api/admin/reviews/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 20                      |
| Avg Response Time         | 91.41 ms                |
| p90 Response Time         | 103.19 ms               |
| p95 Response Time         | 104.81 ms               |
| Max Response Time         | 105.84 ms               |
| Requests per Second (RPS) | 1.83 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 11.59%                  |
| Memory Usage              | 76.64 MB                |
| Notes                     | Fast database delete    |

Admin Reviews Stats API - http://localhost:5000/api/admin/review-stats

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Test Duration             | 10                      |
| Total Requests            | 45                      |
| Avg Response Time         | 129.08 ms               |
| p90 Response Time         | 141.83 ms               |
| p95 Response Time         | 142.82 ms               |
| Max Response Time         | 143.92 ms               |
| Requests per Second (RPS) | 4.41 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 11.69%                  |
| Memory Usage              | 77.82 MB                |
| Notes                     | Stable Performance      |


Admin Settings Get API - http://localhost:5000/api/admin/settings

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Test Duration             | 10                      |
| Total Requests            | 50                      |
| Avg Response Time         | 91.39 ms                |
| p90 Response Time         | 111.49 ms               |
| p95 Response Time         | 113.70 ms               |
| Max Response Time         | 123.46 ms               |
| Requests per Second (RPS) | 4.57 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 12.86%                  |
| Memory Usage              | 78.65 MB                |
| Notes                     | Stable and Efficient    |


Admin Settings Put API - http://localhost:5000/api/admin/settings

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 18                      |
| Avg Response Time         | 143.29 ms               |
| p90 Response Time         | 167.15 ms               |
| p95 Response Time         | 183.86 ms               |
| Max Response Time         | 189.79 ms               |
| Requests per Second (RPS) | 1.75 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 13.02%                  |
| Memory Usage              | 77.07 MB                |
| Notes                     | Stable Update           |


Admin Contacts Get API - http://localhost:5000/api/admin/settings

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Test Duration             | 10                      |
| Total Requests            | 50                      |
| Avg Response Time         | 88.82 ms                |
| p90 Response Time         | 104.63 ms               |
| p95 Response Time         | 111.47 ms               |
| Max Response Time         | 114.22 ms               |
| Requests per Second (RPS) | 4.58 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 13.61%                  |
| Memory Usage              | 76.89 MB                |
| Notes                     | Fast and Stable         |


Admin Contacts Reply API - http://localhost:5000/api/admin/contacts/:id/reply

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 20                      |
| Avg Response Time         | 89.08 ms                |
| p90 Response Time         | 97.45 ms                |
| p95 Response Time         | 119.46 ms               |
| Max Response Time         | 121.07 ms               |
| Requests per Second (RPS) | 1.83 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 14.06%                  |
| Memory Usage              | 76.76 MB                |
| Notes                     | Fast and Stable         |


Admin Contacts Delete API - http://localhost:5000/api/admin/contacts/:id

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 20                      |
| Avg Response Time         | 88.98 ms                |
| p90 Response Time         | 96.66 ms                |
| p95 Response Time         | 107.35 ms               |
| Max Response Time         | 109.16 ms               |
| Requests per Second (RPS) | 1.83 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 14.23%                  |
| Memory Usage              | 87.54 MB                |
| Notes                     | Fast delete operation   |


Admin Profile Get API - http://localhost:5000/api/admin/profile

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 5                       |
| Test Duration             | 10                      |
| Total Requests            | 50                      |
| Avg Response Time         | 88.23 ms                |
| p90 Response Time         | 102.64 ms               |
| p95 Response Time         | 104.03 ms               |
| Max Response Time         | 105.91 ms               |
| Requests per Second (RPS) | 4.58 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 14.63%                  |
| Memory Usage              | 79.20 MB                |
| Notes                     | Efficient Performance   |


Admin Profile Update API - http://localhost:5000/api/admin/profile

| Metric                    | Result                  |
| -----------------         | ----------------------- |
| Virtual Users             | 2                       |
| Test Duration             | 10                      |
| Total Requests            | 18                      |
| Avg Response Time         | 137.77 ms               |
| p90 Response Time         | 157.75 ms               |
| p95 Response Time         | 159.92 ms               |
| Max Response Time         | 163.18 ms               |
| Requests per Second (RPS) | 1.75 req/s              |
| Failure Rate              | 0%                      |
| CPU Usage                 | 14.84%                  |
| Memory Usage              | 79.73 MB                |
| Notes                     | Stable write operation  |
