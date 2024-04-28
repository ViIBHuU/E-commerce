import logo from './logo.svg';
import './App.css';
import DataProvider from './context/contexProviser';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/header/home/home';
import DetailView from './components/detail/detailView';
import { Box } from '@mui/material';
import Cart from './components/cart/cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
       <Header/>
       <Box style={{ marginTop: 54}}>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<DetailView/>}/>
      <Route path= '/cart' element={<Cart />} />
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
