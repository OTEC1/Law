import React from 'react'
import styled from 'styled-components';
import {RiCloseLine} from 'react-icons/ri';

const NaviagtionBar = ({push,fun}) =>{
  return (
    <Container>
        <Close>
           <RiCloseLine size={25} onClick={(e) => fun(false)} />
        </Close>
     
        <Pad>
            <h5 onClick={(e) => push("/")}>home</h5>
            <h5 onClick={(e) => push("/our+office")}>Our offices</h5>
            <h5 onClick={(e) => push("/our+misson")}>Our Mission</h5>
            <h5 onClick={(e) => push("/our+service")}>Our Services </h5>
            <h5 onClick={(e) => push("/our+people")}>Our People</h5>
            <h5 onClick={(e) => push("/our+staff")}>Our Staff</h5>
            <h5 onClick={(e) => push("/library")}>Library</h5>
        </Pad>
    </Container>
  )
}




const Container = styled.div`
width:100%; 
height:100vh; 
background:#fff;
z-index:99999;
display:flex; 
justify-content:right;
position:absolute;
font-family: "Poppins", sans-serif;
`;


const Pad = styled.div`
display:flex; 
flex-flow:column;
h5{
font-weight:500;
font-size:18px;
padding-right:20px;
padding-top:15px;
}
`;


const Close = styled.div`
right:0;
width:100%; 
height:50px; 
display:flex;
padding:15px;
position:absolute;
justify-content:right;
`;
export default NaviagtionBar