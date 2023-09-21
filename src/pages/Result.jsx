import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import "../styles/Result.css";
import { Link } from "react-router-dom";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [allAnswers, setAllAnswers] = useState(null);
    useEffect(() => {
        if (!location.state) {
            setAllAnswers(null);
            navigate("/", { replace: true });
        } else {
            setAllAnswers(location.state);
        }
    }, []);
    const data = location.state;

    return (
        allAnswers && (
            <div className="result">
                <h2>Score : {allAnswers.score}</h2>
                <p className="score-info correct">
                    {allAnswers.correct} Correct
                </p>
                <p className="score-info partial">
                    {allAnswers.partial} Partial
                </p>
                <p className="score-info incorrect">
                    {allAnswers.wrong} Incorrect
                </p>
                <Link to="/question">
                    <button>Start Again</button>
                </Link>
            </div>
        )
    );
};

export default Result;
