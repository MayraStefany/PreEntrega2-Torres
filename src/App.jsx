import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Popcorn & Pics!" />
    </ChakraProvider>
  );
}

export default App;