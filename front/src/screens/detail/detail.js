import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { portfolioId } = useParams();
  return(
    <h1>This is {portfolioId} page</h1>
  )
}

export default Detail