import React, { useState, useEffect } from 'react';



export function Blah(props) {

  const [data, setData] = useState(null)
  

  let URL = `https://swapi.dev/api/people/${Math.ceil(Math.random() * 82)}`;
 

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(
    ()=>{
    console.log(data,'data variable changed line 18')
    
    
  
  },
    [data]
  )






  let getCharacter = async () => {
    fetch(URL)
      .then((response) => {
        console.log("using this URL here:", URL);
        
        return response.json();
      })
      .then((responseAsJson) => {
        // Do stuff with the JSONified response
        console.log("The response", responseAsJson);
        
        setData(responseAsJson);
        
        return responseAsJson;
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };




  return (

    <>
      <div className='StarWars d-flex flex-column align-items-center justify-content-center' style={{ width: '100vw', height: '100vh' }}>

        {
          data &&
          <span>
            <h1>{data.name}</h1>
            <br></br>
            <h5>Height: {data.height} cm</h5>
            <h5>Home World: {data.homeworld}</h5>
            <h5>Film Appearances</h5>
            <ol type="1">
              {data.films.map((film,index) => {
                
                return <li key={index}>{film}</li>
              })}


            </ol>
          </span> 
            
        }
        < button type="button" className="btn btn-warning btn-lg mt-5" style={{ backgroundColor: 'black', color: 'yellow' }
        }
          onClick={() => {
            getCharacter();
          }}> Randomize Character</button >
      </div>







    </>
  )
}