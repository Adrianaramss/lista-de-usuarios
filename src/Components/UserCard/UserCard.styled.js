import styled from 'styled-components';


export const Card = styled.div`
display: flex;
margin: 0 auto;
width: 450px;
height: 160px;
border: 1px solid #E0E0E0;
background-color:  #008B8B;
border-radius: 12px;
margin-top: 20px;

`;

export const CardName = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 10px;
  text-align: center;
  margin-top:30px;


`;


export const CardPhoto = styled.div`
  padding:20px;
img{
  border-radius: 50%;
}
`;