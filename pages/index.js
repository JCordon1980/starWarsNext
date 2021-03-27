import { useState } from "react";
import styled from "styled-components";
import Character from "../components/Character";
import Head from "next/head";

export default function Characters({ characters }) {
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  return (
    <>
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>

      <CharactersContainer>
        {characters
          .filter((character) => character.id !== 28 && character.id !== 77)
          .map(
            (character, index) =>
              index < value && (
                <Character character={character} key={character.id} />
              )
          )}
      </CharactersContainer>
      {value < characters.length && (
        <Button onClick={handleShowMore}>SHOW MORE</Button>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const characters = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  ).then((res) => res.json());

  return {
    props: {
      characters,
    },
  };
}



const CharactersContainer = styled.div`
  display: flex;
  margin-top: 150px;
  left: 0px;
  right: 0px;
  padding: 30px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  background-color: #000000;
  position: absolute;
  
`;

const Button = styled.button`
  color: #aaa;
  background-color: black;
  border: none;
  font-family: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 18.4px;
  display: block;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover {
    color: #fff;
    cursor: pointer;
  }

  :hover::after {
    border-bottom-color: #fff;
    width: 100%;
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
