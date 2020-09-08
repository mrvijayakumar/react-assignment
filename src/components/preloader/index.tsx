import React from 'react';
import {Labels} from '../../languages';
import  './style.css';
const LoadingIndicator = () => {    
    return <>
        <div className="loading">
            <div className="loading-content">
                {`${Labels('loading')}`}
            </div>
        </div>
    </>
};
  
export default LoadingIndicator;