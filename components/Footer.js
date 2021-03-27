import styled from "styled-components";


function Footer() {
  return (
    <FooterContainer>
     <h1> javierocordonb@gmail.com</h1>      
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
 
  display: grid;
  place-items: center;
  background-color: black;
 
  color: white;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg);
  background-position: center top;
  background-repeat: no-repeat;
 

`;
