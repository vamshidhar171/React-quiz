import React, { useState, useCallback, useMemo } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function QuizTopics() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = useMemo(() => {
    if (!selectedTopic) return [];
    return QUESTIONS[selectedTopic] || [];
  }, [selectedTopic]);

  const currentQuestion = questions[currentQuestionIndex];
  const quizIsComplete =
    selectedTopic && userAnswers.length === questions.length;

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      if (currentQuestion) {
        setUserAnswers((prevUserAnswers) => [
          ...prevUserAnswers,
          { questionId: currentQuestion.id, answer: selectedAnswer },
        ]);

        setCurrentQuestionIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex < questions.length ? nextIndex : prevIndex;
        });
      }
    },
    [currentQuestion, questions.length]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <>
      {quizIsComplete ? (
        <Summary userAnsweredQuestions={userAnswers} topic={selectedTopic} />
      ) : (
        <>
          {selectedTopic === null ? (
            <>
              <h2 className="TopicHeading">Quiz Topics</h2>
              <div className="QuizTopics">
                <button onClick={() => handleSelectTopic("React")}>
                  React
                </button>
                <button onClick={() => handleSelectTopic("Javascript")}>
                  JavaScript
                </button>
              </div>
            </>
          ) : (
            <div id="quiz">
              {currentQuestion ? (
                <Question
                  key={currentQuestion.id}
                  question={currentQuestion}
                  index={currentQuestionIndex}
                  onSelectAnswer={handleSelectAnswer}
                  onSkipAnswer={handleSkipAnswer}
                />
              ) : (
                <p>No more questions available.</p>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
