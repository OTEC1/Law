import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const history = useNavigate();

    const push = (v) => {
        history(v);
    }


    return <Head>
                <Logo>
                    <img  src="./assets/Templogo.png"/>
                    <Column>
                        <h3>Benson Enikuomehin & co</h3>
                        <h5>Shalom Chambers</h5>
                    </Column>  
                </Logo>
                <Naviagtions>
                        <h5 onClick={(e) => push("/")}>home</h5>
                        <h5 onClick={(e) => push("/our+office")}>Our offices</h5>
                        <h5 onClick={(e) => push("/our+misson")}>Our Mission</h5>
                        <h5 onClick={(e) => push("/our+service")}>Our Services </h5>
                        <h5 onClick={(e) => push("/our+people")}>Our People</h5>
                        <h5 onClick={(e) => push("/our+staff")}>Our Staff</h5>
                        <h5 onClick={(e) => push("/library")}>Library</h5>
                </Naviagtions>
           </Head>
}



const Head = styled.div`
height:15vh;
width:100%;
display:flex;
flex-flow:row;
justify-content:space-between;
`;



const Logo = styled.div`
height:100%;
width:30%;
display:flex;
padding:10px;
img{
width:70px;
height:70px;
}
h3{
text-align:left;
margin-left:10px;
}
`;


const Column = styled.div`
width:100%;
height:20%;
display:flex;
flex-flow:column;
h5{
text-align:left;
margin-left:10px;
margin-top:-10px;
}
`;



const Naviagtions = styled.div`
height:100%;
width:50%;
display:flex;
flex-flow:row;
margin-top:30px;
margin-right:20px;
justify-content:space-between;
`;




export default Header;