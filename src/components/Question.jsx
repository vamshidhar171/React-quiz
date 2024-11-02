import { useState, useEffect } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({ question, onSelectAnswer, onSkipAnswer }) {
  const [answerSelected, setAnswerSelected] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const [timer, setTimer] = useState(10000);

  useEffect(() => {
    if (answerSelected.selectedAnswer && answerSelected.isCorrect === null) {
      setTimer(1000);
    } else if (answerSelected.isCorrect !== null) {
      setTimer(2000);
    } else {
      setTimer(10000); // Default timer value
    }
  }, [answerSelected]);

  function handleAnswerSelect(answer) {
    // Validate that question and answers exist
    if (!question || !question.answers || !Array.isArray(question.answers)) {
      console.error("Invalid question or answers data.");
      return;
    }

    setAnswerSelected({
      selectedAnswer: answer,
      isCorrect: null,
    });

    //  Delay for showing correct/wrong feedback
    setTimeout(() => {
      setAnswerSelected((prevState) => ({
        ...prevState,
        isCorrect: question.answers[0] === answer, // Ensure this index is valid
      }));
    }, 1000);

    // Delay before notifying parent component
    setTimeout(() => {
      onSelectAnswer(answer);
    }, 2000);
  }

  let answeredState = "";
  if (answerSelected.selectedAnswer && answerSelected.isCorrect !== null) {
    answeredState = answerSelected.isCorrect ? "correct" : "wrong";
  } else if (answerSelected.selectedAnswer) {
    answeredState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answerSelected.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answeredState}
      />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        selectedAnswer={answerSelected.selectedAnswer}
        answeredState={answeredState}
        onSelect={handleAnswerSelect}
      />
    </div>
  );
}
