import axios from "axios";

export const getQuestions = async () => {
    const res = await axios.get("http://localhost:3000/questions");
    const data = res.data;
    return data;
};
