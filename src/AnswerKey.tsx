import React, { useMemo } from "react";
import { Collapse, Tag, Typography, Space, Card } from "antd"; // Import dữ liệu từ file trên
import { db } from "./data";

const { Panel } = Collapse;
const { Text, Title } = Typography;

// Hàm helper để lấy màu và chữ cho độ khó (Giả sử: 1=Dễ, 2=Trung bình, 3=Khó)
const getDifficultyTag = (level: number) => {
  switch (level) {
    case 1:
      return <Tag color="green">Dễ</Tag>;
    case 2:
      return <Tag color="orange">Trung bình</Tag>;
    case 3:
      return <Tag color="red">Khó</Tag>;
    default:
      return <Tag>Khác</Tag>;
  }
};

const AnswerKey: React.FC = () => {
  const { questionTests } = db.data;

  // Tính toán thống kê
  const stats = useMemo(() => {
    return {
      easy: questionTests.filter((q) => q.difficulty === 1).length,
      medium: questionTests.filter((q) => q.difficulty === 2).length,
      hard: questionTests.filter((q) => q.difficulty === 3).length,
      total: questionTests.length,
    };
  }, [questionTests]);

  return (
    <Card
      title={
        <Title level={4} style={{ margin: 0 }}>
          Bộ câu hỏi
        </Title>
      }
      bordered={false}
      bodyStyle={{ padding: "0 24px 24px 24px" }}
    >
      {/* PHẦN THỐNG KÊ (HEADER) */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "12px 16px",
          marginBottom: "16px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Space size="large">
          <Text strong>Thống kê:</Text>
          <Tag color="green">Dễ: {stats.easy}</Tag>
          <Tag color="orange">Trung bình: {stats.medium}</Tag>
          <Tag color="red">Khó: {stats.hard}</Tag>
        </Space>
        <Text strong>Tổng: {stats.total} câu</Text>
      </div>

      {/* DANH SÁCH CÂU HỎI */}
      <Collapse
        defaultActiveKey={questionTests.map((q) => q.id)} // Mặc định mở tất cả
        expandIconPosition="start"
        ghost // Loại bỏ viền thừa của Collapse để giống ảnh
      >
        {questionTests.map((question, index) => (
          <Panel
            key={question.id}
            header={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}. {question.content}
                </Text>

                {/* Các Tags hiển thị bên cạnh câu hỏi */}
                <Tag color="blue">{question.type}</Tag>
                <Tag color="purple">{question.point} điểm</Tag>
                {getDifficultyTag(question.difficulty)}
              </div>
            }
            style={{
              marginBottom: 10,
              border: "1px solid #f0f0f0",
              borderRadius: 8,
              background: "white",
            }}
          >
            {/* DANH SÁCH ĐÁP ÁN */}
            <ul style={{ listStyleType: "none", paddingLeft: 20, margin: 0 }}>
              {question.optionTests.map((option) => (
                <li key={option.id} style={{ marginBottom: 8 }}>
                  <Space>
                    <Text
                      style={{
                        color: option.isCorrect ? "#52c41a" : "inherit",
                        fontWeight: option.isCorrect ? "bold" : "normal",
                        fontSize: 15,
                      }}
                    >
                      {option.content}
                    </Text>
                    {option.isCorrect && (
                      <Tag color="success" style={{ marginLeft: 8 }}>
                        Đúng
                      </Tag>
                    )}
                  </Space>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};

export default AnswerKey;
