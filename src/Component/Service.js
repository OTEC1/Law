import React from 'react'
import styled from 'styled-components'

const Service = () => {
  return (
    <Container>
        <Head><img src="./assets/highlights.png" />  	We are a firm of Legal Practitioners involved in corporate consultancy. Our are of specialization include, among others, the following:-</Head>
        
        <Page2>
           <ul>
            <li>
              Incorporation of Limited and Unlimited Companies, registration of Business names as well as Companies limited by guarantee
            </li>
            <li>
             Preparation and stamping of Legal documents like mortgage deeds; assignment of interest of outright sales of land; tripartite legal mortgage and debentures, drawing up memorandum of understanding among parties.
            </li>
            <li>
              Offering Legal opinions and services that can foster better banker/customer relationship.
            </li>
            <li>
               Conducting searches on land, property, companies etc.
            </li>
            <li>
              Producing and purchasing real and corporate investments on client's behalf.
            </li>
            <li>
              Recovery of debts.
            </li>
            <li>
              Litigation in any form (arbitration and regular courts).
            </li>
            </ul>
        </Page2>
    </Container>
  )
}

const Container = styled.div``;


const Head = styled.div`
display:flex; 
flex-flow:row;
justify-content:center;
align-items:center;
width:80%; 
height:auto; 
opacity: 0.7;
color:#fff;
margin-left:auto;
margin-right:auto;
background:#8fd1f7;
font-size:15px;
border-radius:5px;
margin-top:20px;
margin-bottom:50px;

img{
width:150px;
height:150px;
}

@media(max-width:980px){
flex-flow:column;
text-align:center;
padding:15px;
}
`;



const Page2 = styled.div`
width:80%;
margin-left:auto; 
margin-right:auto; 
margin-bottom:150px;
ul li{
margin-top:10px;
}
`;

export default Service