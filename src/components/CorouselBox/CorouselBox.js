import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap'
import Center from '../Center/Center'
import Info from '../Info/Info'
import Card from '../Card/Card';





export default function CorouselBox() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const handleButton = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };
  const handleButtonOne = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const handleButtonTwo = () => {
    setActiveIndex((prevIndex) => prevIndex - 2);
  };
  return (
    <Carousel activeIndex={activeIndex} onSelect={() => {}}>
      <Carousel.Item>
        <Center className="d-block w-100"/>
        <Carousel.Caption>
        
          <Button variant="primary" onClick={handleButtonClick}>программисты</Button>
        
    </Carousel.Caption>
        <Carousel.Caption>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Card  className="d-block w-100"/>
        <Carousel.Caption>
       
          <Button variant="primary" onClick={handleButton}>что мы имеем</Button>
          <Button variant="primary" onClick={handleButtonOne} style={{ marginLeft: '50px' }}>Card</Button>

    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Info className="d-block w-100"/>
        <Carousel.Caption>
          <Button variant="primary" onClick={handleButtonTwo}>что мы делаем</Button>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
