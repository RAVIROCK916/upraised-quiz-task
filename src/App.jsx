import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/question" element={<Quiz />}></Route>
                <Route path="/result" element={<Result />}></Route>
            </Routes>
        </div>
    );
}

export default App;
