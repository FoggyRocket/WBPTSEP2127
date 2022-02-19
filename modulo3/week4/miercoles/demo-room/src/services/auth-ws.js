//import api  from './api'; //<--- es un export default api.api
import { api } from './api'; //solo estoy llamando al elemento exportado;
//imparmos el clear res para mandar una mejor respuesta
import {successStatus,internalServerError} from '../utils/clear-res'

//api = axios(config)
                        //credentials = {email:passor:perrro:gato;}
                        //baseURL = https://perro.com/api/auth/login"
export const loginWs =  ( credentials )=> api.post("/auth/login", credentials )
                                            .then(successStatus)
                                            .catch(internalServerError);

export const signupWs = (credentials) => api.post("/auth/signup", credentials )
                                            .then(successStatus)
                                            .catch(internalServerError);


export const logoutWs = ()=>{
    //... code
    return api.post("/auth/logout")
                .then(successStatus)
                .catch(internalServerError);
}


export const getUserWs = ()=> api.get("/auth/getUser")
                                .then(successStatus)
                                .catch(internalServerError);


//get Animes cuando hay que mandar params
//ejemplos
export const getAnimes = (credentials, idAnime) => api.post(`/anime/getAnime/${idAnime}`,credentials)
export const getAnimesQ = (idAnime,perro) => api.get(`/anime/getAnime?name=${perro}&&id=${idAnime}`)