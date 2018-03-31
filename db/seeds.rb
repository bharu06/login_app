# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


statuses = [{status_code: 200, time: 4}, {status_code: 301, time: 2}, {status_code: 400, time: 5},
          {status_code: 500, time: 2}, {status_code: 201, time: 3}, {status_code: 300, time: 4},
          {status_code: 300, time: 3}, {status_code: 301, time: 1}, {status_code: 200, time: 3},
          {status_code: 201, time: 5}, {status_code: 300, time: 2}, {status_code: 201, time: 3},
          {status_code: 301, time: 2}, {status_code: 500, time: 4}, {status_code: 301, time: 4},
          {status_code: 200, time: 1}, {status_code: 301, time: 5}, {status_code: 302, time: 3},
          {status_code: 500, time: 3}, {status_code: 404, time: 3}, {status_code: 404, time: 9},
          {status_code: 500, time: 4}, {status_code: 400, time: 5}, {status_code: 400, time: 10},
          {status_code: 500, time: 1}, {status_code: 404, time: 1}, {status_code: 300, time: 3},
          {status_code: 500, time: 3}, {status_code: 400, time: 6}, {status_code: 404, time: 1},
          {status_code: 200, time: 2}, {status_code: 301, time: 1}, {status_code: 200, time: 2},
          {status_code: 300, time: 2}, {status_code: 300, time: 3}, {status_code: 201, time: 2},
          {status_code: 301, time: 5}, {status_code: 201, time: 4}, {status_code: 201, time: 4},
          {status_code: 404, time: 5}, {status_code: 400, time: 2}, {status_code: 200, time: 1},
          {status_code: 400, time: 7}, {status_code: 200, time: 5}, {status_code: 404, time: 1},
          {status_code: 500, time: 3}, {status_code: 200, time: 5}, {status_code: 400, time: 3},
          {status_code: 301, time: 1}, {status_code: 404, time: 6}, {status_code: 200, time: 2},
          {status_code: 400, time: 1}, {status_code: 500, time: 7}, {status_code: 400, time: 5},
          {status_code: 404, time: 4}, {status_code: 200, time: 1}, {status_code: 404, time: 3},
          {status_code: 500, time: 3}, {status_code: 200, time: 4}, {status_code: 301, time: 2},
          {status_code: 300, time: 1}, {status_code: 301, time: 2}, {status_code: 400, time: 5},
  ]

for status in statuses
  login_status = LoginStatus.create(status_code: status[:status_code], time: status[:time])
  login_status.save
end
