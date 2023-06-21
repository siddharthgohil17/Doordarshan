import { legacy_createStore as createStore, applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer"; 
import { homeVideosReducer,selcetedVideoReducer,relatedToVideoReducer,searchVideoReducer} from "./reducers/videos.reducer";
import { ChannelDetailsReducer} from "./reducers/channel.reducer";
import {commentListReducer} from "./reducers/comment.reducer";





const rootReducer=combineReducers({
auth:authReducer,
homeVideos:homeVideosReducer,
selectedVideo:selcetedVideoReducer,
channelDetails:ChannelDetailsReducer,
commentList:commentListReducer,
relatedVideos:relatedToVideoReducer,
searchVideo:searchVideoReducer,
})



const store=createStore(
    rootReducer,
   {},
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;