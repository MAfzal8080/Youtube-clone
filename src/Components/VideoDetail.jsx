import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Stack, Box } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import Video from './Video'
import { FetchFromAPI } from '../utils/FetchFromAPI'

const VideoDetail = () => {
   const [VideoDetail, setVideoDetail] = useState(null)
   const [videos, setVideos] = useState(null)
   const {id} = useParams()

   useEffect(()=>{
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]))
    FetchFromAPI(`videos?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items))
   }, [id])
   
   if(!VideoDetail?.snippet) return 'Loading...'
   
   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = VideoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#fff' varient='h5' fontWeight= 'bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-around' sx={{color: '#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography varient={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'grey', ml: '5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography varient='body1' sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varient='body1' sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, sx: 5}} justifyContent='center' alignItems='center'>
          <Video videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
