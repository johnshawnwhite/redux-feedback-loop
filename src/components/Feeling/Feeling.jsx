import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Feeling() {

    const dispatch = useDispatch();

    const[feeling, setFeeling] = useState('');

    const history = useHistory();

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
              <button onClick={handleNextClick}>Next</button>
          </h2>
      </div>
  )
}

export default Feeling;
