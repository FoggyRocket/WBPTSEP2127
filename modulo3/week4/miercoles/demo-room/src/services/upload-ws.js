import {api} from './api'
import {successStatus,internalServerError} from '../utils/clear-res'

export const uploadWs = (files) => api.post("/upload",files, {
                                                        headers: {
                                                            "Content-Type": "multipart/form-data",
                                                        }
                                        }) //agregar el header  multipart/form-data
                                        .then(successStatus)
                                        .catch(internalServerError);