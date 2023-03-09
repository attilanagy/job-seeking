import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Criterion = ({title, question, answer, reason, yesHandler, noHandler}) => {
    return (
        <Col>
            <Card text="white" bg={answer !== null ? answer ? 'success' : 'danger' : 'secondary'}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{answer === null ? question : reason}</Card.Text>
                    {answer === null ?
                    <>
                        <Button variant="success" onClick={yesHandler}>Yes</Button>&nbsp;
                        <Button variant="danger" onClick={noHandler}>No</Button>
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
    )
}

export default Criterion