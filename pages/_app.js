import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    background-color: black;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:black;
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default function App({ Component, pageProps }) {
  

  return (
    <>
    <AppLoading>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </AppLoading>
    </>
  );
}

const AppLoading = styled.div`
 
  height: auto;
  width: auto;
  background-color: black;
`;