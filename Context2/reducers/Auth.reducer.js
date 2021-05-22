import { SET_CURRENT_USER } from "../actions/Auth.actions"
import { isEmpty } from "../../Validation/Validation";

export default function (state, action) {
    switch (action.type) {
        case SET_CURRENT_USER: 
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload,
            userProfile: action.userProfile
        };
        case 'RETRIEVE_TOKEN': 
        return {
          ...State,
          userToken: action.token,
          isLoading: false,
        };
        default:
            return state;
    }
}