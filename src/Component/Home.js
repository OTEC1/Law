import React from 'react'
import styled from 'styled-components'
import Carousels from './Carousel';
import Write from './Write';
import PrincipalConsel from './PrincipalConsel';
import Professional from './Professional';
import Connect from './Connect';

const Home = () =>{
  return (
    <Container>
        <Carousels/>
        <Write/>
        <PrincipalConsel/>
        <Professional/>
        <Connect/>
    </Container>
  )
}


const Container = styled.div`
width:100%; 
height:auto;
`;

export default Home