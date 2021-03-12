import React from "react";
import styled, { keyframes }  from "styled-components";

const Container = styled.div`
height: 100vh;
width:100vw;
display:flex;
justify-content: center;
align-items:center;
font-size: 25px;
`;

const move = keyframes`
0%{
transform:scale(1)
}
50%{
transform:scale(1.5)
}
100%{
transform:scale(1)
}
`

const Dot = styled.span`
width:15px;
height:15px;
border-radius: 50%;
background-color: #be2b81;
display:inline-block;
animation:${move} .5s linear infinite both;
transition:0.3s;
margin-right:8px;
&:nth-child(2){
animation-delay:.2s
}
&:nth-child(3){
animation-delay:.4s
}
&:nth-child(4){
animation-delay:.6s
}
`



export default () => 
<Container>
    <Dot></Dot>
    <Dot></Dot>
    <Dot></Dot>
    <Dot></Dot>
</Container>
{/* <Container><span>Searching for the Movie Information</span></Container> */}

