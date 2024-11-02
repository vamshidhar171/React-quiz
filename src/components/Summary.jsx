import React from "react";
import quizComplete from "../assets/quiz-Complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnsweredQuestions, topic }) {
  const questions = QUESTIONS[topic] || [];

  const skippedAnswers = userAnsweredQuestions.filter(
    (answer) => answer.answer === null
  );
  const correctAnswers = userAnsweredQuestions.filter((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    return question && answer.answer === question.answers[0];
  });

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnsweredQuestions.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnsweredQuestions.length) * 100
  );
  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {questions.map((question) => {
          const userAnswer = userAnsweredQuestions.find(
            (answer) => answer.questionId === question.id
          );
          let cssClass = "user-answer";
          if (userAnswer === undefined || userAnswer.answer === null) {
            cssClass += " skipped";
          } else if (userAnswer.answer === question.answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={question.id}>
              <h3>{questions.findIndex((q) => q.id === question.id) + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={cssClass}>{userAnswer?.answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
