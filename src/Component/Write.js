import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate } from 'react-router-dom'

const Write = () => {

  
  const history = useNavigate();
  const push = (v) => {
       window.scrollTo(0,0);
      history(v);
  }

  return (
    <Container>
        <Box>
            Benson Enikuomehin & Co. is a tried and tested law firm which has, for several years, 
            provided excellent legal services to its clientele. It has stood as an oasis of qualitative
            law practice since its inception in 1995. In June 1997, it was registered with the Corporate Affairs Commission, 
            Abuja, Nigeria and has rapidly risen in stature and standards, under the able and distinguished leadership of <Link  onClick={(e) => window.scrollTo(0,0)} to={"/bio"}>Barrister Benson Enikuomehin</Link>, 
            to match any of the major law offices in Lagos, Abuja, Port Harcourt, Ibadan, and learned chambers elsewhere in the world. The head office is in Akure, 
            Nigeria while the branch offices are located in Lagos State and Abuja.    <h5  onClick={(e) => push("/bio")}>Details</h5>
        </Box>
    </Container>
  )
}


const Container = styled.div`
width:100%;
height:auto;
padding-top:100px;
`;


const Box = styled.div`
width:80%; 
height:auto;
margin: 0 auto;
padding:100px;
text-align:left;
font-family: "Poppins", sans-serif;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
h5{
color:navy;
cursor:pointer;
}

@media(max-width:980px){
width:80%; 
height:auto;
padding:18px;
margin: 15px;
font-size:14px;
}
`;

export default Write