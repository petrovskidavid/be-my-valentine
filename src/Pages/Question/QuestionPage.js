import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Question.css";
import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const [isIntroOneDone, setIsIntroOneDone] = useState(false);
  const [isIntroTwoDone, setIsIntroTwoDone] = useState(false);
  const [isQuestionDone, setIsQuestionDone] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const [buttonOrder, setButtonOrder] = useState(["Yes", "No"]);
  const [currentQuestion, setCurrentQuestion] = useState(
    "Hey there Jordyn. My love. This is David!"
  );
  const navigate = useNavigate();

  function onClick(answer) {
    if (answer === "No") {
      setButtonOrder([buttonOrder[1], buttonOrder[0]]);
    }

    if (answer === "Hey handsome") {
      setCurrentQuestion(
        "Since Valentine's Day is coming up soon, I wanted to ask you something."
      );
      delayIntroTwoButton();
    }

    if (answer === "Okay??") {
      setCurrentQuestion("Beautiful, will you be my Valentine? ❤️");
      delayQuestionButtons();
    }

    if (
      answer === "Yes" &&
      currentQuestion === "Beautiful, will you be my Valentine? ❤️"
    ) {
      setCurrentQuestion("Wait, really?");
    }

    if (answer === "Yes" && currentQuestion === "Wait, really?") {
      setCurrentQuestion("Hold on... Are you sure?");
    }

    if (answer === "Yes" && currentQuestion === "Hold on... Are you sure?") {
      setCurrentQuestion("No way beautiful! Are you serious right now?");
    }

    if (
      answer === "Yes" &&
      currentQuestion === "No way beautiful! Are you serious right now?"
    ) {
      navigate("/i-love-you");
    }

    setAnswerList((prevList) => [...prevList, answer]);
  }

  function delayIntroOneButton() {
    setTimeout(() => {
      setIsIntroOneDone(true);
    }, 6500);
  }

  function delayIntroTwoButton() {
    setTimeout(() => {
      setIsIntroTwoDone(true);
    }, 10000);
  }

  function delayQuestionButtons() {
    setTimeout(() => {
      setIsQuestionDone(true);
    }, 6000);
  }

  delayIntroOneButton();

  return (
    <div>
      <div>
        <div className="typewriter-container">
          {answerList.length === 0 && (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 125,
                pauseFor: 1800000,
                strings: [currentQuestion],
                cursor: "",
              }}
            />
          )}
          {answerList.length === 1 && (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 125,
                pauseFor: 1800000,
                strings: [currentQuestion],
                cursor: "",
              }}
            />
          )}
          {answerList.length === 2 && (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 125,
                pauseFor: 1800000,
                strings: [currentQuestion],
                cursor: "",
              }}
            />
          )}
          {answerList.length > 2 && currentQuestion}
        </div>
        {answerList.length === 0 && isIntroOneDone && (
          <div className="buttons-container">
            <button
              className="button"
              onClick={() => onClick("Hey handsome")}
              style={{ width: 200 }}
            >
              Hey handsome
            </button>
          </div>
        )}
        {answerList.length === 1 && isIntroTwoDone && (
          <div className="buttons-container">
            <button
              className="button"
              onClick={() => onClick("Okay??")}
              style={{ width: 200 }}
            >
              Okay??
            </button>
          </div>
        )}
        {answerList.length > 1 && isQuestionDone && (
          <div className="buttons-container">
            <button className="button" onClick={() => onClick(buttonOrder[0])}>
              {buttonOrder[0]}
            </button>
            <button className="button" onClick={() => onClick(buttonOrder[1])}>
              {buttonOrder[1]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
