import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { getQuestions } from "../store/questions";

const Home = () => {
    return (
        <main>
            <Navbar />
            <span className="quiz-title">Quiz</span>
            <Link to="/question" className="quiz-start-btn">
                <button id="quiz-start">Start</button>
            </Link>
        </main>
    );
};

export default Home;
