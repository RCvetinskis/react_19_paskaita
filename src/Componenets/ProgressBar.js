import React, { useContext } from 'react'
import mainContext from '../context/MainContext'

const ProgressBar = () => {

    const {progressBar} = useContext(mainContext)
  return (
    <div className='progress-container'>
    <div style={{width:progressBar}} className='progress-bar'> <span>{progressBar}</span></div>
</div>
  )
}

export default ProgressBar