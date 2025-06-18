
import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError();
  console.log(error)
  return (
    <div style={{padding: '20px', backgroundColor: 'red', color: 'white', display: 'flex', justifySelf: 'center' }}>Something went Wrong .. !
       <br /> {error.status}
      <br /> {error.data}
    </div>
  )
}
