import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Connect = () => {
  return (
    <Container>
        <Box>
            <img src="./assets/book_page_flip_sm_nwm.gif" />
            <h5>Do you wish to contact <Link to={"/bio"}>Benson Enikuomehin Esq?</Link></h5>
        </Box>
        <Write>
            On the 10th June, 2013, The Nigeria Arise Awards in conjunction with Ben Tv (UK) presented an award to Dr 
            Benson Enikuomehin in recognition of his unique initiatives in rural development project and promotion of SMEs in Nigeria
        </Write>
    </Container>
  )
}


const Container = styled.div` 
height:50vh;
width:80%; 
margin:auto;
`;

const Box = styled.div`
width:80%; 
margin:auto;
text-align:center;
`;

const Write = styled.div`

`;
export default Connect