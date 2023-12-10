const fetchAnswersByQuestionId = async (questionId) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/answers/${questionId}`);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
        }
        const answers = await response.json();
        console.log('ANSWERS : ', answers)
        return answers;
    } catch (error) {
        console.error('Error fetching answers:', error);
        throw error;
    }
};
const isGivenAnswerCorrect = async (answerId) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/answers/isTrue/${answerId}`);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
        }
        const isTrue = await response.json();
        console.log('IS TRUE : ', isTrue)
        return isTrue;
    } catch (error) {
        console.error('Error fetching answers:', error);
        throw error;
    }
}

export {fetchAnswersByQuestionId, isGivenAnswerCorrect} ;
