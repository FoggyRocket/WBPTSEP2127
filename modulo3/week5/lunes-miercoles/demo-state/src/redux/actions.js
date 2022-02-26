//action.js constants
export const ADD_ONE = "ADD_ONE";
export const MINUS_ONE = "MINUS_ONE";
//
  //aqui va mas cosas
//
//action function
export const increase = () => {
    return ({ type: ADD_ONE})
}
// export const increase = () => ({type:ADD_ONE});

export const decrease = ()=>{
    return ({ type: MINUS_ONE })
}

// export const decrease = () => ({ type: MINUS_ONE });


//division

//multiplicacion