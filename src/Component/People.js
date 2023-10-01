import React from 'react'
import styled from 'styled-components'

const  People = () => {
  return (
    <Container>
        <Head>
             Our people are the greatest driving force in the firm. Our philosophy is to recruit, train, and retain highly qualified personnel, specialists in their respective fields who would lead the Chambers to the promised land of success and fame in the Legal World.
            <br/>
            <hr/>
        </Head> 

         <img src='./assets/people.jpg'  alt='./assets/people.jpg'/>
       
    </Container>
  )
}


const Container = styled.div`
text-align:center;
`;


const Head = styled.div`
width:80%; 
height:100px; 
opacity: 0.7;
color:#fff;
font-size:15px;
margin-left:auto;
margin-right:auto;
background:#8fd1f7;
border-radius:5px;
margin-top:50px;
margin-bottom:50px;
text-align:center;
align-items:center;
display:flex; 
flex-flow:column;
justify-content:center;

hr{
width:60%;
height: 0.5px;
background-color: #fff;
border: none;
margin-top:10px;
}

`;

export default People



