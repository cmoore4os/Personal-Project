import React from 'react';
import { Container, Text } from '../styledUI/StyledUI';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import NavBar from './Navigation';
export default function() {
  return (
    <Container>
      <Text fontSize="18px">2 People Prompt</Text>
      <NavBar />
    </Container>
  );
}
