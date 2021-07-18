import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Support() {

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

  return (
    <div>
    <h1>How supported do you feel?</h1>
    <h2>
        <input type="text" 
        onChange={(event) =>setSupport
        (event.target.value)} placeholder="1-5, 5 Being the Best"/>
        <button onClick={handleNextClick}> Next</button>
    </h2>
</div>
  )
}

export default Support;