import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Comments() {
// adding the const of history allows you to locate pages and go to them through the click event
// also adding the use state allows the dispatch to send the information to the reducer and hold on to it 
// for when it is called back
    const history = useHistory();
    
    const dispatch = useDispatch();

    const[comments, setComment] = useState('');


    const handleNextClick = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW_COMMENT',
            payload: comments,
        });
        // alert("You are going to the understanding section");
        history.push('/review');
    } ;
    const goBackClick = event => {
        history.push('/support');
    }
// the buttons allow for navigation forward and backward, this is the only of the 4 main pages that allows
// you to move forward without entering a value into the input field
  return (
      <div>
          <h1>Would you like to make any comments?</h1>
          <h2>
              <input type="text" 
              onChange={(event) =>setComment
              (event.target.value)} placeholder="Share with me"/>
              <button onClick={handleNextClick}> Next</button>
              <button onClick={goBackClick}>Last Page</button>
          </h2>
      </div>
  )
}

export default Comments;