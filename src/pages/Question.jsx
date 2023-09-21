import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Question.css";
import Options from "../components/Options";
import ProgressBar from "../components/ProgressBar";

const Question = (props) => {
    const { question, onSubmit, isMultiple, isLast } = props;

    const { title, image, choices } = question;
    const [answers, setAnswers] = useState([]);

    return (
        <div className="quiz">
            {/* <ProgressBar
                current={props.currIndex + 1}
                total={props.totalCount}
            /> */}
            <div className="question">
                {question.id}. {title}
            </div>
            <img src={image} alt="" className="q-img" />
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
                style={
                    answers.length === 0
                        ? { cursor: "not-allowed", opacity: "0.7" }
                        : { cursor: "pointer" }
                }
                disabled={answers.length === 0}
            >
                {isLast ? "Finish" : "Next"}
                <i
                    className="fa-solid fa-arrow-right"
                    style={{ position: "absolute", right: "5%" }}
                ></i>
            </button>
        </div>
    );
};

export default Question;
