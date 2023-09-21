export const validateScore = (allOptions) => {
    const solutions = [
        { answers: ["1"] },
        { answers: ["0"] },
        { answers: ["1"] },
        { answers: ["0", "1", "2"] },
    ];

    try {
        // score endpoint will be built in backend
        axios.get("http://localhost:3000/score", () => {});
    } catch (err) {
        console.error(err);
    }

    // implementing the frontend logic since backend is not available

    let score = 0;
    let correctOnes = 0;
    let partialOnes = 0;
    let incorrectOnes = 0;

    for (let i = 0; i < Object.keys(allOptions).length; i++) {
        let selectedOptions = allOptions[i + 1].answers;
        let solution = solutions[i].answers;

        const commonChoices = selectedOptions.filter((value) =>
            solution.includes(value)
        );

        if (selectedOptions.length == solution.length) {
            if (selectedOptions.toString() == solution.toString()) {
                score++;
                correctOnes++;
            }
        } else if (selectedOptions.length < solution.length) {
            if (selectedOptions.toString() == commonChoices.toString()) {
                score = score + commonChoices.length / solution.length;
                partialOnes++;
            }
        }
        score = Number(score.toFixed(1));
    }
    incorrectOnes = solutions.length - partialOnes - correctOnes;

    return {
        correct: correctOnes,
        partial: partialOnes,
        wrong: incorrectOnes,
        score: score,
    };
};
