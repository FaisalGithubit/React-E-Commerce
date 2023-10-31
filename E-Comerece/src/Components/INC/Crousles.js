import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Crousles.css'



function Crousles() {
  return (
<>

    <div className='Crousles'>
    <Carousel>
      <Carousel.Item>
        <img 
        src='./Images/2.jpeg' 
        alt='Faisal'
        className='Custom-Crousles'
        />
        
    
      </Carousel.Item>
      <Carousel.Item>
      <img src='./Images/3.jpeg' alt='
        Faisal'
        className='Custom-Crousles'/>
     
      </Carousel.Item>
      <Carousel.Item>
      <img src='./Images/4.jpeg' alt='
        Faisal' 
        className='Custom-Crousles'  />
        
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Crousles;