import { Box } from '@/components/Box'
import StaticClientComponent from '@/components/StaticClientComponent'
import StaticServerComponent from '@/components/StaticServerComponent'
import React from 'react'

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>StaticRenderingPage</h1>
      <StaticServerComponent text="StaticServerComponentへのprops"/>
      <StaticClientComponent text="StaticClientComponentへのprops"/>
    </Box>
  )
}

export default StaticRenderingPage
