import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Quiz from "./pages/Quiz";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/question" element={<Quiz />}></Route>
            </Routes>
        </div>
    );
}

export default App;
