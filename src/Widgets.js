import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';

function Widgets() {
  
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'></div> 
            <div className='widgets__articleRight'></div> 
        </div>
    )
    return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
    </div>
  )
}

export default Widgets