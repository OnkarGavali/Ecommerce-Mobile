import { SET_CURRENT_USER } from "../actions/Auth.actions"
import { isEmpty } from "../../Validation/Validation";

export default function (state, action) {
    switch (action.type) {
        case SET_CURRENT_USER: 
        console.log("Action")
        console.log(action.payload)
        console.log("Action")
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload,
            userProfile: action.userProfile
        };
        
        default:
            return state;
    }
}