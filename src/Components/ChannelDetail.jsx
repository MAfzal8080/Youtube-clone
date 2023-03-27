import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import  Video  from './Video'
import  ChannelCard  from './ChannelCard'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  //eslint-disable-next-line
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data.items[0]))
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)', zIndex: 10, height: '300px'}} />
          <ChannelCard channelDetail={channelDetail} mt='-110px'></ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'}}} />
        <Video videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
