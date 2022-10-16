import React from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import FeedBackForm from '../components/FeedBackForm'
import FeedBackGrid from '../components/FeedBackGrid'

const RoutesMain = () => {
  return (
    <Routes>
        <Route index element={<FeedBackGrid/>}/>
        <Route path='/form' element={<FeedBackForm/>}/>
    </Routes>
  )
}

export default RoutesMain