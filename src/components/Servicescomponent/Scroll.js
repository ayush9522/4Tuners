import React from 'react';
import './scroll.css';

function Scroll() {
  return (
    <div id='scr' >
    <div className="scope">
      <span style={{'--i': 1}}>
        {/* <img src="/assets/pexels-motional-studio-1081685.jpg" alt="not found" /> */}
        <div>
          <h3>web designing</h3>
        </div>
        </span>
        
      <span style={{'--i': 2}}>
        <img src="/assets/istockphoto-1195696110-1024x1024-transformed.jpg" alt="not found" />
        </span>
      <span style={{'--i': 3}}>
        <img src="/assets/WhatsApp_Image_2023-10-27_at_3.49.34_PM-transformed.jpeg" alt="not found" />
        </span>
      <span style={{'--i': 4}}>
        <img src="https://i.postimg.cc/T1rDCpVT/beautiful-1274056-960-720.jpg" alt="not found" />
        </span>
      <span style={{'--i': 5}}>
        <img src="https://i.postimg.cc/SNf99YQr/woman-1807533-960-720.jpg" alt="not found" />
        </span>
      <span style={{'--i': 6}}>
        <img src="https://i.postimg.cc/2SHBcpZL/pexels-photo-4664520.jpg" alt="not found" />
        </span>
      <span style={{'--i': 7}}>
        <img src="https://i.postimg.cc/CxBzNcjw/Opera-Snapshot-2020-07-03-162022-www-freepik-com.png" alt="not found" />
        </span>
      <span style={{'--i': 8}}>
        <img src="https://i.postimg.cc/0QckxSpt/Opera-Snapshot-2020-07-03-161422-www-freepik-com.png" alt="not found" /></span>
    </div>
    </div>
  );
}

export default Scroll;
