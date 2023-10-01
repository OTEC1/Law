import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

const  PrincipalConsel = () => {

    const images = [
        "./assets/benson1.jpg",
        "./assets/benson2.jpg",
        "./assets/benson3.jpg",
    ];

  return (
    <Container>
        <Box>
            <Img>
                <Zoom scale={0.7} autoplay={true} indicators={false} arrows={false}>
                    {images.map((each, index) => (
                        <div key={index} style={{ width: "80%" }}>
                            <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                        </div>
                    ))}
                </Zoom>
            </Img>
            <Write>
                <PageWite>
                    The Principal Counsel Benson Enikuomehin Esq. holds an LL.B (Hons.) Second Class (Lower Division) from the University of Benin, Edo State, 
                    Nigeria in 1993/94. He had a brief pupilage at the Law office of Tayo Oyetibo & Co., 
                    Lagos, Nigeria between 1994 and 1995 
                </PageWite>
                <Link  to={"/details"}>Details</Link>
            </Write>
        </Box>
    </Container>
  )
}


const Container = styled.div`
width:100%;
height:70vh;
padding-top:100px;
`;


const Box = styled.div`
width:80%; 
height:auto;
margin: 0 auto;
padding:50px;
text-align:left;
display:flex;
flex-flow:row;
font-family: "Poppins", sans-serif;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;


const Img = styled.div`
width:50%; 
height:100%; 
img{
object-fit:contain;
}
`;


const Write = styled.div`
display:flex; 
justify-content:center;
align-items:left;
flex-flow:column;
width:80%; 
text-align:left;
`;


const PageWite = styled.div`

`;

export default PrincipalConsel