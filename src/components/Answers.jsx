import { useRef } from "react";
export default function Answers({
  answers,
  answeredState,
  selectedAnswer,
  onSelect,
}) {
  const shuffelAnswer = useRef();

  if (!shuffelAnswer.current) {
    shuffelAnswer.current = [...answers];
    shuffelAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffelAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answeredState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answeredState === "correct" || answeredState === "wrong") &&
          isSelected
        ) {
          cssClass = answeredState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answeredState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
