import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Question = ({background, text, isAnswered, yesClickHandler, noClickHandler}) => {
    console.log('Rendering question: ' + text); 
    return (
        <Row>
            <Col>
              <Card text="white" bg={background}>
                <Card.Body>
                  <Card.Text>{text}</Card.Text>
                  {isAnswered ?
                    <>
                      <Button variant="success" onClick={yesClickHandler}>Yes</Button>&nbsp;
                      <Button variant="danger" onClick={noClickHandler}>No</Button>
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
    )
}

export default Question;