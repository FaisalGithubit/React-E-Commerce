import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function Grids() {
  return (
    <>
        <div className='Main-Hadding text-center'>
            <h2>Mission,Vision,Dream & Our Value</h2>
            <p className='underline '></p>
        </div>
    <div className='Main-container'>
    <Card  className='container Cards shadow' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="./Images/Card-1.jpg" style={{ padding:'10px 10px', height:'200px' }}  />
      <Card.Body>
        <Card.Title className='Card-Title'>Mission</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Visit Here</Button>
      </Card.Body>
    </Card>
    <Card  className='container Cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Card-2.jpg" style={{ padding:'10px 10px', height:'200px' }} />
      <Card.Body>
        <Card.Title className='Card-Title'>Vision</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Visit Here</Button>
      </Card.Body>
    </Card>
    <Card  className='container Cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Card-3.jpg" style={{ padding:'10px 10px', height:'200px' }}/>
      <Card.Body>
        <Card.Title className='Card-Title'>Dream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Visit Here</Button>
      </Card.Body>
    </Card>
    <Card  className='container Cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Card-3.jpg" style={{ padding:'10px 10px', height:'200px' }}/>
      <Card.Body>
        <Card.Title className='Card-Title'>Our Value</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Visit Here</Button>
      </Card.Body>
    </Card>

    </div>
    </>
  );
}

export default Grids;