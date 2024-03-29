import React from 'react'

function Keyss() {
    const IPL=["hello","hii","keys","key1"];
    const result=IPL.map((helo,index)=><h1 key={index}>{helo} index is {index}</h1>)
  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default Keyss
