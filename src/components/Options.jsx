import React from "react";
import { useState } from "react";

const Options = ({ choices, isMultiple, onChange, answers }) => {
    console.log(choices);
    return (
        <form>
            {choices.map((item, idx) => {
                return (
                    <label htmlFor={`choice-${idx}`} key={`choices-${idx}`}>
                        <div className="choice">
                            <input
                                // TODO: Add styling for checkbox and radio to look the same
                                type={isMultiple ? "checkbox" : "radio"}
                                name={idx}
                                id={`choice-${idx}`}
                                onChange={onChange}
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
