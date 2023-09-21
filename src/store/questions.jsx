import axios from "axios";

export const getQuestions = async () => {
    const res = await axios.get("http://localhost:3000/questions");
    const data = res.data;
    return data;
};

export const postAnswers = async (questionID, answers, timeTaken) => {
    console.log(
        "posting data : ",
        questionID,
        answers,
        timeTaken / 1000,
        " sec"
    );
    axios.post("http://localhost:3000/answers", {
        qID: questionID,
        options: answers,
        timeTaken: timeTaken,
    });
    return true;
};
