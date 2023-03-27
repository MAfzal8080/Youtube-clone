import React, { useEffect, useState} from 'react'
import { Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'
import { FetchFromAPI } from '../utils/FetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height:{sx:'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0, md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' varient="body2" sx={{mt:1.5, color:'#fff'}}>
        &#169; Copyright 2023 Youtube clone
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height:'auto', flex: 2}}>
        <Typography varient='h4' fontWeight='bold'  mb={2} sx={{color: 'white'}}> {selectedCategory}
        <span style={{color: '#fc1503'}}> videos</span></Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
