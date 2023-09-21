import React, { useEffect, useState } from "react";
import { getQuestions, postAnswers } from "../store/questions";
import { validateScore } from "../store/validateScore";
import Question from "./Question";
import { bgSprinkles } from "../assets/images";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
    const [questions, setQuestions] = useState(null);
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [currTimestamp, setCurrTimestamp] = useState(new Date());
    const [allAnswers, setAllAnswers] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const data = await getQuestions();
            setQuestions(data);
        })();
    }, []);
    const currQuestion = questions && questions[currQuestionIndex];
    const handleQuestionSubmit = (answers) => {
        let submitTimestamp = new Date();
        let timeTaken = submitTimestamp.getTime() - currTimestamp.getTime();
        postAnswers(currQuestionIndex, answers, timeTaken);
        let tempAllAnswers = {
            ...allAnswers,
            [currQuestion.id]: { answers: answers, timetaken: timeTaken },
        };
        setAllAnswers(tempAllAnswers);
        setCurrTimestamp(submitTimestamp);
        if (currQuestionIndex === questions.length - 1) {
            const score = validateScore(tempAllAnswers);
            navigate("/result", { state: score, replace: true });
        } else {
            setCurrQuestionIndex((prev) => prev + 1);
        }
    };

    return (
        <>
            <figure className="bg-image">
                <img src={bgSprinkles} alt="" />
            </figure>
            {currQuestion && (
                <Question
                    question={currQuestion}
                    totalCount={questions.length}
                    currIndex={currQuestionIndex}
                    onSubmit={handleQuestionSubmit}
                    isMultiple={
                        currQuestion.isMultiple
                            ? currQuestion.isMultiple
                            : false
                    }
                    isLast={currQuestionIndex === questions.length - 1}
                />
            )}
        </>
    );
};

export default Quiz;
