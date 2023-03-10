import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Criterion = ({title, question, answer, reason, yesHandler, noHandler}) => {
    const isAnswered = answer !== null;
    return (
        <Col>
            <Card text={isAnswered ? 'light' : 'dark'} bg={isAnswered ? answer ? 'success' : 'danger' : 'light'}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{!isAnswered ? question : reason}</Card.Text>
                    {!isAnswered ?
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