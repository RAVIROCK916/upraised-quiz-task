import React from "react";
import "../styles/Question.css";

const Question = ({ question, setQID }) => {
    const { id, title, choices } = question;
    const handleSubmit = () => {
        setQID(id + 1);
    };
    return (
        <div>
            <div className="question">{title}</div>
            {/* <img src={img} alt="" /> */}
            <div className="choices">
                {choices.map((choice, idx) => (
                    <div key={idx} className="choice">
                        {choice}
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={handleSubmit}>
                Next
            </button>
        </div>
    );
};

export default Question;
