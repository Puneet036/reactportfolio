import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  text-align: center;
  ${'' /* background-color: #656c79; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {
        loading ?
          <HashLoader color={"367DD7"} loading={loading} css={override} size={50} />

          :
          <>
            <Navbar />
            <Banner />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />

          </>

      }

    </div>




  )
}

export default App
