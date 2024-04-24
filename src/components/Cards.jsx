import React from 'react'
import Card1 from './Card'
import { Row, Container } from 'react-bootstrap';
const Cards = () => {
  return (
    <>
    <Container className='cards'>
      <Row>
      <Card1/>
      <Card1/>
      <Card1/>
      <Card1/></Row></Container>
    </>
  )
}

export default Cards
