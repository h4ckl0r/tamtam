// src/data.ts

import type { RootObject } from "./types";

export const db: RootObject = {
  data: {
    id: 177,
    testName: "PTIT-K24-CSDL-Hackathon - Trắc nghiệm",
    status: true,
    time: 45,
    type: "TRẮC NGHIỆM",
    created_at: "2026-01-07T04:18:54.000Z",
    questionTests: [
      {
        id: 4687,
        content:
          'Trong mô hình cơ sở dữ liệu quan hệ, một "bảng" (table) đại diện cho điều gì?',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18285,
            content: "A. Một tập hợp các tệp tin.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18286,
            content: "B. Một thực thể hoặc một mối quan hệ.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18287,
            content: "C. Một chương trình điều khiển.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18288,
            content: "D. Một sơ đồ mạng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4688,
        content: "Khóa chính (Primary Key) có đặc điểm nào sau đây?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18289,
            content: "A. Có thể chứa giá trị NULL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18290,
            content: "B. Có thể có nhiều giá trị trùng nhau.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18291,
            content: "C. Định danh duy nhất cho mỗi hàng trong bảng.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18292,
            content: "D. Chỉ được phép là kiểu dữ liệu số.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4689,
        content: "Nhóm lệnh DDL (Data Definition Language) dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18293,
            content: "A. Thêm, sửa, xóa dữ liệu trong bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18294,
            content: "B. Định nghĩa và thay đổi cấu trúc cơ sở dữ liệu.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18295,
            content: "C. Truy vấn và lấy thông tin dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18296,
            content: "D. Kiểm soát quyền truy cập của người dùng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4690,
        content: "Kiểu dữ liệu nào sau đây dùng để lưu trữ số nguyên?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18297,
            content: "A. VARCHAR",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18298,
            content: "B. DECIMAL",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18299,
            content: "C. INT",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18300,
            content: "D. DATE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4691,
        content: "Lệnh nào dùng để tạo một cơ sở dữ liệu mới?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18301,
            content: "A. MAKE DATABASE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18302,
            content: "B. NEW DATABASE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18303,
            content: "C. CREATE DATABASE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18304,
            content: "D. ADD DATABASE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4692,
        content:
          "Để xóa toàn bộ một bảng bao gồm cả cấu trúc và dữ liệu, ta dùng lệnh nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18305,
            content: "A. DELETE TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18306,
            content: "B. DROP TABLE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18307,
            content: "C. REMOVE TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18308,
            content: "D. TRUNCATE TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4693,
        content: 'Ràng buộc "UNIQUE" đảm bảo điều gì?',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18309,
            content: "A. Cột không được chứa giá trị trống.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18310,
            content: "B. Tất cả giá trị trong cột phải khác nhau.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18311,
            content: "C. Cột phải là khóa chính.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18312,
            content: "D. Cột phải liên kết với bảng khác.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4694,
        content:
          "Mệnh đề nào dùng để lọc dữ liệu theo điều kiện trong câu lệnh SELECT?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18313,
            content: "A. ORDER BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18314,
            content: "B. GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18315,
            content: "C. WHERE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18316,
            content: "D. HAVING",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4695,
        content:
          "CREATE TABLE orders (\r\n    id INT PRIMARY KEY,\r\n    customer_id INT,\r\n    order_date DATE,\r\n    total DECIMAL(10, 2),\r\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\r\n);\r\nCâu lệnh SQL trên có tạo ra liên kết giữa bảng nào với bảng nào, và kiểu liên kết là gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18317,
            content: "A. Giữa orders và customers, liên kết một-một",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18318,
            content: "B. Giữa customers và orders, liên kết một-nhiều",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18319,
            content: "C. Giữa orders và customers, liên kết nhiều-nhiều",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18320,
            content: "D. Không có liên kết nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4696,
        content: "Kiểu dữ liệu VARCHAR(255) có ý nghĩa gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18321,
            content: "A. Chuỗi có độ dài cố định 255 ký tự.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18322,
            content: "B. Chuỗi có độ dài thay đổi, tối đa 255 ký tự.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18323,
            content: "C. Số nguyên có tối đa 255 chữ số.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18324,
            content: "D. Kiểu ngày tháng năm.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4697,
        content: "Lệnh INSERT INTO dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18325,
            content: "A. Tạo bảng mới.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18326,
            content: "B. Cập nhật dữ liệu cũ.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18327,
            content: "C. Thêm bản ghi mới vào bảng.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18328,
            content: "D. Xóa bản ghi trong bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4698,
        content:
          "INSERT INTO orders (id, customer_id, order_date, total) VALUES \r\n(1, 101, '2023-01-15', 250.00),\r\n(2, 102, '2023-01-16', 300.00),\r\n(3, 103, '2023-01-17', 150.00); \r\n(bảng orders có cột customer_id là khóa ngoại tham chiếu đến bảng customers)\r\nNếu customer_id trong bảng customers không tồn tại, điều gì sẽ xảy ra ?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18329,
            content: "A. Thêm bản ghi sẽ thành công",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18330,
            content: "B. Gây ra lỗi và không thêm bản ghi nào",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18331,
            content: "C. Thêm một bản ghi với giá trị customer_id là NULL",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18332,
            content: "D. Cập nhật customer_id thành giá trị hợp lệ",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4699,
        content:
          'Mối quan hệ "Một - Nhiều" (1-N) thường được thể hiện thông qua:',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18333,
            content: "A. Khóa chính ở cả hai bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18334,
            content: 'B. Khóa ngoại ở bảng bên "Nhiều".',
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18335,
            content: "C. Bảng trung gian.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18336,
            content: "D. Không cần ràng buộc.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4700,
        content: "Lệnh nào dùng để sắp xếp kết quả truy vấn?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18337,
            content: "A. SORT BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18338,
            content: "B. ARRANGE BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18339,
            content: "C. ORDER BY",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18340,
            content: "D. GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4701,
        content: "Hàm nào dùng để đếm số lượng bản ghi?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18341,
            content: "A. SUM()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18342,
            content: "B. COUNT()",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18343,
            content: "C. AVG()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18344,
            content: "D. TOTAL()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4702,
        content:
          "UPDATE employees SET salary = salary * 1.05 WHERE id IN \r\n(SELECT employee_id FROM projects WHERE budget < 10000);\r\nLệnh SQL này xử lý gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18345,
            content:
              "A. Tăng lương 5% cho tất cả nhân viên dự án có ngân sách dưới 10000",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18346,
            content:
              "B. Tăng lương 5% cho những nhân viên không tham gia dự án",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18347,
            content:
              "C. Cập nhật ngân sách cho nhân viên tham gia dự án dưới 10000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18348,
            content: "D. Không có lệnh update nào được thực hiện",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4703,
        content: "Mệnh đề LIMIT trong MySQL dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18349,
            content: "A. Giới hạn số lượng hàng trả về.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18350,
            content: "B. Giới hạn số lượng cột truy vấn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18351,
            content: "C. Giới hạn thời gian thực thi lệnh.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18352,
            content: "D. Giới hạn kích thước file dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4704,
        content: "Lệnh ALTER TABLE dùng để:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18353,
            content: "A. Xóa bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18354,
            content: "B. Thay đổi cấu trúc của bảng (thêm/sửa cột).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18355,
            content: "C. Thay đổi dữ liệu hàng loạt.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18356,
            content: "D. Sắp xếp lại thứ tự hàng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4705,
        content: "Ràng buộc DEFAULT dùng để:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18357,
            content: "A. Ngăn chặn giá trị NULL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18358,
            content:
              "B. Thiết lập giá trị mặc định cho cột khi không có dữ liệu chèn vào.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18359,
            content: "C. Kiểm tra điều kiện logic của dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18360,
            content: "D. Làm khóa chính cho bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4706,
        content:
          "SELECT COUNT(DISTINCT customer_id) FROM orders;\r\nCâu lệnh này trả về kết quả gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18361,
            content: "A. Tổng số đơn hàng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18362,
            content: "B. Số lượng khách hàng duy nhất mua hàng",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18363,
            content: "C. Tổng số khách hàng trong bảng khách hàng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18364,
            content: "D. Số lượng đơn hàng theo từng khách hàng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4707,
        content: "Nhóm lệnh DML bao gồm các lệnh nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18365,
            content: "A. CREATE, ALTER, DROP",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18366,
            content: "B. SELECT, INSERT, UPDATE, DELETE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18367,
            content: "C. GRANT, REVOKE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18368,
            content: "D. COMMIT, ROLLBACK",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4708,
        content: "Phép nối INNER JOIN trả về:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18369,
            content: "A. Tất cả các hàng của bảng trái.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18370,
            content: "B. Tất cả các hàng của bảng phải.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18371,
            content: "C. Chỉ những hàng có giá trị khớp ở cả hai bảng.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18372,
            content: "D. Tất cả các hàng của cả hai bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4709,
        content:
          "Để xóa một hàng cụ thể trong bảng, ta dùng lệnh DELETE kết hợp với:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18373,
            content: "A. LIMIT",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18374,
            content: "B. ORDER BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18375,
            content: "C. WHERE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18376,
            content: "D. GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4710,
        content:
          "DELETE FROM employees WHERE id = (SELECT id FROM employees WHERE salary < 20000 LIMIT 1);\r\n Lệnh SQL này sẽ làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18377,
            content: "A. Xóa tất cả nhân viên có lương dưới 20000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18378,
            content: "B. Xóa một nhân viên có lương thấp nhất",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18379,
            content: "C. Gây ra lỗi vì subquery trả về nhiều kết quả",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18380,
            content: "D. Không thực hiện thao tác nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4711,
        content: "Hàm MIN() trả về:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 1,
        optionTests: [
          {
            id: 18381,
            content: "A. Giá trị trung bình.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18382,
            content: "B. Giá trị nhỏ nhất trong cột.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18383,
            content: "C. Tổng các giá trị.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18384,
            content: "D. Số lượng hàng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4712,
        content:
          "Để tìm các hàng có giá trị cột \"Name\" bắt đầu bằng chữ 'A', ta dùng:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18385,
            content: "A. WHERE Name = 'A%'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18386,
            content: "B. WHERE Name LIKE 'A%'",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18387,
            content: "C. WHERE Name LIKE '%A'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18388,
            content: "D. WHERE Name = '%A%'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4713,
        content: "Điểm khác biệt lớn nhất giữa DELETE và TRUNCATE là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18389,
            content: "A. DELETE xóa cấu trúc bảng, TRUNCATE thì không.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18390,
            content:
              "B. TRUNCATE xóa nhanh hơn và không ghi log chi tiết từng hàng như DELETE.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18391,
            content: "C. DELETE không dùng được mệnh đề WHERE.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18392,
            content: "D. TRUNCATE cho phép khôi phục dữ liệu dễ dàng hơn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4714,
        content: "Toán tử BETWEEN 10 AND 20 sẽ lấy các giá trị:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18393,
            content: "A. Lớn hơn 10 và nhỏ hơn 20.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18394,
            content: "B. Từ 10 đến 20 (bao gồm cả 10 và 20).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18395,
            content: "C. Chỉ lấy giá trị 10 và 20.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18396,
            content: "D. Nhỏ hơn 10 hoặc lớn hơn 20.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4715,
        content: "Câu lệnh SELECT DISTINCT dùng để:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18397,
            content: "A. Lấy dữ liệu từ nhiều bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18398,
            content:
              "B. Loại bỏ các dòng dữ liệu trùng lặp trong kết quả trả về.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18399,
            content: "C. Sắp xếp dữ liệu theo thứ tự ngược lại.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18400,
            content: "D. Lọc dữ liệu theo điều kiện phức tạp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4716,
        content: "Mệnh đề HAVING dùng để lọc dữ liệu khi nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18401,
            content: "A. Trước khi nhóm dữ liệu bằng GROUP BY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18402,
            content: "B. Sau khi đã nhóm dữ liệu bằng GROUP BY.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18403,
            content: "C. Thay thế hoàn toàn mệnh đề WHERE.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18404,
            content: "D. Chỉ dùng được với các cột Khóa chính.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4717,
        content:
          "Khi thực hiện LEFT JOIN giữa bảng A và bảng B, nếu một hàng ở bảng A không có giá trị tương ứng ở bảng B thì kết quả tại các cột của bảng B sẽ là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18405,
            content: "A. Rỗng (Empty string)",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18406,
            content: "B. Báo lỗi",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18407,
            content: "C. NULL",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18408,
            content: "D. 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4718,
        content:
          "SELECT name, CASE \r\n              WHEN salary < 30000 THEN 'Low'\r\n              WHEN salary BETWEEN 30000 AND 60000 THEN 'Medium'\r\n              ELSE 'High' \r\n            END AS salary_level\r\nFROM employees;\r\nCâu lệnh SQL này dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18409,
            content: "A. Phân loại nhân viên theo tên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18410,
            content: "B. Tính lương trung bình cho nhân viên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18411,
            content:
              "C. Phân loại lương của nhân viên thành các mức: Thấp, Trung bình, Cao",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18412,
            content: "D. Xóa các nhân viên có lương thấp",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4719,
        content:
          "Thứ tự thực thi (Logical Processing) đúng của các mệnh đề là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18413,
            content: "A. SELECT -> FROM -> WHERE -> GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18414,
            content: "B. FROM -> WHERE -> GROUP BY -> SELECT",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18415,
            content: "C. SELECT -> WHERE -> FROM -> GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18416,
            content: "D. FROM -> SELECT -> WHERE -> GROUP BY",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4720,
        content: "Ràng buộc FOREIGN KEY giúp đảm bảo tính chất gì của CSDL?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18417,
            content: "A. Tính toàn vẹn thực thể.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18418,
            content: "B. Tính toàn vẹn tham chiếu.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18419,
            content: "C. Tính bảo mật.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18420,
            content: "D. Tính không trùng lặp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4721,
        content: "Cú pháp sửa tên cột trong lệnh ALTER TABLE là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18421,
            content: "A. RENAME COLUMN",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18422,
            content: "B. CHANGE COLUMN hoặc MODIFY COLUMN (tùy DBMS)",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18423,
            content: "C. UPDATE COLUMN",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18424,
            content: "D. SET COLUMN NAME",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4722,
        content: "Để lấy 5 bản ghi bắt đầu từ bản ghi thứ 11, ta dùng:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18425,
            content: "A. LIMIT 5 OFFSET 10",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18426,
            content: "B. LIMIT 10 OFFSET 5",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18427,
            content: "C. LIMIT 5, 11",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18428,
            content: "D. OFFSET 11 LIMIT 5",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4723,
        content:
          "Phép nối nào trả về tất cả bản ghi của cả hai bảng, kể cả khi không khớp?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18429,
            content: "A. INNER JOIN",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18430,
            content: "B. LEFT JOIN",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18431,
            content: "C. FULL OUTER JOIN",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18432,
            content: "D. CROSS JOIN",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4724,
        content: "Toán tử IN dùng để:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18433,
            content: "A. So sánh giá trị với một danh sách các giá trị cụ thể.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18434,
            content: "B. Kiểm tra xem giá trị có nằm trong khoảng không.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18435,
            content: "C. Tìm kiếm chuỗi ký tự.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18436,
            content: "D. Nối hai bảng dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4725,
        content:
          "Nếu chạy câu lệnh UPDATE mà quên mệnh đề WHERE thì điều gì xảy ra?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18437,
            content: "A. Câu lệnh bị lỗi.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18438,
            content: "B. Không có hàng nào được cập nhật.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18439,
            content: "C. Toàn bộ hàng trong bảng sẽ bị cập nhật giá trị mới.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18440,
            content: "D. Chỉ hàng đầu tiên được cập nhật.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4726,
        content:
          "Để gán bí danh cho một cột giúp kết quả hiển thị dễ đọc hơn, ta dùng từ khóa:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18441,
            content: "A. LIKE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18442,
            content: "B. AS",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18443,
            content: "C. IS",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18444,
            content: "D. SET",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4727,
        content: "Hàm nào trả về tổng giá trị của một cột số?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18445,
            content: "A. ADD()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18446,
            content: "B. TOTAL()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18447,
            content: "C. SUM()",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18448,
            content: "D. COUNT()",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4728,
        content: "Toán tử IS NULL dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18449,
            content: "A. Kiểm tra xem một cột có giá trị bằng 0 hay không.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18450,
            content:
              "B. Kiểm tra xem một cột có chứa giá trị trống (NULL) hay không.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18451,
            content: "C. Gán giá trị rỗng cho cột.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18452,
            content: "D. Xóa giá trị trong cột.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4729,
        content: "Mệnh đề ORDER BY Salary DESC, Name ASC có nghĩa là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18453,
            content:
              "A. Sắp xếp Lương giảm dần, nếu bằng nhau thì sắp xếp Tên tăng dần.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18454,
            content: "B. Sắp xếp Lương tăng dần, Tên giảm dần.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18455,
            content: "C. Sắp xếp cả hai cột đều giảm dần.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18456,
            content: "D. Sắp xếp ngẫu nhiên.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4730,
        content: "Kiểu dữ liệu DECIMAL(10,2) có nghĩa là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18457,
            content:
              "A. Số có 10 chữ số phần nguyên và 2 chữ số phần thập phân.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18458,
            content:
              "B. Tổng cộng có 10 chữ số, trong đó có 2 chữ số sau dấu phẩy.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18459,
            content: "C. Số có tối đa 12 chữ số.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18460,
            content: "D. Số nguyên có độ dài 10 byte.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4731,
        content:
          "Câu lệnh nào dùng để xóa tất cả dữ liệu trong bảng nhưng giữ lại cấu trúc?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18461,
            content: "A. DROP TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18462,
            content: "B. TRUNCATE TABLE",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18463,
            content: "C. ALTER TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18464,
            content: "D. REMOVE TABLE",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4732,
        content: "Ràng buộc CHECK được sử dụng để:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18465,
            content:
              "A. Đảm bảo dữ liệu nhập vào thỏa mãn một điều kiện logic (ví dụ: Age > 18).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18466,
            content: "B. Tự động tăng giá trị ID.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18467,
            content: "C. Liên kết hai bảng với nhau.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18468,
            content: "D. Ngăn chặn việc xóa bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4733,
        content:
          "SELECT p.product_name, c.category_name \r\nFROM products p \r\nJOIN categories c ON p.category_id = c.id \r\nWHERE c.category_name LIKE 'Electronics%';\r\nCâu lệnh SQL trên có chức năng gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18469,
            content: "A. Lấy tất cả sản phẩm không thuộc loại 'Electronics'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18470,
            content:
              "B. Lấy tất cả sản phẩm và tên danh mục tương ứng thuộc loại 'Electronics'",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18471,
            content: "C. Đếm số lượng sản phẩm trong danh mục 'Electronics'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18472,
            content: "D. Cập nhật tên sản phẩm trong danh mục 'Electronics'",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4734,
        content:
          "CREATE TABLE sales (\r\n    id INT PRIMARY KEY,\r\n    sale_date DATE,\r\n    revenue DECIMAL(10, 2),\r\n    CHECK (revenue > 0)\r\n);\r\n Ràng buộc CHECK trong bảng sales có mục đích gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18473,
            content: "A. Đảm bảo rằng doanh thu không âm",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18474,
            content: "B. Đảm bảo rằng doanh thu không vượt quá 100000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18475,
            content: "C. Đảm bảo không có bản ghi trùng lặp",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18476,
            content:
              "D. Đảm bảo mỗi bản ghi phải có ít nhất một trường NOT NULL",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4735,
        content:
          "SELECT department_id, COUNT(*) AS num_employees \r\nFROM employees \r\nGROUP BY department_id \r\nHAVING num_employees > 5;\r\n Câu lệnh SQL trên sẽ trả về điều gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18477,
            content: "A. Số nhân viên trong tất cả các phòng ban",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18478,
            content: "B. Danh sách các department_id có hơn 5 nhân viên",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18479,
            content: "C. Tất cả thông tin nhân viên theo department_id",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18480,
            content: "D. Không có gì, vì HAVING không hợp lệ",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4736,
        content:
          "SELECT DISTINCT department_id FROM employees WHERE salary > 50000;\r\n Câu lệnh SQL này có ý nghĩa gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 2,
        optionTests: [
          {
            id: 18481,
            content:
              "A. Lấy tất cả id của phòng ban có nhân viên lương trên 50000",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18482,
            content: "B. Lấy tất cả nhân viên có lương trên 50000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18483,
            content:
              "C. Lấy tất cả phòng ban mà không có nhân viên lương trên 50000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18484,
            content: "D. Xóa phòng ban có nhân viên lương trên 50000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4737,
        content:
          "Truy vấn lồng (Subquery) trong mệnh đề WHERE thường dùng kết hợp với các toán tử nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18485,
            content: "A. IN, ANY, ALL, EXISTS",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18486,
            content: "B. GROUP BY, HAVING",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18487,
            content: "C. ORDER BY, LIMIT",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18488,
            content: "D. UNIQUE, OFFSET",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4738,
        content:
          "SELECT name \r\nFROM employees \r\nWHERE EXISTS (SELECT * FROM projects WHERE employee_id = employees.id);\r\nCâu lệnh này trả về kết quả gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18489,
            content: "A. Nhân viên không tham gia dự án",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18490,
            content: "B. Nhân viên tham gia ít nhất một dự án",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18491,
            content: "C. Tất cả nhân viên trong bảng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18492,
            content: "D. Không có nhân viên nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4739,
        content:
          "SELECT customer_id, SUM(total) \r\nFROM orders \r\nGROUP BY customer_id \r\nORDER BY SUM(total) DESC;\r\nCâu lệnh SQL trên sẽ làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18493,
            content:
              "A. Lấy tổng số đơn hàng của từng khách hàng theo thứ tự tăng dần",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18494,
            content:
              "B. Lấy tổng doanh thu của từng khách hàng theo thứ tự giảm dần",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18495,
            content: "C. Lấy tất cả khach hàng có doanh thu bằng 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18496,
            content: "D. Lấy danh sách khách hàng mà không có đơn hàng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4740,
        content: "Khi nào nên sử dụng Subquery thay vì JOIN?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18497,
            content:
              "A. Khi cần tính toán các giá trị thống kê để so sánh (như tìm người có lương cao hơn lương TB).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18498,
            content: "B. Khi muốn lấy dữ liệu từ nhiều bảng để hiển thị.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18499,
            content: "C. Luôn luôn dùng Subquery vì nó chạy nhanh hơn JOIN.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18500,
            content: "D. Khi không biết tên bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4741,
        content: "Mệnh đề CASE WHEN dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18501,
            content:
              "A. Thực hiện logic rẽ nhánh (if-else) ngay trong câu lệnh truy vấn.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18502,
            content: "B. Thay đổi cấu trúc bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18503,
            content: "C. Nhóm dữ liệu theo điều kiện.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18504,
            content: "D. Tạo khóa chính tự động.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4742,
        content:
          "CREATE TABLE users (\r\n    id INT PRIMARY KEY AUTO_INCREMENT,\r\n    username VARCHAR(30) NOT NULL UNIQUE,\r\n    password VARCHAR(255) NOT NULL\r\n);\r\nĐiều gì xảy ra khi bạn không chỉ định AUTO_INCREMENT?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18505,
            content: "A. Bảng sẽ không được tạo",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18506,
            content: "B. Bạn phải tự quản lý giá trị id cho mỗi bản ghi",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18507,
            content: "C. id sẽ được gán tự động mặc định là 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18508,
            content: "D. id sẽ không thể chứa giá trị NULL",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4743,
        content:
          "SELECT * FROM employees WHERE id NOT IN (SELECT employee_id FROM projects);\r\nCâu lệnh này trả về điều gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18509,
            content: "A. Nhân viên không tham gia dự án nào",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18510,
            content: "B. Tất cả nhân viên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18511,
            content: "C. Nhân viên tham gia dự án",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18512,
            content: "D. Nhân viên có id = 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4744,
        content:
          "Để lấy danh sách nhân viên có mức lương cao hơn mức lương trung bình của phòng ban họ, ta dùng loại Subquery nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18513,
            content: "A. Scalar Subquery độc lập.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18514,
            content: "B. Correlated Subquery.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18515,
            content: "C. Column Subquery.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18516,
            content: "D. Không dùng được Subquery.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4745,
        content: "Thứ tự thực thi của Subquery trong mệnh đề WHERE là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18517,
            content:
              "A. Truy vấn ngoài chạy trước, sau đó mới đến truy vấn lồng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18518,
            content:
              "B. Truy vấn lồng (inner) chạy trước, trả kết quả cho truy vấn ngoài (outer) chạy sau.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18519,
            content: "C. Cả hai chạy đồng thời.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18520,
            content: "D. Tùy thuộc vào mệnh đề ORDER BY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4746,
        content:
          "Nếu Subquery lồng nhiều cấp (ví dụ 3 cấp), cấp nào sẽ được thực thi đầu tiên?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18521,
            content: "A. Cấp ngoài cùng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18522,
            content: "B. Cấp ở giữa.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18523,
            content: "C. Cấp trong cùng nhất.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18524,
            content: "D. Thực thi theo thứ tự SELECT.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4747,
        content: 'Lỗi "Subquery returns more than 1 row" thường xảy ra khi:',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18525,
            content: "A. Sử dụng toán tử IN với Subquery trả về 10 dòng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18526,
            content:
              "B. Sử dụng toán tử so sánh đơn (=, <, >) với Subquery trả về nhiều hơn một giá trị.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18527,
            content: "C. Subquery trả về giá trị NULL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18528,
            content: "D. Subquery không có mệnh đề WHERE.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4748,
        content:
          "Để lấy ra các phòng ban (Departments) không có nhân viên nào, cách nào hiệu quả nhất?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18529,
            content: "A. Dùng INNER JOIN.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18530,
            content: "B. Dùng LEFT JOIN và lọc WHERE Employee_ID IS NULL.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18531,
            content: "C. Dùng GROUP BY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18532,
            content: "D. Dùng ORDER BY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4749,
        content: "Primary key và Unique khác nhau như nào ?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18533,
            content: "A. Primary key không thể null còn Unique thì có thể null",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18534,
            content: "B. Primary key có thể null còn Unique thì không thể null",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18535,
            content:
              "C. Primary key chỉ dành cho cột với kiểu dữ liệu số nguyên còn Unique chỉ dành cho cột có kiểu dữ liệu chuỗi",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18536,
            content: "D. Không có gì khác nhau.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4750,
        content:
          "Ưu điểm của việc đặt bí danh (Alias) cho bảng tạm (Table Subquery) trong mệnh đề FROM là gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18537,
            content:
              "A. Bắt buộc phải có để MySQL có thể định danh và truy xuất các cột từ bảng tạm đó.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18538,
            content: "B. Giúp tăng tốc độ truy vấn gấp 2 lần.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18539,
            content: "C. Tự động tạo một bảng thực trong CSDL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18540,
            content: "D. Để bảo mật tên bảng thật.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4751,
        content:
          "Mối quan hệ n-n (Nhiều-Nhiều) trong ERD được triển khai trong CSDL thực tế như thế nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18541,
            content: "A. Tạo Khóa ngoại trực tiếp giữa 2 bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18542,
            content:
              "B. Tạo thêm một bảng trung gian chứa Khóa chính của cả 2 bảng đó.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18543,
            content: "C. Dùng quan hệ phân cấp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18544,
            content: "D. Gộp 2 bảng thành một bảng lớn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4752,
        content:
          "Câu lệnh SELECT * FROM A UNION SELECT * FROM B dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18545,
            content: "A. Nối các cột của bảng A và B.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18546,
            content:
              "B. Gộp kết quả của hai câu truy vấn (nối hàng), loại bỏ các hàng trùng lặp.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18547,
            content: "C. Nhân dữ liệu bảng A với bảng B.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18548,
            content: "D. Tìm phần giao giữa A và B.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4753,
        content: "Mệnh đề HAVING có thể sử dụng mà không cần GROUP BY không?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18549,
            content:
              "A. Có, nhưng nó sẽ hoạt động giống như mệnh đề WHERE trên toàn bộ tập kết quả.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18550,
            content: "B. Không bao giờ được.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18551,
            content: "C. Chỉ dùng được với lệnh UPDATE.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18552,
            content: "D. Chỉ dùng được với Subquery.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4754,
        content:
          "SELECT sales.sale_date, SUM(sales.revenue) \r\nFROM sales \r\nWHERE sales.sale_date BETWEEN '2023-01-01' AND '2023-12-31' \r\nGROUP BY sales.sale_date;\r\nCâu lệnh trên dùng để làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18553,
            content: "A. Lấy tổng doanh thu theo từng ngày trong năm 2023",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18554,
            content: "B. Đếm số lần bán hàng trong năm 2023",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18555,
            content: "C. Lấy danh sách ngày bán hàng đã xảy ra",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18556,
            content: "D. Thêm doanh thu mới vào bảng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4755,
        content: "Trong ERD, thực thể yếu (Weak Entity) là gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18557,
            content: "A. Thực thể không có thuộc tính.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18558,
            content:
              "B. Thực thể mà sự tồn tại của nó phụ thuộc vào một thực thể khác.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18559,
            content: "C. Thực thể có quá ít dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18560,
            content: "D. Thực thể chỉ chứa Khóa ngoại.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4756,
        content:
          "Tại sao dùng Subquery lồng quá nhiều cấp (ví dụ trên 5 cấp) là không tốt?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18561,
            content: "A. MySQL không hỗ trợ.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18562,
            content:
              "B. Làm câu lệnh cực kỳ khó đọc, khó bảo trì và có thể ảnh hưởng đến hiệu năng.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18563,
            content: "C. Làm dữ liệu bị sai lệch.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18564,
            content: "D. Làm hỏng cấu trúc bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4757,
        content: "Toán tử EXISTS trả về giá trị gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18565,
            content: "A. Một bảng dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18566,
            content: "B. Một số nguyên.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18567,
            content:
              "C. Giá trị Boolean (TRUE/FALSE) tùy thuộc vào việc Subquery có hàng nào trả về hay không.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18568,
            content: "D. Một chuỗi ký tự.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4758,
        content:
          "Trong thực tế phân trang, nếu ta dùng LIMIT 10 OFFSET 1000000 (deep pagination), hiệu năng sẽ như thế nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18569,
            content: "A. Rất nhanh vì chỉ lấy 10 dòng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18570,
            content:
              "B. Rất chậm vì MySQL phải quét qua và bỏ qua 1 triệu dòng đầu tiên.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18571,
            content: "C. Không ảnh hưởng gì.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18572,
            content: "D. MySQL sẽ báo lỗi.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4759,
        content:
          "Để tìm giá trị lớn thứ 2 trong một cột lương, cách nào dùng Subquery là đúng?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18573,
            content:
              "A. SELECT MAX(Salary) FROM Emp WHERE Salary < (SELECT MAX(Salary) FROM Emp).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18574,
            content: "B. SELECT MIN(Salary) FROM Emp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18575,
            content: "C. SELECT Salary FROM Emp ORDER BY Salary DESC LIMIT 2.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18576,
            content: "D. SELECT MAX(Salary) FROM Emp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4760,
        content:
          "Kịch bản: Bạn muốn xóa các khách hàng chưa từng đặt hàng. Bảng Orders chứa Customer_ID. Câu lệnh đúng là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18577,
            content:
              "A. DELETE FROM Customers WHERE Customer_ID NOT IN (SELECT Customer_ID FROM Orders).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18578,
            content:
              "B. DELETE FROM Customers WHERE Customer_ID IN (SELECT Customer_ID FROM Orders).",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18579,
            content: "C. DELETE FROM Orders WHERE Customer_ID IS NULL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18580,
            content: "D. DROP TABLE Customers.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4761,
        content: "Quy tắc chuẩn hóa 1NF yêu cầu điều gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 3,
        optionTests: [
          {
            id: 18581,
            content:
              "A. Các cột phải có giá trị nguyên tố (nguyên tử), không chứa danh sách hoặc nhóm giá trị trong một ô.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18582,
            content: "B. Phải có khóa ngoại.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18583,
            content: "C. Phải xóa hết các cột trùng tên.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18584,
            content: "D. Phải chia bảng thành 3 phần.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4762,
        content:
          "ALTER TABLE employees ADD CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id);\r\nLệnh này có tác dụng gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18585,
            content: "A. Thêm cột department_id vào bảng employees",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18586,
            content: "B. Xóa cột department_id khỏi bảng employees",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18587,
            content:
              "C. Thêm ràng buộc khóa ngoại từ bảng employees đến bảng departments",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18588,
            content:
              "D. Thay đổi định nghĩa cột department_id trong bảng employees",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4763,
        content:
          "SELECT name FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);\r\nLệnh SQL trên có tác dụng gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18589,
            content: "A. Tìm nhân viên có lương cao nhất",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18590,
            content: "B. Tìm tất cả nhân viên có lương bằng 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18591,
            content: "C. Cập nhật lương cho tất cả nhân viên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18592,
            content: "D. Xóa nhân viên có lương cao nhất",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4764,
        content:
          "SELECT department_id, COUNT(*) AS total_employees \r\nFROM employees GROUP BY department_id HAVING COUNT(*) > 10;\r\nÝ nghĩa của câu lệnh trên là gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18593,
            content: "A. Tìm tất cả department_id và số lượng nhân viên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18594,
            content: "B. Lấy danh sách các phòng ban có hơn 10 nhân viên",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18595,
            content: "C. Đếm tổng tất cả phòng ban",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18596,
            content: "D. Xóa các phòng ban có hơn 10 nhân viên",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4765,
        content:
          "CREATE TABLE inventory (\r\n    product_id INT PRIMARY KEY,\r\n    quantity INT CHECK (quantity >= 0)\r\n);\r\nRàng buộc CHECK trong bảng inventory thực hiện công việc gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18597,
            content: "A. Đảm bảo rằng số lượng sản phẩm không âm",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18598,
            content: "B. Đảm bảo mỗi bản ghi là duy nhất",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18599,
            content: "C. Giới hạn giá trị của young sản phẩm tới 100",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18600,
            content: "D. Đảm bảo tất cả sản phẩm đều có số lượng",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4766,
        content:
          "SELECT * FROM employees WHERE department_id = 10 OR EXISTS \r\n(SELECT * FROM projects WHERE projects.leader_id = employees.id);\r\n Kết quả của câu lệnh SQL này sẽ ra sao?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18601,
            content:
              "A. Tìm nhân viên thuộc department 10 hoặc là lãnh đạo một dự án",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18602,
            content: "B. Tìm tất cả nhân viên không thuộc department 10",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18603,
            content: "C. Tìm nhân viên không có dự án nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18604,
            content: "D. Xóa tất cả nhân viên thuộc department 10",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4767,
        content:
          "Trong MySQL, nếu một câu truy vấn có cả GROUP BY và ORDER BY trên các cột khác nhau, chỉ mục (Index) sẽ hoạt động như thế nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18605,
            content: "A. Index sẽ hỗ trợ cả hai.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18606,
            content:
              'B. Index chỉ hỗ trợ GROUP BY, sau đó MySQL phải thực hiện "Filesort" cho ORDER BY.',
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18607,
            content: "C. Index bị vô hiệu hóa hoàn toàn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18608,
            content: "D. Truy vấn sẽ bị lỗi.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4768,
        content:
          "Ý nghĩa của toán tử ANY trong câu lệnh: WHERE Price > ANY (SELECT Price FROM Products WHERE Category = 1)?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18609,
            content: "A. Lớn hơn giá trị lớn nhất của danh sách.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18610,
            content:
              "B. Lớn hơn ít nhất một giá trị (giá trị nhỏ nhất) trong danh sách trả về.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18611,
            content: "C. Lớn hơn tất cả các giá trị.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18612,
            content: "D. Bằng với bất kỳ giá trị nào.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4769,
        content:
          "Khi thiết kế CSDL cho hệ thống thương mại điện tử, tại sao giá sản phẩm (Price) tại thời điểm đặt hàng nên được lưu trực tiếp vào bảng Order_Details thay vì chỉ tham chiếu đến bảng Products?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18613,
            content: "A. Để tiết kiệm lệnh JOIN.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18614,
            content:
              "B. Để bảo toàn dữ liệu lịch sử; nếu sau này sản phẩm đổi giá, hóa đơn cũ vẫn giữ đúng giá tại thời điểm mua.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18615,
            content: "C. Vì bảng Products không cho phép tham chiếu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18616,
            content: "D. Để tăng tốc độ tìm kiếm.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4770,
        content: "Một bảng ở dạng chuẩn 3NF khi nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18617,
            content:
              "A. Nó đạt chuẩn 2NF và không có phụ thuộc bắc cầu (Transitive Dependency) giữa các thuộc tính không khóa.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18618,
            content: "B. Nó có ít nhất 10 cột.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18619,
            content: "C. Nó không có khóa ngoại.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18620,
            content: "D. Nó gộp tất cả thông tin vào một bảng duy nhất.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4771,
        content:
          "Trong một câu truy vấn lồng cấp độ cao, việc sử dụng EXISTS thay vì IN có lợi gì về hiệu năng?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18621,
            content:
              "A. EXISTS sẽ dừng quét ngay khi tìm thấy hàng đầu tiên thỏa mãn (short-circuit), giúp tiết kiệm tài nguyên.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18622,
            content: "B. EXISTS trả về nhiều dữ liệu hơn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18623,
            content: "C. IN không dùng được với NULL.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18624,
            content: "D. Không có sự khác biệt.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4772,
        content:
          "Để đảm bảo một giao dịch (Transaction) trong SQL diễn ra an toàn (ví dụ chuyển tiền giữa 2 tài khoản), ta cần tuân thủ tính chất nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18625,
            content: "A. Chuẩn 3NF.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18626,
            content:
              "B. Tính chất ACID (Atomicity, Consistency, Isolation, Durability).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18627,
            content: "C. Quy tắc Crow's Foot.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18628,
            content: "D. Mô hình phân cấp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4773,
        content:
          'Kỹ thuật "Self-Join" được ứng dụng tốt nhất trong trường hợp nào?',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18629,
            content:
              "A. Khi một bảng có quan hệ đệ quy với chính nó (ví dụ: bảng Nhân viên có cột Manager_ID trỏ đến Employee_ID của cùng bảng đó).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18630,
            content: "B. Khi muốn nối 2 bảng khác nhau.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18631,
            content: "C. Khi muốn xóa bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18632,
            content: "D. Khi bảng không có dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4774,
        content:
          "Nếu thực hiện lệnh DELETE trên bảng Cha (Parent) mà có bản ghi con ở bảng Con (Child) đang tham chiếu đến, và Khóa ngoại được thiết lập ON DELETE SET NULL, kết quả là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18633,
            content: "A. Báo lỗi và không cho xóa.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18634,
            content: "B. Bản ghi cha bị xóa, bản ghi con bị xóa theo.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18635,
            content:
              "C. Bản ghi cha bị xóa, giá trị khóa ngoại ở bản ghi con chuyển thành NULL.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18636,
            content: "D. Không có gì thay đổi.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4775,
        content:
          "Cách tối ưu để tìm các bản ghi trùng lặp (Duplicate) trong một bảng dựa trên 2 cột Name và Email:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18637,
            content: "A. GROUP BY Name, Email HAVING COUNT(*) > 1.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18638,
            content: "B. ORDER BY Name, Email.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18639,
            content: "C. SELECT DISTINCT Name, Email.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18640,
            content: "D. Dùng Subquery lồng 5 cấp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4776,
        content:
          'Tại sao việc sử dụng SELECT * lại được coi là "Bad Practice" (thói quen xấu) trong lập trình ứng dụng?',
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18641,
            content:
              "A. Gây tốn băng thông và tài nguyên hệ thống vì lấy dư thừa dữ liệu không cần thiết.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18642,
            content: "B. Làm giảm tính bảo mật (lộ các cột nhạy cảm).",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18643,
            content:
              "C. Có thể gây lỗi ứng dụng nếu cấu trúc bảng thay đổi (thêm/xóa cột).",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18644,
            content: "D. Tất cả các ý trên đều đúng.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4777,
        content:
          "Một câu truy vấn sử dụng nhiều hàm tổ hợp và GROUP BY chạy rất chậm. Giải pháp nào sau đây là KHÔNG phù hợp?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18645,
            content:
              "A. Kiểm tra xem các cột trong WHERE và GROUP BY đã được đánh Index chưa.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18646,
            content:
              "B. Sử dụng thêm mệnh đề ORDER BY để sắp xếp lại dữ liệu nhiều lần hơn.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18647,
            content:
              "C. Xem xét việc sử dụng bảng tổng hợp (Summary Table) được tính toán sẵn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18648,
            content: "D. Tối ưu lại logic JOIN để giảm số lượng hàng cần quét.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4778,
        content: "Điều gì xảy ra khi bạn so sánh val = NULL và val IS NULL?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18649,
            content: "A. Giống nhau hoàn toàn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18650,
            content:
              "B. val = NULL luôn trả về Unknown/False, trong khi val IS NULL mới kiểm tra đúng giá trị trống.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18651,
            content: "C. val = NULL xóa dữ liệu.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18652,
            content: "D. Cả hai đều báo lỗi cú pháp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4779,
        content:
          "Làm thế nào để chọn ngẫu nhiên 1 bản ghi từ bảng lớn (1 triệu dòng) một cách tối ưu?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18653,
            content: "A. ORDER BY RAND() LIMIT 1.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18654,
            content:
              "B. Tính toán một ID ngẫu nhiên trong code rồi dùng WHERE ID = ngẫu nhiên (nếu ID liên tục).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18655,
            content: "C. Dùng Subquery lồng 3 cấp.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18656,
            content: "D. Quét toàn bộ bảng.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4780,
        content:
          "SELECT e.name, p.project_name \r\nFROM employees e \r\nLEFT JOIN projects p ON e.id = p.employee_id;\r\nCâu lệnh trên sẽ làm gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18657,
            content: "A. Lấy tất cả nhân viên mà không có dự án nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18658,
            content:
              "B. Lấy tất cả nhân viên và dự án mà họ tham gia, bao gồm cả những nhân viên không có dự án",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18659,
            content: "C. Lấy chỉ các nhân viên yêu cầu dự án",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18660,
            content: "D. Xóa nhân viên không có dự án",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4781,
        content:
          "SELECT * FROM employees WHERE department_id IS NOT NULL;\r\nCâu lệnh SQL này trả về điều gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18661,
            content: "A. Nhân viên không thuộc về bất kỳ phòng ban nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18662,
            content: "B. Tất cả nhân viên thuộc phòng ban hợp lệ",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18663,
            content: "C. Xóa nhân viên không có phòng ban",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18664,
            content: "D. Tất cả nhân viên có id bằng NULL",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4782,
        content:
          "INSERT INTO sales (id, sale_date, revenue) VALUES (1, '2023-05-01', -100) ;  Với ràng buộc revenue > 0 thì câu lệnh SQL này sẽ dẫn đến điều gì? \r\n",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18665,
            content: "A. Sẽ thêm bản ghi vào bảng sales",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18666,
            content: "B. Sẽ gây ra lỗi vì giá trị doanh thu không hợp lệ",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18667,
            content: "C. Doanh thu sẽ tự động chuyển thành 0",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18668,
            content: "D. Sẽ không có ảnh hưởng gì",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4783,
        content:
          "SELECT department_id, SUM(revenue) \r\nFROM sales \r\nGROUP BY department_id \r\nHAVING SUM(revenue) > 5000;\r\nCâu lệnh này sẽ trả về thông tin gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18669,
            content:
              "A. Tổng doanh thu của các phòng ban có doanh thu dưới 5000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18670,
            content:
              "B. Tổng doanh thu của từng phòng ban với doanh thu trên 5000",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18671,
            content: "C. Phòng ban không có doanh thu nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18672,
            content: "D. Danh sách phòng ban và doanh thu",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4784,
        content:
          "UPDATE employees \r\nSET salary = salary * 0.9 \r\nWHERE department_id IN \r\n(SELECT id FROM departments WHERE budget < 5000);\r\nLệnh SQL này có tác dụng gì?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18673,
            content:
              "A. Cắt giảm lương cho tất cả nhân viên trong phòng ban có ngân sách dưới 5000",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18674,
            content: "B. Tăng lương cho những nhân viên có ngân sách dưới 5000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18675,
            content:
              "C. Cập nhật ngân sách cho phòng ban có ngân sách dưới 5000",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18676,
            content: "D. Không có thay đổi nào",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4785,
        content:
          "Để đảm bảo dữ liệu Email không được để trống và không được trùng lặp, ta cần kết hợp những ràng buộc nào?",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18677,
            content: "A. PRIMARY KEY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18678,
            content: "B. NOT NULL và UNIQUE.",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18679,
            content: "C. DEFAULT và CHECK.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18680,
            content: "D. FOREIGN KEY.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
      {
        id: 4786,
        content:
          "Khi thực hiện Subquery trong mệnh đề SELECT, mỗi hàng ở truy vấn ngoài sẽ thực thi Subquery đó một lần. Đây gọi là:",
        type: "MỘT LỰA CHỌN",
        status: true,
        point: 4,
        difficulty: 4,
        optionTests: [
          {
            id: 18681,
            content: "A. Tối ưu hóa truy vấn.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18682,
            content: "B. N+1 Query Problem (phiên bản SQL).",
            isCorrect: true,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18683,
            content: "C. Batch processing.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
          {
            id: 18684,
            content: "D. Stream data.",
            isCorrect: false,
            created_at: "2026-01-07T04:17:36.000Z",
          },
        ],
      },
    ],
  },
};
