import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from "axios";
// import ReactDOM from 'react-dom';



export default function () {
       const [searchTerm, setSearchTerm] = useState([]);
       const [result ,setResult] = useState([])
       const [audio, setAudio] = useState();
      


        async function handlesearch() {
          try {
              const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
              console.log(response.data)
             const  res = response.data
             console.log (res)
              
              setResult(res)
             

          }
          catch(e){
            console.log({e})

          }

        }
        const play = async() =>{
          // let aud = result.phonetics[0].audio
          
          try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            console.log(response.data[0].phonetics[1].audio)
           const  aud = response.data[0].phonetics[1].audio
           console.log (aud)
           
           const audi = new Audio (aud)
            // setAudio(aud);
            audi.play();
          }
          catch(e){
            console.log({e})
          }
        }
     
  return (
    <div className='dic-container '>
      <div className="container py-5">
      <div className="content ">
        <h1>DICTIONARY</h1>
       <input
        type="text"
        placeholder="welcome"
        className='w-50 me-2 p-2 border rounded'
        onChange={(event) => setSearchTerm(event.target.value)}

        value={searchTerm}
      />
      <button type="submit" className='border rounded'
       onClick={handlesearch}
       >Search</button>
       </div>
       <div className="second result-page hidden">
       
        {result.map((wordz) => (
            <div key={wordz.word}   className="d-flex">
            <div>
            <h3> {wordz.word}</h3>

      
            <div className="d-flex ">
                <h6 className='pt-1'>{wordz.phonetics[1].text}</h6>
                <p onClick={play} className='p-1 ms-2 border rounded alert alert-danger'>play</p>
            {/* <audio src={audio}>play</audio> */}
            </div>

            <div className="d-flex">
              <ButtonGroup>
              <Button variant="primary" className='p-3'>{wordz.meanings[0].partOfSpeech}</Button>
              <Button variant="primary" className='p-3'>{wordz.meanings[1].partOfSpeech}</Button>

              </ButtonGroup>
                    
            </div>
            <h3>DEFINITIONS</h3>
            <p><strong>noun</strong> :: {wordz.meanings[0].definitions[0].definition}</p>
            <p><strong>verb</strong> :: {wordz.meanings[1].definitions[0].definition}</p>
            
            <ol>
              {/* {wordz.meanings[0].defintions[0].defintion} */}
            </ol>

               
            </div>
            <div className='ms-5'>
                 <div className="d-flex mb-1 " style={{overflow:'hidden'}}>
                    <div className='mx-5'>
                        <h3>SYNONYMS</h3>
                        {/* <p>{wordz.meaning[0].synonyms}.</p> */}
                        <p>{wordz.meanings[0].synonyms}.</p>
                        <p>{wordz.meanings[1].synonyms}.</p>
                        
                    </div>
                    <div className='mx-5'>
                        <h3>ANTONYMS</h3>
                        <p>{wordz.meanings[0].antonyms}.</p>
                        <p>{wordz.meanings[1].antonyms}.</p>
                
                     </div>
                </div>
                {/* <h3 className='ms-5'>ORIGIN</h3>
                <p className='ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, non.</p> */}

            </div>
        </div>
        ))}
      
      
       </div>
      </div>
    </div>
  )
}
