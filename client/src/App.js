import logo from './logo.svg';
import './App.css';
import DataProvider from './context/contexProviser';

import Header from './components/header/header';
import Home from './components/header/home/home';
import { Box } from '@mui/material';
function App() {
  return (
    <DataProvider>
      <Header/>
      <Box>
      <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
