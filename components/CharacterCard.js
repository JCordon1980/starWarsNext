
import styled from "styled-components";

function CharacterCard({ character }) {
  const locations = [
    character?.bornLocation,
    character?.diedLocation,
    character?.homeworld,
  ];

  const updateLocations = (value, index, self) => {
    return self.indexOf(value) === index;
  };


  return (
    <>
      <CardContainer>
        <img src={character?.image} alt="" />
        <CharacterInfo>
          <h1>{character?.name} </h1>
          <h4>{character?.affiliations?.length > 0 && "AFFILIATIONS"}</h4>
          {character?.affiliations?.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))}
          <h4>{character?.apprentices?.length > 0 && "APPRENTICES"}</h4>
          {character?.apprentices?.map((apprentice, index) => (
            <p key={index}>{apprentice}</p>
          ))}
          <h4>
            {(character?.bornLocation && "LOCATIONS") ||
              (character?.diedLocation && "LOCATIONS") ||
              (character?.homeworld && "LOCATIONS")}
          </h4>
          {locations.filter(updateLocations).map((location) => (
            <p>{location !== "" && location}</p>
          ))}
          <h4>GENDER</h4>
          <span>{character?.gender}</span>
          <h4>DIMENSIONS</h4>
          <span>Height: {character?.dimensions}m</span>
          <h4>SPECIES</h4>
          <span>{character?.species}</span>
          
        </CharacterInfo>
        
      </CardContainer>
    </>
  );
}

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 999;
  top:180px;
  left: 0;
  width:100%;
  max-height:100vh;

  > img {
    margin: 10px;
    border-radius:10px;
    width:40vh;
    object-fit: contain;
    background-color: black;
  }
`;

const CharacterInfo = styled.div`
  border-radius: 10px;
  margin: 5px;
  border: 2px solid #9e4f60;
  width: 40vh;
  padding: 10px;
  background-repeat: repeat-x;
  background-color: #282727;

  > h1 {
    width: 100%;
    margin: 0 auto;
    color: #ddd;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  > h4 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  > p,
  a {
    color: #9e4f60;
    transition: color 125ms;
    text-transform: capitalize;
    text-decoration: none;

    :hover {
      color: rgb(183, 104, 121);
      cursor:context-menu;
    }
  }

  > span {
    color: #aaa;
    text-transform: capitalize;
  }
`;
const Button = styled.button`
  color: #aaa;
  background-color: black;
  border-radius:10px
  font-family: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width:200px;
  height:500px
 border-radius: 5px
  font-size: 18.4px;
  display: block;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover {
    color: #fff;
    cursor: pointer;
  }

  :hover {
    transform: scale(1.04);
    border: 1px solid #9e4f60;
    
  }

  ::after {
    content: "";
    display: block;
    width: 40%;
    margin: 0 auto;
    opacity: 0.9;
    border-bottom: 1px solid transparent;

    /* Animations */
    -webkit-transition: border-color 200ms, width 250ms;
    -moz-transition: border-color 200ms, width 250ms;
    transition: border-color 200ms, width 250ms;
  }
`;