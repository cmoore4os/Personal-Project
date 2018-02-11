import React, { Component } from 'react';
import Styletron from 'styletron';
import { StyletronProvider } from 'styletron-react';
import { Container, Text } from '../styledUI/StyledUI';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLibrary from '../constants/FAFontLibrary';

const styletron = new Styletron();

class App extends Component {
  render() {
    return (
      <StyletronProvider styletron={styletron}>
        <Container>
          <Text>
            <FontAwesomeIcon icon="user" />
          </Text>
        </Container>
      </StyletronProvider>
    );
  }
}

export default App;
