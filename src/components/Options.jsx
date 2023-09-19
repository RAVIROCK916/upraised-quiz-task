import React from "react";
import { useState } from "react";

const Options = ({ choices, isMultiple, setAnswers, answers }) => {
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
        <form>
            {choices.map((item, idx) => {
                return (
                    <label htmlFor={`choice-${idx}`} key={`choices-${idx}`}>
                        <div
                            className="choice"
                            style={{
                                // TODO: Add styling
                                outline: answers.includes(idx.toString())
                                    ? "5px solid green"
                                    : "1px solid grey",
                            }}
                        >
                            <input
                                // TODO: Add styling for checkbox and radio to look the same
                                type={isMultiple ? "checkbox" : "radio"}
                                name={idx}
                                id={`choice-${idx}`}
                                onChange={handleOptionsChange}
                                checked={answers.includes(idx.toString())}
                            />
                            <span className="choice-title">{item}</span>
                        </div>
                    </label>
                );
            })}
        </form>
    );
};

export default Options;
