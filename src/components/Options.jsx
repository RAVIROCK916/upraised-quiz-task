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
                return (
                    <label htmlFor={`choice-${idx}`} key={`choices-${idx}`}>
                        <div
                            className="choice"
                            style={
                                isChecked
                                    ? {
                                          outline: "2px solid #44B77B",
                                      }
                                    : { outline: "none" }
                            }
                        >
                            <input
                                type={isMultiple ? "checkbox" : "radio"}
                                name={idx}
                                id={`choice-${idx}`}
                                onChange={handleOptionsChange}
                                checked={isChecked}
                            />
                            <span
                                className="checkmark"
                                style={
                                    isChecked
                                        ? {
                                              backgroundColor: "#44B77B",
                                              border: "#44B77B",
                                          }
                                        : {}
                                }
                            >
                                <i
                                    className="fa fa-check"
                                    style={{
                                        opacity: isChecked ? "1" : "0",
                                        // display: isChecked ? "flex" : "none",
                                        // appearance: !isChecked ? "auto" : "none",
                                    }}
                                ></i>
                            </span>
                            <span className="choice-title">{item}</span>
                        </div>
                    </label>
                );
            })}
        </form>
    );
};

export default Options;
