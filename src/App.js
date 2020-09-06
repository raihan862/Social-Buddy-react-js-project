import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Header from './Components/Header/Header';
import Post from './Components/Body/Post';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostDetails from './Components/Details/PostDetails';
import NotFound from './Components/NotFound';
import { createContext } from 'react';

export const AllPost = createContext();

function App() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setposts(data))
  }, [])

  return (
    <Container maxWidth="lg">
      <BrowserRouter >
        <Header />

        <Switch>

          <AllPost.Provider value={[posts]}>
           
            <Route exact path="/">
              <Post />
            </Route>

            <Route path="/show-details/:postId">
              <PostDetails />
            </Route>

          </AllPost.Provider>

          <Route path="*">
            <NotFound ></NotFound>
          </Route>

        </Switch>

      </BrowserRouter>
    </Container>
  )

}

export default App;
