import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Criterion from "./Criterion";

const Criteria = ({initialCriteria}) => {
    const [criteria, setCriteria] = useState(initialCriteria);
    const answerQuestion = (criterionId, answer) => {
        const newCriteria = criteria.map(criterion => {
            if (criterion.id === criterionId) {
                return {...criterion, answer: answer};
            }
            return criterion;
        });

        setCriteria(newCriteria);
    };
    
    return (
        <Container>
            {criteria.map(criterion => (
                <Row key={criterion.id}>
                    <Criterion
                        question={criterion.question}
                        answer={criterion.answer}
                        reason={criterion.reason}
                        yesHandler={() => answerQuestion(criterion.id, true)}
                        noHandler={() => answerQuestion(criterion.id, false)}
                    />
                </Row>
            ))}
        </Container>
    )
}

export default Criteria;