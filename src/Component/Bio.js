import React from 'react'
import styled from 'styled-components'
import{ RiPhoneFill} from 'react-icons/ri'

const  Bio = () => {
  return (
    <Container>
        <Up>
            <Img>
              <img src='./assets/BensonEnikuomehin.jpg' />
             </Img>
            <Write>
                <b>The Principal Counsel - Benson Enikuomehin (Esq.)</b>
                <p>
                    He holds an LL.B (Hons.) Second Class, (Lower Division) from the University of Benin in 1993/94. 
                    He had a brief pupilage at the Law office of Tayo Oyetibo & Co, Lagos, Nigeria. between 1994 and 1995.
                </p>
                <p>
                    Upon his being called to Bar in 1995, he immediately established his Law Firm by name Benson Enikuomehin & Co. 
                    and christened it Shalom Chambers. He has been involved in very active legal practice since then.
                </p>
                <p>
                  The Principal Counsel has held various positions in the legal and political worlds. Amongst these are :-
                </p>
            </Write>
        </Up>
        <Down>
            <ul>
                <li>Legal Adviser to the Ondo State Oil Mineral Advisory Committee (1995 - 1997)</li>
                <li>Financial Secretary, Association of Resident Lawyers, Ikorodu,Lagos, Nigeria(1997 - 1999)</li>
                <li>First Secretary General, Nigerian Bar Association, Ikorodu branch, Lagos State, Nigeria(1999 - 2003)</li>
                <li>He was member of the National Executive Council of the Nigerian Bar Association (1999 - 2003)</li>
                <li>He is currently the Special Assistant to the Governor of Ondo State on Policy, Planning and Implementation, Privatization of Government Companies and Special Duties (2003 - february 2008)</li>
                <li>Director of organization, mobilization, strategies and legal services of southern forum. (2005 - )</li>
                <li>Commissioner Representing Ondo State on the board of Niger Delta Development Commission ( 2010 - )</li>
            </ul>
        </Down>
        
        <Last>
            <Circle>
              <RiPhoneFill size={25}/>
            </Circle>
            <DownPage>
                You can contact Barrister Benson Enikuomehin on these numbers -
                <br/>
                081-2223-3445
                <br/>
                080-5882-5882
                <br/>
                070-3777-3390
                <br/>
                You can also send a mail to these addresses: 
                <br/>
                benson@enikuomehin.com and bensongoodness62@gmail.com
                <br/>
                or the Administrative Manager, Olusegun Adedara Esq. - 234-080353928805
            </DownPage>
        </Last>
    </Container>
  )
}

const Container = styled.div`
width:100%; 
height:100vh;
`;


const Up = styled.div`
width:80%; 
height:50vh;
display:flex; 
flex-flow:row;
margin-left:auto;
margin-right:auto;
margin-top:100px;
`;


const Img = styled.div`
width:50%; 
height:100%; 
img{
object-fit:contain;
}
`;


const Write = styled.div`
text-align:left;
width:70%; 
`;


const Down = styled.div`
width:70%; 
height:40vh;
margin-left:auto;
margin-right:auto;
margin-top:100px;
margin-bottom:10px;
ul li{
text-align:left;
}
`;

const Last = styled.div`
width:50%;
height:auto; 
padding:40px;
margin: 0 auto;
display:flex; 
justify-content:center;
align-items:center;
flex-flow:row;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;


const Circle = styled.div`
font-size:35px;
display:flex; 
justify-content:center;
align-items:center;
border-radius:100%; 
border: 1px solid #000;
padding:20px;
`;

const DownPage = styled.div`
margin-left:15px;
text-align:left;
`;


export default Bio