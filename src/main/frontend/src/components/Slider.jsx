import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
          <Carousel >
    <Carousel.Item interval={1600}>
  
  
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Борис</p>
        <img className='rounded' src="/img/4.jpg" width={'85%'}></img>
        <p>кассир-продавец</p>
        <div >
            <span></span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item interval={1600}>
      
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Марина</p>
        <img className='rounded' src="/img/5.jpg" width={'85%'}></img>
        <p >кассир-продавец</p>
        <div >
            <span></span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее          
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1600}>
      
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Иван</p>
        <img className='rounded' src="/img/6.jpg" width={'85%'}></img>
        <p >администратор</p>
        <div >
            <span></span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее           
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>

    </div>
  )
}

export default Slider