import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {
 // adding the const of history allows you to locate pages and go to them through the click event
// also adding the use state allows the dispatch to send the information to the reducer and hold on to it 
// for when it is called back
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
              {/* /* the form on submit event ties the element together from top to bottom, and the required statement makes it so you have to enter a value to move forward */} */}
              <button type="submit"> Next</button>
              <button onClick={goBackClick}>Last Page</button>
              </form>
          </h2>
      </div>
  )
}

export default Understanding;