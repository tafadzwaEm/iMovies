import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Error!</h1>
        <h3>{error.message}</h3>
        Back to <Link style={{color:'lightblue'}} to='/'>Homepage</Link>
    </div>
  )
}

export default ErrorPage
