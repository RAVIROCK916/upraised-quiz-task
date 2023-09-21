export const validateScore = (allOptions) => {
    const solutions = [
        { answers: ["1"] },
        { answers: ["0"] },
        { answers: ["1"] },
        { answers: ["0", "1", "2"] },
    ];

    let score = 0;
    let correctOnes = 0;
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
            }
        }
        score = Number(score.toFixed(1));
    }
    incorrectOnes = solutions.length - correctOnes;

    return { correct: correctOnes, wrong: incorrectOnes, score: score };
};
