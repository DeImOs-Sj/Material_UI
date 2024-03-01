import React from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box,Stack,Container } from '@mui/material'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" justifyContent="space-between" gap={2}>
      <Sidebar />
      <Feed />
        <Rightbar />
        </Stack>
    </Box>
  )
}

export default App