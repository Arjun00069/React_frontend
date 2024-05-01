import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";

import {userReducer,profileReducer, allhospitalsReducer, hospitalReducer, hospitalDetailsReducer} from "./Reducer/userReducer.js"
import {adminUserReducer, hospReducer} from './Reducer/hospReducer.js'
let initialstate={};
const middleware=[thunk];



const reducer = combineReducers({
    user:userReducer,
    profile:profileReducer,
    hospitals:allhospitalsReducer,
    hospitalDetails:hospitalDetailsReducer,
    hospital:hospReducer,
    adminuser:adminUserReducer
})


const store= createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const server= `https://wbd-full-backend.onrender.com/blood/v1`
export const server1= `https://wbd-full-backend.onrender.com/blood/v1`


export default store;