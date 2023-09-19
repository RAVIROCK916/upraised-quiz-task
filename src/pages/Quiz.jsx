import React, { useEffect, useState } from "react";
import { getQuestions, postAnswers } from "../store/questions";
import Question from "./Question";
import { bgSprinkles } from "../assets/images";

const Quiz = () => {
    const [questions, setQuestions] = useState(null);
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [currTimestamp, setCurrTimestamp] = useState(new Date());
    useEffect(() => {
        (async () => {
            const data = await getQuestions();
            setQuestions(data);
        })();
    }, []);
    console.log(questions);
    const currQuestion = questions && questions[currQuestionIndex];
    const handleQuestionSubmit = (answers) => {
        let submitTimestamp = new Date();
        postAnswers(
            currQuestionIndex,
            answers,
            submitTimestamp.getTime() - currTimestamp.getTime()
        );
        setCurrTimestamp(submitTimestamp);
        if (currQuestionIndex === questions.length - 1) {
            console.log("End of questions");
            //TODO: Route to main page or feedback page
        } else {
            setCurrQuestionIndex((prev) => prev + 1);
        }
    };

    return (
        <>
            <figure>
                <img src={bgSprinkles} alt="" />
            </figure>
            {currQuestion && (
                <Question
                    question={currQuestion}
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
