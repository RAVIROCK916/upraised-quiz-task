import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

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

    const resetDataBase = async () => {
        // await axios.put("http://localhost:3000/answers", { hello: "world" });
        axios("http://localhost:3000/answers", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            data: { hello: "world" },
        })
            .then((response) => {
                console.log("Successfully Updated !");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        allAnswers && (
            <div className="result">
                <h2>Your Result -- {allAnswers.score}</h2>
                <p className="score-info correct">
                    {allAnswers.correct} Correct
                </p>
                <p className="score-info incorrect">
                    {allAnswers.wrong} Incorrect
                </p>
                <Link to="/question">
                    <button onClick={resetDataBase}>Start Again</button>
                </Link>
            </div>
        )
    );
};

export default Result;
