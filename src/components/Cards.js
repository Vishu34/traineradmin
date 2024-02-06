import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  return (
    <Card className="bg-dark">
      <Card.Img variant="top" src={props.crdImg} />
      <Card.Body>
        <Card.Title className="text-white h3 fw-bold">
          {props.crdTtl}
        </Card.Title>
        <Card.Text className="text-light">{props.crdTxt}</Card.Text>
        <Button variant="warning" size="sm" className="w-50 fw-semibold me-2">
          View
        </Button>
        <Button variant="warning" size="sm" className="me-2">
          <i className="bi bi-arrow-through-heart-fill"></i>
        </Button>
        <Button variant="warning" size="sm">
          <i className="bi bi-bag-plus-fill"></i>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
