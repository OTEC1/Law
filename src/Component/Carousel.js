import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Carousels = () => {
  
  const [list, setList] = useState(["cross_section2.jpg","lib1.jpg","principal2.jpg"]);   

  return (
    <Container>
           <Page>
              <h3>Benson Enikuomehin & Co</h3>
              <h5>Shalom Chambers</h5>
            </Page>
        <Carousel infiniteLoop={true} autoPlay={true}  showStatus={false} showThumbs={false}>
            {list.map((v) =>
              <div>
                  <img alt={v} src={`assets/${v}`} />
              </div>
            )}
    </Carousel>
  </Container>
  )
}


const Container = styled.div`
img{
height:100vh;
object-fit:cover;
}
`;


const Page = styled.div`
width:40%;
height:auto; 
color:#fff;
top: 60%;
left: 50%;
z-index:9999;
padding:10px;
background:#000;
opacity: 0.7;
position: absolute;
border-radius:10px;
transform: translate(-50%, -50%);
text-align:center;
h3{
font-weight:900;
font-size:30px;
}
`;

export default Carousels