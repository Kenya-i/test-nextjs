import React from 'react'
import { Box } from './Box';

type PropsType = {
    text: string;
}

const StaticServerComponent = async ({text}: PropsType) => {
  return (
    <Box>
        <h2>StaticServerComponent</h2>
        <p>{text}</p>
    </Box>
  )
}

export default StaticServerComponent;