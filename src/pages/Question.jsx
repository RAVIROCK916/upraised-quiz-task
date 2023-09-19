import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Question.css";
import Options from "../components/Options";

const Question = ({ question, onSubmit, isMultiple, isLast }) => {
    const { title, choices } = question;
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        setAnswers([]);
    }, [question]);
    console.log("asnwers : ", answers);
    const handleOptionsChange = (e) => {
        if (isMultiple) {
            if (e.target.checked) {
                setAnswers((ans) => [...ans, e.target.name]);
            } else {
                setAnswers((ans) => ans.filter((val) => val != e.target.name));
            }
        } else {
            setAnswers([e.target.name]);
        }
    };

    return (
        <div className="quiz">
            <div className="question">{title}</div>
            {/* <img src={img} alt="" /> */}
            <div className="choices">
                <Options
                    choices={choices}
                    isMultiple={isMultiple}
                    onChange={handleOptionsChange}
                    answers={answers}
                />
            </div>
            <button
                className="next-btn"
                onClick={() => {
                    console.log("next-btn clicked ; ", answers);
                    onSubmit([...answers]);
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
