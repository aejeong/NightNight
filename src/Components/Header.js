import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
color: white;
position: fixed;
top:0;
left:0;
width:100%;
height:50px;
display : flex;
align-items:center;
justify-content:center;
padding:0px 10px;
background-color :rgba(20,20,20,0.8);
z-index:10;
/* box-shadow:0px 1px 5px 2px rgba(0,0,0, 0.8); */
border-bottom: 1px solid rgb(112 112 112 / 60%);
`;

const Logo = styled.h1`
font-size:24px;
position:absolute;
left:10px;
/* color:#be2b81; */
font-family: 'Anton', sans-serif;
background: -webkit-linear-gradient(40deg, rgba(190,43,129,1) 0%, rgba(235,150,167,0.6535087719298245) 58%, rgba(200,200,200,0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const List = styled.ul`
display:flex;
`;

const Item = styled.li`
width: 80px;
height : 50px;
font-size:15px;
text-align:center;
border-bottom:1px solid ${props => (props.current ? "#be2b81": "transparent")};
color: ${props => (props.current ? "#be2b81" : "#fff")};
font-weight: ${props=> props.current? '700':'400'};
transition:.3s;
&:hover{
transform:${props=> props.current? null : 'scale(1.1)'};

}
`;

const SLink = styled(Link)`
height:50px;
display:flex;
align-items: center;
justify-content: center;
`;

const Search = styled.span`
font-size:14px;
float:right;
position: absolute;
right: 50px;
transition:0.3s;
transform-origin:center
&:before{
    content:'';
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:#5f5f5f;
    border-radius:50%;
    width:30px;
    height:30px;
    z-index:-1;
}
&:hover{
transform:scale(1.2);
}
`;


export default withRouter(({ location: {pathname} }) => {
    return (    
        <Header>
            <Logo>MovieNight</Logo>
                <List>
                <Item current={pathname === "/"}><SLink to="/">Home</SLink></Item>
                <Item current={pathname === "/movie"}><SLink to="/movie">Movies</SLink></Item>
                <Item current={pathname ==="/tv"}><SLink to="/tv">TV</SLink></Item>
                <Item current={pathname ==="/upcoming"}><SLink to="/upcoming">Upcoming</SLink></Item>
                </List>
                <Search current={pathname === "/search"}><SLink to="/search">
                <i className="fi-rr-search"></i></SLink></Search>
            </Header>
            );
})