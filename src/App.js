import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './Components/Feed';
import ChannelDetail from './Components/ChannelDetail';
import VideoDetail from './Components/VideoDetail';
import SearchFeed from './Components/SearchFeed';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/channel/:id' exact element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App;
