import React, { useState } from 'react'
import styled from 'styled-components';

const  Staffs = () => {
  const [list, setList] = useState([{name:"Benson Enikuomehin Esq.",
                                     write:"He holds an LL.B Second Class, (Lower Division) from the University of Benin in 1993/94. He is presently the Principal Counsel of the law firm. He had a brief pupilage at the Law office of Tayo Oyetibo & Co. in 1994/95.", 
                                     url:"./assets/ben2.jpg"},
                                     {name:"Adeniran Ojo Esq",
                                     write:"He holds the LL.B Second Class (Upper Division) from the University of Benin (1990). He was called to the Nigerian Bar in 1991 after passing the Bar Qualifying Examinations in the Second Class Upper Division. He has several work experiences which spans several facets of Legal Practice. He now heads the Chambers of Benson Enikuomehin & Co",
                                     url:"./assets/Ojo1.jpg"},
                                    ])  
  return (
            <Container>
                <Head>Our Staff</Head>
                <Box>
                    {list.map((v) =>
                    <ImgBox>
                        <img alt={v.url} src={v.url} />
                        <div>
                          <p>{v.name}</p>
                          <p>{v.write}</p>
                        </div>
                    </ImgBox>
                    )}
                </Box>
            </Container>
          )
        }
        
const Container = styled.div`
width:100%;
height:auto;
padding-top:50px;
padding-bottom:50px;
`;


const Head = styled.div`
width:200px; 
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
@media(max-width:980px){
width:100%;
flex-flow:column;
}
`;

const ImgBox = styled.div`
width:auto;
height:auto;
display:flex; 
text-align:left;
flex-flow:row;
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

@media(max-width:980px){
width:90%;
flex-flow:column;
}

`;



                                  

export default Staffs