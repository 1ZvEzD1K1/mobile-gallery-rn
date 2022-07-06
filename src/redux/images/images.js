import { GET_IMAGES_ERROR, GET_IMAGES_PENDING, GET_IMAGES_SUCCESS } from "./action-images";

const initialState = {
    images: [],
    error: "",
    isLoading: false,
};

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES_PENDING:
            return { ...state, isLoading: action.payload };
        case GET_IMAGES_SUCCESS:
            return { ...state, images: [...action.payload] };
        case GET_IMAGES_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}