import React, { useState } from "react";
import axios from "axios";
import './App.css'
import Dictionary from "./Dictionary";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   try{
  //     const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
  //     if (response === 200){
  //       const searchword = response.data
  //       return searchword
  //       // Set the search page and result page to flex and the result page visible
  //       document.querySelector(".search-page").classList.add("flex");
  //       document.querySelector(".result-page").classList.add("flex");
  //       document.querySelector(".result-page").classList.remove("hidden");
  //     }
  //     else{
  //        throw new Error (response.statusText)
  //       // console.log(z)
  //     }

      
  //   }
  //   catch (error) {
  //     if (error.response && error.response.status === 404) {
  //       console.log("The resource was not found.");
  //     } else {
  //       console.log(error);
  //     }
  // }


  // const word = await handleSubmit();
  // console.log(word);
     

    
    
  // };
 

  return (
    <>
    <Dictionary/>
     {/* <div className="search-page">
      <input
        type="text"
        placeholder="Search for users"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </div>
    <div className="result-page hidden">
      <ul>
          {searchTerm}
      </ul>
    </div> */}

      
    </>
  )
}

export default App
