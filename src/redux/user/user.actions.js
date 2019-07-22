import { UserActionTypes } from './user.types';


export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CUURENT_USER,
    payload: user
});