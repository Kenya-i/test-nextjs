"use client"
import React, { ReactNode, useState } from 'react'
import { Box } from './Box';

type PropsType = {
    children: ReactNode;
}

const ClientBoundary = ({children}: PropsType) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible((prevIsVisible) => !prevIsVisible);
    }
  return (
    <Box>
        <h2>Client Boundary</h2>
        <button onClick={toggleVisibility}>{isVisible ? "非表示にする" : "表示にする"}</button>
        {isVisible &&  children}
    </Box>
  )
}

export default ClientBoundary