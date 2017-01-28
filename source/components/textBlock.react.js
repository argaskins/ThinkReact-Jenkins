import React from 'react';
import Row from 'react-bootstrap/lib/Row';

const style ={

  color: 'green'
}

const blueStyle ={

  color:'blue',
  fontSize:".8em",
  fontStyle:"italic"
}

const textBlock = (date, text, user) => (

  <div>
    <h3>{user}</h3>
    <div style={style}>{text}</div>
    <span style={blueStyle}>{date}</span>
  </div>
);

export default textBlock;
