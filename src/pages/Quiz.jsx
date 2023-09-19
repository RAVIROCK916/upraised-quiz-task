import React, { useEffect, useState } from "react";
import { getQuestions } from "../store/questions";
import Question from "./Question";

const Quiz = () => {
    const [questions, setQuestions] = useState(null);
    const [qID, setQID] = useState(0);
    const currQuestion =
        questions && questions.find((question) => question.id === qID);
    useEffect(() => {
        (async () => {
            const data = await getQuestions();
            setQuestions(data);
        })();
    }, []);
    return (
        <>
            {currQuestion && (
                <Question question={currQuestion} setQID={setQID} />
            )}
        </>
    );
};

export default Quiz;
