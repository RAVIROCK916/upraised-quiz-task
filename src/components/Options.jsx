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
                let isChecked = answers.includes(idx.toString());
                console.log(isChecked);
                return (
                    <label htmlFor={`choice-${idx}`} key={`choices-${idx}`}>
                        <div
                            className="choice"
                            style={{
                                outline: isChecked
                                    ? "1px solid green"
                                    : "1px solid grey",
                            }}
                        >
                            <input
                                // TODO: Add styling for checkbox and radio to look the same
                                type={isMultiple ? "checkbox" : "radio"}
                                name={idx}
                                id={`choice-${idx}`}
                                onChange={handleOptionsChange}
                                checked={isChecked}
                            />
                            <i
                                className="fa fa-check"
                                style={{
                                    display: isChecked ? "initial" : "none",
                                }}
                            ></i>
                            <span className="choice-title">{item}</span>
                        </div>
                    </label>
                );
            })}
        </form>
    );
};

export default Options;
