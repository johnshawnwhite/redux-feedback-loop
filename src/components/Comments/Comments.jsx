import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Comments() {

    const history = useHistory();
    
    const dispatch = useDispatch();

    const[comment, setComment] = useState('');


    const handleNextClick = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW_COMMENT',
            payload: comment,
        });
        // alert("You are going to the understanding section");
        history.push('/review');
    } ;

  return (
      <div>
          <h1>Would you like to make any comments?</h1>
          <h2>
              <input type="text" 
              onChange={(event) =>setComment
              (event.target.value)} placeholder="1-5, 5 Being the Best"/>
              <button onClick={handleNextClick}> Next</button>
          </h2>
      </div>
  )
}

export default Comments;