import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Question from './question';

const INITIAL_QUESTIONS = [
    {
      id: "remote-work",
      question: "Is the position fully remote?",
      answer: null,
      reason: "Covid 19 changed everything. Companies learned how to operate their organization fully remote. We should utilize this knowledge to save commute time."
    },
    {
      id: "no-services-company",
      question: "Can I directly contribute to product development?",
      answer: null,
      reason: "I would like to see the real meaning of my daily effort, so I would like to work as a regular employee."
    },
    {
      id: "culture-fit-interview",
      question: "Does the discussion with the hiring manager preseed the technical round in the process?",
      answer: null,
      reason: "You probably heard the phrase: culture eats strategy for breakfast."
    },
    {
      id: "home-assignment",
      question: "Is the technical interview based on a home assignment where I can implement something on my own?",
      answer: null,
      reason: "A company is a business organization, not a school. The candidate is not a student. Therefore the interview should not look like an exam."
    },
    {
      id: "linux-workstation",
      question: "Can I install Linux on my workstation?",
      answer: null,
      reason: "Nowadays everything is running in a container, even automated tests. It's still the easiest to work with containers on a Linux based machines.",
    }
]

const QuestionList = () => {
    const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
    const answerQuestion = (questionId, answer) => {
        const newQuestionList = questions.map(question => {
            if (question.id === questionId) {
                return {...question, answer: answer}
            }
            return question
        })
    
        setQuestions(newQuestionList)
    }
    return (
        <Container>
            {questions.map(question => (
                <Question
                    key={question.id}
                    background={question.answer !== null ? question.answer ? 'success' : 'danger' : 'secondary'}
                    text={question.answer === null ? question.question : question.reason}
                    isAnswered={question.answer === null}
                    yesClickHandler={() => answerQuestion(question.id, true)}
                    noClickHandler={() => answerQuestion(question.id, false)}
                />
            ))}
      </Container>
    )
}

export default QuestionList;