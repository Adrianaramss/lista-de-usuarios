import styled from 'styled-components';


export const Card = styled.div`
display: flex;
margin: 0 auto;
width: 250px;
height: 500px;
border: 1px solid #E0E0E0;
background-color:  #008B8B;
border-radius: 12px;
margin-top: 40px;
box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.789);
flex-direction: column;


`;

export const CardName = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
font-family: "Inter", sans-serif;
font-size: 10px;

 
`;


export const CardPhoto = styled.div`
  margin-top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
 img{
   border-radius: 50%;
   width: 150px;
 }
`;



export const Button = styled.p`
appearance: none;
background: transparent;
margin-top:10px;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 24px;
text-decoration-line: underline;
color: black;
    :hover {
      cursor: pointer;
      
    }

`;

