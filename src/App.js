import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Question from "./Pages/Question/QuestionPage";
import Celebration from "./Pages/Celebration/Celebration";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Question />} />
          <Route exact path="/i-love-you" element={<Celebration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
