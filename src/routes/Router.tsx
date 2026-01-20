import { createBrowserRouter } from "react-router-dom";
import AnswerKey from "../AnswerKey";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "result",
    element: <AnswerKey></AnswerKey>,
  },
]);

export default router;
