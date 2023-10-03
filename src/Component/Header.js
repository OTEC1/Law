import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {RiMenu2Line, RiCloseLine} from 'react-icons/ri';
import NaviagtionBar from './NaviagtionBar';
import { useState } from "react";

const Header = () => {
    
    const history = useNavigate();
    const [isOpen, setIsOpen] = useState(false);


    const push = (v) => {
         window.scrollTo(0,0);
        history(v);
    }

    const OpenNav = (v) => {
        console.log(v);
        setIsOpen(v);
    }

    return <Head>
                <Logo onClick={(e) => push("/")}>
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
                <PhoneNavigation>
                    <RiMenu2Line size={30}  onClick={(e) => OpenNav(true)}/>
                </PhoneNavigation>

                     {isOpen 
                         ? 
                       <NaviagtionBar fun={OpenNav} push={push} />    
                         :
                       null
                     }

           </Head>
}



const Head = styled.div`
height:15vh;
width:100%;
display:flex;
flex-flow:row;
justify-content:space-between;
@media(max-width:980px){
overflow-y:hidden;
width:100%;
}
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

@media(max-width:980px){
width:60%;
img{
width:40px;
height:40px;
margin-top:10px;
}
h3{
text-align:left;
margin-left:10px;
font-size:10px;
}
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
@media(max-width:980px){
display:none;
margin-right:0px;
}
`;


const  PhoneNavigation = styled.div`
display:none;
@media(max-width:980px){
width:50%;
display:flex;
justify-content:right;
padding-right:15px;
padding-top:18px;
}
`;







export default Header;