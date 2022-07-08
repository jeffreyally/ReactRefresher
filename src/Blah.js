import React, { useState } from 'react';



export function Blah(props) {

  const [characterInfo, setCharacterInfo] = useState(
    {
      name: '',
      height: '',
      homeWorld: '',
      films: [],
      loadedCharacter: false
    })

  let getCharacter = () => {
    setCharacterInfo({ ...characterInfo, loadedCharacter:true, name: 'Luke', height: 172, homeWorld: 'Tatooine', films: [1, 2, 'Last Jedi'] })
  }



  return (

    <>
      <div className='StarWars d-flex flex-column align-items-center justify-content-center' style={{ width: '100vw', height: '100vh' }}>

        {
          characterInfo.loadedCharacter &&
          <span>
            <h1>{characterInfo.name}</h1>
            <br></br>
            <h5>{characterInfo.height} cm</h5>
            <h5>{characterInfo.homeWorld}</h5>
            <ul>
              {characterInfo.films.map((film) => {
                console.log(film)
                return <li>{film}</li>
              })}


            </ul>
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