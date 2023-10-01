import React from 'react'
import { RiAppsFill, RiContactsFill, RiFacebookFill, RiInstagramFill, RiMailFill, RiUserLocationLine, RiWhatsappFill } from 'react-icons/ri';
import styled from 'styled-components'



function Footer() {
  return (

    <Container>
               
        <Div>
            <div id='th'> <RiUserLocationLine/> &nbsp; Office address </div>   
            <br/>
            <div id='tr'>
               No 16 Simpson Street beside Evans Square
               Ebute Metta East Lagos Mainland Lagos Nigeria.
            </div>
        </Div>

        <Div>      
           <div id='th'><RiContactsFill/> &nbsp; Contact Us </div>   
           <br/>
            <div id='tr'> NO: </div>
            <br/>
            <div id='tr'> NO: </div>
            <br/>
           <div id='tr'></div>   
        </Div>

        <Div>
          <div id='th'><RiAppsFill/> &nbsp; Follow Us On  </div>      
            <br/>
             <div id='tr'><RiFacebookFill/>  </div> 
              <br/>
              <div id='tr'><RiMailFill/></div> 
              <br/>
              <div id='tr'><RiWhatsappFill/> </div> 
              <br/>
             <div id='tr'><RiInstagramFill/> </div> 
        </Div>
    
        <Line/>
        <Last><br/>  &copy; Benson Enikuomehin & Co  All Rights Reserved</Last>
    </Container>
  )
}




const Container = styled.div`
width:100%;
height:500px;
padding-top:100px;
display:flex;
position:relative;
background-color: #000;
font-family: "Poppins", sans-serif;
clip-path: ellipse(138% 100% at 7.76% 100%);

@media(max-width:768px){
flex-wrap:wrap;
height:auto;
clip-path: ellipse(267% 100% at -36.8% 100%);
padding-bottom:200px;
}

`;



const Div = styled.div`
width:35%;

#th{
color:#ff7b00;
padding-top:100px;
padding-left:50px;
font-weight:850;
font-size:20pt;
display:flex;
align-items:center;
}

#tr{
color:#fff;
padding-top:0px;
padding-left:50px;
padding-right:50px;
display:flex;
align-items:center;
}


@media(max-width:768px){
width:100%;
#th{
padding-left:10px;
}

#tr{
padding-left:10px;
padding-right:0px;
}
}
`;


const Line = styled.div`
position:absolute;
width:80%;
height:2px;
background:#f5f5f5;
bottom:0;
margin-bottom:100px;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto;
`;

const Last = styled(Line)`
color:#f5f5f5;
width:300px;

@media(max-width:768px){
width:80%;
text-align:center;
}
`;

export default Footer