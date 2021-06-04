import React, { useReducer } from 'react'


// Initial state of global object
const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
      value: '',
      error: null
  },
  email: {
      value: '',
      error: null
  }
};

// Reducer function for global state object
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}


const Form = () => {
    
  
  // useReducer Hook
  // Destructuting useReducer using "state" and "dispatch" variables
  const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        
      let currentError = null;
      let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      // Current field is firstName or lastName
      if(e.target.name === 'firstName' || e.target.name === 'lastName'){
        if(e.target.value.length === 0){
          currentError = "Field cannot be empty"
        }
        else{
          currentError = null
        }           
      }
      // Current field is email
      else{
        console.log(e.target.name.match(mailformat))
        if(!e.target.value.match(mailformat)){
          currentError = "Invalid email"
        }
        else{
          currentError = null
        } 
      }
      
      dispatch({
          type: e.target.name,
          payload: {
            value: e.target.value, 
            error: currentError
          }
      });
    }

    
  return (
      
      <div className="text-left my-5 p-3 border border-dark">
        <h2>Register Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label> 
          <input 
            type="text" 
            className="form-control" 
            onChange={handleChange} 
            name="firstName" 
            value={state.firstName.value} 
          />
          {state.firstName.error !== null && (
            <p className="text-danger small"> { state.firstName.error }</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label> 
          <input 
            type="text" 
            className="form-control" 
            onChange={handleChange} 
            name="lastName" 
            value={state.lastName.value} 
          />
          {state.lastName.error !== null && (
            <p className="text-danger small"> { state.lastName.error }</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label> 
          <input 
            type="text" 
            className="form-control" 
            onChange={handleChange} 
            name="email" 
            value={state.email.value} 
          />
          {state.email.error !== null && (
            <p className="text-danger small"> { state.email.error }</p>
          )}
        </div>
    </div>
  )
}

export default Form