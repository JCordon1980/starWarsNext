import styled from "styled-components";
import Head from "next/head";
import CharacterCard from "../../components/CharacterCard";

function Character({ character }) {
  return (
    <CharacterContainer>
       <Head>
        <title>{character?.name} | StarWars.com</title>
      </Head>
   
      <CharacterCard character={character} /> 
      
    </CharacterContainer>
  );
}

// EXECUTED ON SERVER
export async function getStaticProps(context) {
  const character = await fetch(
    `https://akabab.github.io/starwars-api/api/id/${context.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      character,
    },
  };
}

export async function getStaticPaths(context) {
  const characters = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  ).then((res) => res.json());

  const paths = characters.map((character) => `/id/${character.id}.json`);

  return {
    paths,
    fallback: false,
  };
}

export default Character;

const CharacterContainer = styled.div`
  padding:0px;
  margin-top: 180px;
  background-color: black;
`;

