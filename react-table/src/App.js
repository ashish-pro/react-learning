import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react';
import Table from "./components/Table";



function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <Table/>
  </ChakraProvider>
  );
}

export default App;
