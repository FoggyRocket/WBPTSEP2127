//import api  from './api'; //<--- es un export default api.api
import { api } from './api'; //solo estoy llamando al elemento exportado;


//api = axios(config)
                        //credentials = {email:passor:perrro:gato;}
                        //baseURL = https://perro.com/api/auth/login"
export const loginWs =  ( credentials )=> api.post("/auth/login", credentials );

export const signupWs = (credentials) => api.post("/auth/signup", credentials );


export const logoutWs = ()=>{
    //... code
    return api.post("/auth/logout")
}


export const getUserWs = ()=> api.get("/auth/getUser")


//get Animes cuando hay que mandar params
//ejemplos
export const getAnimes = (credentials, idAnime) => api.post(`/anime/getAnime/${idAnime}`,credentials)
export const getAnimesQ = (idAnime,perro) => api.get(`/anime/getAnime?name=${perro}&&id=${idAnime}`)