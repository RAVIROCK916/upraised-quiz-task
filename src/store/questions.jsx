import axios from "axios";

export const getQuestions = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const data = res.data;
    console.log(data);
};
