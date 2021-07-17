import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Comments() {

    const history = useHistory();
    
    function handleNextClick () {
        alert("You are going to the understanding section");
        history.push('/Review');
    } ;


  return (
      <div>
          <h2>
              <button onClick={handleNextClick}>Next</button>
          </h2>
      </div>
  )
}

export default Comments;