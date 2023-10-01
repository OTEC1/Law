import React, { useState } from 'react'
import styled from 'styled-components';

const  OurOffice = () => {
  const [list, setList] = useState(["./assets/IMG-20230927-WA0035.jpg", "./assets/IMG-20230927-WA0035.jpg", "./assets/IMG-20230927-WA0013.jpg",
                                    "./assets/IMG-20230927-WA0020.jpg","./assets/IMG-20230927-WA0021.jpg","./assets/IMG-20230927-WA0022.jpg",
                                     "./assets/IMG-20230927-WA0026.jpg","./assets/IMG-20230927-WA0027.jpg","./assets/IMG-20230927-WA0028.jpg",
                                     "./assets/IMG-20230927-WA0029.jpg", "./assets/IMG-20230927-WA0035.jpg",
                                     "./assets/IMG-20230927-WA0037.jpg","./assets/IMG-20230927-WA0014.jpg", "./assets/IMG-20230927-WA0040.jpg"]); 
  return (
    <Container>
        <Head>
        <h3>Gallery</h3>
        <Write>	
              In Nigeria, we have two offices located in Abuja and Lagos States respectively. The Head Office of the chamber is now at the Abuja Office. For our address see >>Visit us. 
              The office which houses our chamber is computerized with all the modern facilities. Both the Abuja and Lagos offices have been networked.
        </Write>
        </Head>
        
          <Box>
            {list.map((v) => 
              <InnerBox>
                <img  alt={v} src={v} />
              </InnerBox> 
            )}
          </Box>
          <br/>
          <br/>
          <br/>
          <Write>            	
              Without being modest, we can boast of well seasoned and articulate lawyers in the chambers. 
              Our office is well inundated with current law reports of the recent and old court judgements 
              sufficient in helping us prepare and argue our cases in court as at when the need arises.
          </Write>
          <Write>
            Beyond this, the noble virtue of honesty, integrity, 
            diligence and fervency are what we bring to bear on matters we handle in our law firm as recorded in our credentials.
          </Write>
          <br/>
          <br/>
          <br/>
    </Container>
  )
}


const Container = styled.div`
width:100%; 
height:auto;
font-family: "Poppins", sans-serif;
`;


const Box = styled.div`
width:80%; 
height:100vh;
margin: 0 auto;
display:flex;
justify-content: space-between;
align-items:center;
flex-flow:row;
flex-wrap: wrap;
`;



const Head = styled.div`
width: 100%;
display:flex; 
justify-content:center;
flex-flow:column;
text-align:center;
margin-bottom:20px;
`;


const InnerBox = styled.div`
img{
width:200px;
height:200px;
}
`;


const Write = styled.div`
width:80%; 
height:auto;
margin: 0 auto;
font-size:10px;
text-align:center;
`;
export default OurOffice