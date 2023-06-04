import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import detailsReducer from "./detailsReducers";



const rootReducer = combineReducers({
    posts: postsReducer,
    detailsCard: detailsReducer
})

export default rootReducer;

