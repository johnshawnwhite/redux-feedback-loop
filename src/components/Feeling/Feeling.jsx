import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Feeling() {
    const history = useHistory();

    const dispatch = useDispatch();

    const[feeling, setFeeling] = useState('');

    // adding the const of history allows you to locate pages and go to them through the click event
// also adding the use state allows the dispatch to send the information to the reducer and hold on to it 
// for when it is called back

    const handleNextClick = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW_FEELING',
            payload: feeling,
        });
        // alert("You are going to the understanding section");
        history.push('/understanding');
    } ;
    
  return (
      <div>
          <h1>How are you feeling about the content?</h1>
          <h2>
              <form onSubmit={handleNextClick}>
              <input type="text"
              onChange={(event) =>setFeeling
              (event.target.value)} placeholder="1-5, 5 Being the Best" required/>
            {/* the form on submit event ties the element together from top to bottom, and the required statement makes it so you have to enter a value to move forward */}
              <button type="submit"> Next</button>
              </form>
          </h2>
      </div>
  )
}

export default Feeling;
