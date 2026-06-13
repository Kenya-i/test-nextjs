"use client"
import React, { useState } from 'react'
import { Box } from './Box';

const ClientBoundary = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible((prevIsVisible) => !prevIsVisible);
    }
  return (
    <Box>
        <h2>Client Boundary</h2>
        <button>{isVisible ? "非表示にする" : "表示にする"}</button>
    </Box>
  )
}

export default ClientBoundary