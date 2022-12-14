import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const SingleQuiz = ({ singleQuiz }) => {
  const { question, options, correctAnswer } = singleQuiz;
  const splitQuestion = question.split("<p>");
  const secondSplit = splitQuestion[1].split("</p>");
  const newQuestion = secondSplit[0];

  const showAnswer = (correctAnswer) => {
    Swal.fire({
      title: "Correct Answer is :",
      text: ` ${correctAnswer}`,
    });
  };
  return (
    <li className="list-decimal border border-blue-200 my-8 p-5 rounded relative text-2xl text-slate-900 font-semibold ">
      {newQuestion}
      <div className="cursor-pointer absolute right-0 top-0">
        <EyeIcon
          onClick={() => showAnswer(correctAnswer)}
          className="h-6 w-6 text-blue-500 mt-2  mr-3 "
        />
      </div>
      <div className="mt-3 ml-3">
        {options.map((option,idx) => (
          <QuizOption
            key={idx}
            quizOptions={option}
            question={question}
            correctAnswer={correctAnswer}
          />
        ))}
      </div>
    </li>
  );
};

export default SingleQuiz;
