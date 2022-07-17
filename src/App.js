import React from "react";
import Layout from './components/layout';
import Profile from "./components/profile";
import Repositories from "./components/repositories";
 
import useGithub from "./hooks/github-hooks";
import NoSearch from "./components/no search/index";

const  App = ()  => {

  const {githubState} = useGithub ();
  return (    
        <Layout>
          {githubState.loading ? (
            <>
        {githubState.loading ? (
        <p>loading</p>
        ) : (
          <>
          <Profile />
          <Repositories />
          </>
        )}
        </>
      ) : (
        <NoSearch/>
        )}
      </Layout>    
  );
};

export default App; 
