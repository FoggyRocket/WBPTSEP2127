import * as CONSTS from "./consts";

export function getUserToken() {
  return localStorage.getItem(CONSTS.ACCESS_TOKEN);
}

export function setUserToken(value) {
   
      //.setItem("perro","{"perro":"nova"}")  JSON.stringify([1,2,3,4,5,6,7,8])
  return localStorage.setItem(CONSTS.ACCESS_TOKEN, value);
}

export function removeUserToken() {
                    //.removeItem("perro")
  return localStorage.removeItem(CONSTS.ACCESS_TOKEN);
}
