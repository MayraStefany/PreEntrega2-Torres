import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import MainLayout from "./layout/MainLayout";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
      <ItemListContainer greeting="Bienvenidos a Popcorn & Pics!" />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;