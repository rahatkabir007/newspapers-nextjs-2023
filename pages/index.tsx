import React from 'react'
import AllSeos from '../components/shared/AllSeos'
import HomePage from '../components/pages/HomePage/HomePage'


interface Props {
}

const index: React.FC<Props> = (props) => {



  return (
    <>
      <AllSeos />
      <HomePage />
    </>
  )
}

export default index