import {ADD_ONE,MINUS_ONE} from './actions'
const initalState = {
    counter:0,
    perro:'Nova',//<-- este valor nada mas es de ejemplo para mantenerlo y ver como se borra cuando no se destructura el state
    user:{
        name:"dylan",
        lastName:"torres",
        age:29,
        token:"12546765421",
        creditCard:123456789,
        expDate:"12/34",
        nip:1123
    }
}
            //fun perro(prams=2){} estoy diciendo que si no mandan param(null || undefined) por defecto 
            //tendra el valor de 2
function reducer(state = initalState, action){
    //switch nos sirve cuando ya tienes el numero de accion asignadas
    //como si fuera un menu de un restaurante para elegir el producto
        //action = {type:"PERRO_NOVA",payload:{name:"Nova",lastName:"Torres Cruz"....}}
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case MINUS_ONE:
            return {
                ...state,
                counter: state.counter -1
            }
        default:
            return state;
    }
}

export default reducer