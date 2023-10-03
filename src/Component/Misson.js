import React from 'react'
import styled from 'styled-components'

const Misson = () => {
  return (
    <Container>
        <Head><img src="./assets/highlights.png" />  Our immediate goal is to set up a virile legal practice, unparalleled in the history of Ondo State with well qualified and experienced personnel and lawyers.</Head>
        <Page>
            <img src="./assets/IMG-20230927-WA0036.jpg"/>
            <h5>
                We intend to take legal practice in the state to the area where the practice will experience its full potentials. 
                For instance, we are aware that there are many aggrieved litigants, victims of unfavourable court judgements who by reason of financial incapacity are unable to take their matters to the Court of Appeal or Supreme Court as the case may be. We are also aware that this situation could arise as a result of dearth of 
                qualified or uninformed lawyers who are unable to handle such matters with a proper professional touch either because of the earlier reason given or no proper 
                updated library.
            </h5>
        </Page>
        <Page2>
           <h5>
              We intend to arrest this kind of unpleasant situation in the practice of this state (Ondo State) by first of all providing a current 
              library sufficient to assist us even in taking any appeal matter to the Supreme Court, as well as giving our clients a first hand information on their chances of success whenever any court judgement or ruling is given against them.
            </h5>

            
            <h5>
              It is also our mission that never again shall indigent litigants have their rights trampled upon by reason of their 
              inability to hire the services of legal practitioners. We shall bridge the gap between their rights and that of their expected ends.
            </h5>
        </Page2>
    </Container>
  )
}

const Container = styled.div`
@media(max-width:980px){
overflow-x:hidden;
}
`;


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


const Page = styled.div`
width:80%;
margin-left:auto; 
margin-right:auto; 
display:flex; 
flex-flow:row;
justify-content:center;
align-items:center;
margin-top:15px;
margin-bottom:15px;
img{
width:50%;
height:600px;
border: 2px solid #000;
}
h5{
width:80%;  
height:50%;
font-size:15px; 
margin-left:15px;
}

@media(max-width:980px){
flex-flow:column;
text-align:left;
padding:15px;
img{
width:100%;
}
h5{
margin-left:0px;
width:100%;
}
}
`;


const Page2 = styled(Page)`
flex-flow:column;
width:90%;
`;

export default Misson