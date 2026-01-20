// src/App.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // [1] Import useNavigate
import { db } from "./data";

// ... (Giữ nguyên hàm helper getOptionClass) ...
const getOptionClass = (
  isSelected: boolean,
  isCorrect: boolean,
  isSubmitted: boolean,
) => {
  const baseClass =
    "p-3 border rounded-lg cursor-pointer transition-all flex items-center gap-2";

  if (!isSubmitted) {
    return isSelected
      ? `${baseClass} bg-blue-50 border-blue-500 text-blue-700`
      : `${baseClass} bg-white border-gray-200 hover:bg-gray-50`;
  }

  if (isCorrect) {
    return `${baseClass} bg-green-100 border-green-500 text-green-800 font-medium`;
  }

  if (isSelected && !isCorrect) {
    return `${baseClass} bg-red-100 border-red-500 text-red-800`;
  }

  return `${baseClass} bg-gray-50 border-gray-200 opacity-60`;
};

function App() {
  const navigate = useNavigate(); // [2] Khởi tạo hook điều hướng
  const quizData = db.data;
  const questions = quizData.questionTests;

  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // ... (Giữ nguyên các hàm handleOptionSelect, handleSubmit, handleReset, maxScore) ...
  const handleOptionSelect = (questionId: number, optionId: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      const selectedOptionId = userAnswers[q.id];
      const correctOption = q.optionTests.find((opt) => opt.isCorrect);
      if (correctOption && selectedOptionId === correctOption.id) {
        currentScore += q.point;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const maxScore = questions.reduce((total, q) => total + q.point, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-white">
          {/* [3] Sửa Header thành Flexbox để đưa nút sang phải */}
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold pr-4">{quizData.testName}</h1>

            {/* NÚT CHUYỂN TRANG ANSWER KEY */}
            <button
              onClick={() => navigate("/result")}
              className="flex-shrink-0 bg-white/20 hover:bg-white/30 text-white border border-white/40 px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            >
              Xem Đáp Án Gốc
              {/* Nếu không cài antd icons thì xóa dòng dưới */}
              <span className="text-xs">→</span>
            </button>
          </div>

          <div className="flex justify-between items-center text-sm opacity-90">
            <span>Thời gian: {quizData.time} phút</span>
            <span>Số câu hỏi: {questions.length}</span>
          </div>
        </div>

        {/* ... (Giữ nguyên phần Kết quả) ... */}
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

        {/* ... (Giữ nguyên phần Danh sách câu hỏi và Footer) ... */}
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
                      isSubmitted,
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
