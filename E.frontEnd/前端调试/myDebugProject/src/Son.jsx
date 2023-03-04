import React from 'react';

function Son({fatherText,setSonText,sonText}) {
  return (
    <div>
      <div style={{border:'1px solid black',width:'300px',height:'200px'}}>
        <input type="text" value={sonText} onChange={(e)=>{setSonText(e.target.value)}}/>
        <div>父组件输入内容:{fatherText}</div>
      </div>
    </div>
  );
}

export default Son;