import { Box } from '@/components/Box'
import DelayServerDataFetch from '@/components/DelayServerDataFetch'
import React, { Suspense } from 'react'

const StreamingSsrPage = () => {
  return (
    <Box>
        <h1>Streaming SSR Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <DelayServerDataFetch />
        </Suspense>
    </Box>
  )
}

export default StreamingSsrPage;