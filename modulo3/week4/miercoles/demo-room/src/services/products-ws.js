import { api } from './api';
import { successStatus, internalServerError } from '../utils/clear-res';



//endopints 3
                    //http://localhost:5005/api/product
export const getProducts = () => api.get("/product").then(successStatus).catch(internalServerError)

                    //http://localhost:5005/api/product/detail/12345tgt65432qasdr5432wr5
export const getProductsById = (id) => api.get(`/product/detail/${id}`).then(successStatus).catch(internalServerError);
                 ////http://localhost:5005/api/product/perro
export const createProduct = (crendentials) => api.post("/product/create",crendentials).then(successStatus).catch(internalServerError);


