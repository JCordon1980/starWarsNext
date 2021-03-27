import styled from "styled-components";

import Link from "next/link";

function Header() {
  return (
    <HeaderContainer>
      
      <Link href="/">
        <a>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </a>
      </Link>
      
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  background-color:#000000;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  > a > img {
    object-fit: contain;
    margin-top: -40px;
    margin-bottom: -20px;
    height: 180px;
    filter: brightness(0) invert(1);
  }
`;



