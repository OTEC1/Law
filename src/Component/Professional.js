import React, { useState } from 'react'
import styled from 'styled-components';

const Professional = () => {

  const [list, setList] = useState([{name:"Olusegun Adedara Esq....",url:"./assets/adedara5.jpg"},{name:"Adole Godwin Esq....",url:"./assets/adole.jpg"},{name:"Ogunbodede Oluwakemi Esq....",url:"./assets/ogunbodede.jpg"},{name:"Peter Femi Emmanuel Esq....",url:"./assets/peter1.jpg"}])  

  return (
    <Container>
        <Head>Meet Our Seasoned Professionals</Head>
        <Box>
            {list.map((v) =>
            <ImgBox>
                <img alt={v.url} src={v.url} />
                <p>{v.name}</p>
            </ImgBox>
            )}
        </Box>
    </Container>
  )
}

const Container = styled.div`
width:100%;
height:70vh;
padding-top:250px;
`;


const Head = styled.div`
width:400px; 
height:auto; 
opacity: 0.7;
color:#fff;
margin-left:auto;
margin-right:auto;
background:#000;
font-size:20px;
border-radius:5px;
margin-top:20px;
margin-bottom:50px;
text-align:center;
`;


const Box = styled.div`
width:80%; 
height:auto; 
margin: 0 auto;
display:flex;
flex-flow:row;
justify-content:center;
`;

const ImgBox = styled.div`
width:auto;
height:auto;
display:flex; 
text-align:left;
flex-flow:column;
margin:20px;
font-family: "Poppins", sans-serif;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

img{
width:100%; 
height:200px;
object-fit:contain;
}
p{
padding:5px;
font-size:12px;
}
`;


export default Professional