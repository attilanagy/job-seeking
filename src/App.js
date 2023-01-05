import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    question: "Does the discussion with the hiring manager preseed the technical round in the hirigin process?",
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

function App() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS)
  const answerQuestion = (questionId, answer) => {
    const newQuestionList = questions.map(question => {
      if (question.id === questionId) {
        const updatedQuestion = {...question, answer: answer}
        return updatedQuestion
      }
      return question
    })

    setQuestions(newQuestionList)
  }

  return (
    <div className="App">
      <Container>
      {questions.map(question => (
        <Row>
            <Col key={question.id}>
              <Card bg={question.answer !== null ? question.answer ? 'success' : 'danger' : 'light'}>
                <Card.Body>
                  <Card.Text>{question.answer === null ? question.question : question.reason}</Card.Text>
                  {question.answer === null ?
                    <>
                      <Button variant="success" onClick={() => answerQuestion(question.id, true)}>Yes</Button>&nbsp;
                      <Button variant="danger" onClick={() => answerQuestion(question.id, false)}>No</Button>
                    </>
                    :
                    <>
                      <Button variant="dark">Yes</Button>&nbsp;
                      <Button variant="dark">No</Button>
                    </>
                  }
                </Card.Body>
              </Card>
            </Col>
        </Row>
      ))}
      </Container>
    </div>
  );
}

export default App;
