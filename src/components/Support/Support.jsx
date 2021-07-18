import react from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Support() {

    const history = useHistory();
    
    function handleNextClick () {
        alert("You are going to the understanding section");
        history.push('/Comments');
    } ;


  return (
      <div>
          <h1>How well supported do you feel?</h1>
          <h2>
              <button onClick={handleNextClick}>Next</button>
          </h2>
      </div>
  )
}

export default Support;