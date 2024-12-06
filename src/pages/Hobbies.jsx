import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function Hobbies() {
    return (
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://steamuserimages-a.akamaihd.net/ugc/83716862578182283/8D6E50C5B11E1237B9E7234FB39570A921747F5F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt="First Slide"
          />
          <Carousel.Caption> 
            <h5 style={{ color: 'white'}}>First Hobby <label htmlFor=""></label>  </h5>
            <p style={{ color: 'white'}}>Riding Bike</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/88/6c/31/886c3114f01f3a736d45ea93cca58066.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: 'black'}}>Second Hobby</h5>
            <p style={{ color: 'black'}}>Playing Mobile Legends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/c2/1d/e4/c21de43465e25cafa4bab80fa7311b19.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: 'white'}}>Third Hobby</h5>
            <p style={{ color: 'white'}}>
              Listening to Music
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

export default Hobbies;