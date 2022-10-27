import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div> 
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div> 
        </div>
    )
    return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Microsoft buys Blizzard', 'Tech giant acquires game company in a landmark deal')}
        {newsArticle('Elon Musk spotted wearing Crocs', 'Millions of aspiring tech bros sell out shoe stores to emulate their esteemed idol')}
    </div>
  )
}

export default Widgets