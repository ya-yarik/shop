import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import{Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>      
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home"><Link to={'http://localhost:8090'}>Магазин "Ёжик"</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><Link to={'http://localhost:8090'}>Главная</Link></Nav.Link>
      <Nav.Link><Link to={'/'}>Описание</Link></Nav.Link>
      <Nav.Link><Link to={'/aboutus'}>О нас</Link></Nav.Link>
      <Nav.Link><Link to={'/requisites'}>Реквизиты</Link></Nav.Link>
      <Nav.Link><Link to={'/feedback'}>Контакты</Link></Nav.Link>
      <Nav.Link><Link to={'/vacancies'}>Вакансии</Link></Nav.Link>
    </Nav>
    
    <Nav>
    <Button variant="outline-primary" href="http://localhost:8090/auth">Вход</Button>
    <Button variant="outline-primary" href="http://localhost:8090/registration">Регистрация</Button>
    </Nav>
  </Container>
</Navbar>
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home"><Link to={'/'}></Link></Navbar.Brand>
    <Nav className="me-auto">
    
      <Nav.Link><Link to={'/pickup'}>Пункты выдачи</Link></Nav.Link>
      <Nav.Link><Link to={'/makeorder'}>Как сделать заказ?</Link></Nav.Link>

      <Nav.Link><Link to={'/payment'}>Оплата</Link></Nav.Link>
      <Nav.Link><Link to={'/delivery'}>Доставка</Link></Nav.Link>
      <Nav.Link><Link to={'/return'}>Возврат</Link></Nav.Link>
      <Nav.Link><Link to={'/datarules'}>Условия обработки данных</Link></Nav.Link>
      
      
    </Nav>

  </Container>
</Navbar>

</div>

  )
}

export default Header