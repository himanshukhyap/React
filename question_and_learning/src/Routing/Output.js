import React from 'react'
import { Outlet } from 'react-router-dom'

function Output() {
  return (
    <>
    <h1>I am Output screen</h1>
    <Outlet/>
    </>
  )
}

export default Output