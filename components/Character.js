import styled from "styled-components";
import Link from "next/link";


function Character({ character }) {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`} replace>
        <a>
          <img src={character.image} alt={character.name} />
        </a>
      </Link>
      <Link href={`/id/${character.id}.json`} replace>
        <a>
          <h1>{character.name} </h1>
        </a>
      </Link>
     
    </CharacterContainer>
  );
}

export default Character;

const CharacterContainer = styled.div`
  border-radius: 6px;
  width: 266px;
  background-color: #282727;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.04);
    border: 1px solid #9e4f60;
    
  }

  > a > img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 266px;
    height: 300px;
    border-bottom: 2px solid #9e4f60;
  }

  > a > h1 {
   
    padding: 8px;
    display: inline-block;
    color: #ddd;
    font-size: 17px;
    text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;

    :hover {
      color: #9e4f60;
      
    }
  }
`;

