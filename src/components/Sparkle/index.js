import React from 'react';
import './index.scss'

const Sparkle = ({ style }) => {
  return (
    <div className="sparkle" style={style}>
     <svg 
     className='star' 
     width="271" 
     height="265" 
     viewBox="0 0 271 265" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg" 
     >
     <path d="M135.5 0L175.741 93.1495L271 132.5L175.741 171.85L135.5 265L95.2586 171.85L0 132.5L95.2586 93.1495L135.5 0Z" fill="#EFE15C"/>
     </svg>
 
    </div>
  );
};

export default Sparkle;