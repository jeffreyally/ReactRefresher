import React, { useState } from 'react';



export function Blah(props){

  const [clicks,setClicks] = useState({clicked:0,samplekey:'tacos'})
  


    return(
      <>
      <button onClick={() => {
        
        setClicks({...clicks,clicked:clicks['clicked']+1})
        console.log(clicks)
      }
        }>I have imported and am using a prop called {props.name}</button>
      <span>{clicks.samplekey}I am refreshing my knowledge on React. The button above has been clicked this many times so far: {clicks.clicked}</span>
      </>
    )
  }