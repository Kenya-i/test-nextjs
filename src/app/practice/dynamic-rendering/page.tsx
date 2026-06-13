import { Box } from '@/components/Box'
import DynamicServerComponent from '@/components/DynamicServerComponent'
import StaticClientComponent from '@/components/StaticClientComponent'
import React from 'react'

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>Dynamic Rendering Page HOTRELOAD-OK-12345</h1>
      <DynamicServerComponent text="DynamicServerComponentへの"/>
      <StaticClientComponent text="StaticClientComponentへのprops"/>
    </Box>
  )
}

export default DynamicRenderingPage
