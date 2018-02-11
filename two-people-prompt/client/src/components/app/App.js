import React, { Component } from 'react';
// routing
import { Route } from 'react-router-dom';
import {
  About,
  Contact,
  Home,
  Profile,
  SignIn,
  SignUp,
  StoryWriter
} from '../routes';

// styling
import Styletron from 'styletron';
import { StyletronProvider } from 'styletron-react';
import { Container } from '../styledUI/StyledUI';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import FaLibrary from '../constants/FAFontLibrary';

// other components
import Header from '../pageDivs/Header';

const styletron = new Styletron();
FaLibrary();
class App extends Component {
  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <Container>
          <Header />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/story-writer" component={StoryWriter} />
        </Container>
      </StyletronProvider>
    );
  }
}

export default App;
