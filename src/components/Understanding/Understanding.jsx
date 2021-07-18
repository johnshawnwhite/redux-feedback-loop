import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory();
    
    const dispatch = useDispatch();

    const[understanding, setUnderstanding] = useState('');

    

    const handleNextClick = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW_UNDERSTANDING',
            payload: understanding,
        });
        // alert("You are going to the understanding section");
        history.push('/support');
    } ;

    const goBackClick = event => {
        history.push('/');
    }


  return (
      <div>
          <h1>How well are you understanding the material?</h1>
          <h2>
              <form onSubmit={handleNextClick}>
              <input type="text" 
              onChange={(event) =>setUnderstanding
              (event.target.value)} placeholder="1-5, 5 Being the Best" required/>
              <button type="submit"> Next</button>
              <button onClick={goBackClick}>Last Page</button>
              </form>
          </h2>
      </div>
  )
}

export default Understanding;