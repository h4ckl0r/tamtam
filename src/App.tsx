// src/App.tsx
import { useState } from "react";
import { db } from "./data";

// Hàm helper để định dạng kiểu CSS tùy theo trạng thái
const getOptionClass = (
  isSelected: boolean,
  isCorrect: boolean,
  isSubmitted: boolean
) => {
  const baseClass =
    "p-3 border rounded-lg cursor-pointer transition-all flex items-center gap-2";

  if (!isSubmitted) {
    // Chưa nộp bài: Highlight màu xanh dương nếu đang chọn
    return isSelected
      ? `${baseClass} bg-blue-50 border-blue-500 text-blue-700`
      : `${baseClass} bg-white border-gray-200 hover:bg-gray-50`;
  }

  // Đã nộp bài:
  if (isCorrect) {
    // Đây là đáp án đúng -> Luôn hiện màu xanh lá
    return `${baseClass} bg-green-100 border-green-500 text-green-800 font-medium`;
  }

  if (isSelected && !isCorrect) {
    // Người dùng chọn sai -> Hiện màu đỏ
    return `${baseClass} bg-red-100 border-red-500 text-red-800`;
  }

  // Các đáp án khác (không chọn, không phải đúng) -> Mờ đi
  return `${baseClass} bg-gray-50 border-gray-200 opacity-60`;
};

function App() {
  const quizData = db.data;
  const questions = quizData.questionTests;

  // State lưu trữ câu trả lời: Key là QuestionID, Value là OptionID
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Xử lý khi người dùng click chọn đáp án
  const handleOptionSelect = (questionId: number, optionId: number) => {
    if (isSubmitted) return; // Không cho chọn lại khi đã nộp
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Xử lý nộp bài
  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      const selectedOptionId = userAnswers[q.id];
      // Tìm đáp án đúng trong data gốc
      const correctOption = q.optionTests.find((opt) => opt.isCorrect);

      if (correctOption && selectedOptionId === correctOption.id) {
        currentScore += q.point;
      }
    });

    setScore(currentScore);
    setIsSubmitted(true);
    // Cuộn lên đầu trang để xem kết quả
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Xử lý làm lại
  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Tính tổng điểm tối đa
  const maxScore = questions.reduce((total, q) => total + q.point, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-white">
          <h1 className="text-2xl font-bold">{quizData.testName}</h1>
          <div className="mt-2 flex justify-between items-center text-sm opacity-90">
            <span>Thời gian: {quizData.time} phút</span>
            <span>Số câu hỏi: {questions.length}</span>
          </div>
        </div>

        {/* Kết quả (Chỉ hiện khi đã nộp) */}
        {isSubmitted && (
          <div className="bg-yellow-50 p-6 border-b border-yellow-100 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Kết quả bài làm
            </h2>
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">
              {score} / {maxScore} điểm
            </div>
            <p className="text-gray-600">
              Bạn đã trả lời đúng {score / 4} trên {questions.length} câu.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md"
            >
              Làm lại bài thi
            </button>
          </div>
        )}

        {/* Danh sách câu hỏi */}
        <div className="p-6 space-y-8">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className="border-b border-gray-100 pb-6 last:border-0"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {q.content}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    ({q.point} điểm)
                  </span>
                </div>
              </div>

              <div className="grid gap-3 pl-11">
                {q.optionTests.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => handleOptionSelect(q.id, opt.id)}
                    className={getOptionClass(
                      userAnswers[q.id] === opt.id,
                      opt.isCorrect,
                      isSubmitted
                    )}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 
                      ${
                        userAnswers[q.id] === opt.id
                          ? "border-indigo-600"
                          : "border-gray-400"
                      }`}
                    >
                      {userAnswers[q.id] === opt.id && (
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                      )}
                    </div>
                    <span>{opt.content}</span>
                  </div>
                ))}
              </div>

              {/* Giải thích kết quả cho từng câu (Hiện khi đã nộp) */}
              {isSubmitted && (
                <div className="pl-11 mt-3 text-sm">
                  {userAnswers[q.id] === undefined ? (
                    <span className="text-orange-500 font-medium">
                      Bạn chưa trả lời câu này.
                    </span>
                  ) : userAnswers[q.id] !==
                    q.optionTests.find((o) => o.isCorrect)?.id ? (
                    <span className="text-red-600 font-medium">
                      Sai rồi! Đáp án đúng là màu xanh.
                    </span>
                  ) : (
                    <span className="text-green-600 font-medium">
                      Chính xác!
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        {!isSubmitted && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end sticky bottom-0 z-10">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-lg transform active:scale-95 transition-all"
            >
              Nộp Bài
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
