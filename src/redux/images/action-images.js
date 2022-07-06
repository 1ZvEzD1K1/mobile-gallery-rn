import axios from "axios";
import {url} from "../../consts"

export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS'
export const GET_IMAGES_ERROR = 'GET_IMAGES_ERROR'
export const GET_IMAGES_PENDING = 'GET_IMAGES_PENDING'

export const ImagesActionCreators = {
    getImagesSuccess: (payload) => ({
        type: GET_IMAGES_SUCCESS,
        payload
    }),
    getImagesError: (payload) => ({
        type: GET_IMAGES_ERROR,
        payload
    }),
    getImagesPending: (payload) => ({
        type: GET_IMAGES_PENDING,
        payload
    }),
    getImages: () => async (dispatch) => {
        try {
            dispatch(ImagesActionCreators.getImagesPending(true));
            const response = await axios.get(url)
            //console.log("res", response.data)
            dispatch(ImagesActionCreators.getImagesSuccess(response.data));
            dispatch(ImagesActionCreators.getImagesPending(false));
        } catch (error) {
            dispatch(ImagesActionCreators.getImagesError(error.response?.data.message));
        }
    }
}