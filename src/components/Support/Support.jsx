import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Support() {
 // adding the const of history allows you to locate pages and go to them through the click event
// also adding the use state allows the dispatch to send the information to the reducer and hold on to it 
// for when it is called back
    const history = useHistory();

    const dispatch = useDispatch();

    const[support, setSupport] = useState('');


    const handleNextClick = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW_SUPPORT',
            payload: support,
        });
        // alert("You are going to the understanding section");
        history.push('/comments');
    } ;
    const goBackClick = event => {
      history.push('/understanding');
  }

  return (
    <div>
    <h1>How supported do you feel?</h1>
    <h2>
      <form onSubmit={handleNextClick}>
        <input type="text" 
        onChange={(event) =>setSupport
        (event.target.value)} placeholder="1-5, 5 Being the Best" required/>
        {/* /* the form on submit event ties the element together from top to bottom, and the required statement makes it so you have to enter a value to move forward */}
        <button type="submit"> Next</button>
        <button onClick={goBackClick}>Last Page</button>
        </form>
    </h2>
</div>
  )
}

export default Support;