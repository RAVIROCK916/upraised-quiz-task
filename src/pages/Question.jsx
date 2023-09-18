import React from "react";

const Question = ({ question, choices, img }) => {
    return (
        <div>
            <div className="question">{question}</div>
            <img src={img} alt="" />
            <div className="choices">
                {choices.map((choice) => (
                    <div>choice</div>
                ))}
            </div>
            <button className="next-btn">Next</button>
        </div>
    );
};

export default Question;
