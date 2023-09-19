import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Question.css";
import Options from "../components/Options";

const Question = ({ question, onSubmit, isMultiple, isLast }) => {
    const { title, choices } = question;
    const [answers, setAnswers] = useState([]);

    return (
        <div className="quiz">
            <div className="question">{title}</div>
            {/* <img src={img} alt="" /> */}
            <div className="choices">
                <Options
                    choices={choices}
                    isMultiple={isMultiple}
                    setAnswers={setAnswers}
                    answers={answers}
                />
            </div>
            <button
                className="next-btn"
                onClick={() => {
                    onSubmit(answers);
                    setAnswers([]);
                }}
                disabled={answers.length === 0} //TODO: Add styles when button is disabled
            >
                {isLast ? "Finish" : "Next"}
            </button>
        </div>
    );
};

export default Question;
