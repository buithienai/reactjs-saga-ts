import * as types from '../types';

interface InitialState {
    firstName: string;
    lastName: string;
    email: string;
}

const initialState: InitialState = {
    firstName: '',
    lastName: '',
    email: '',
};

export default function userReducer(
    state = initialState,
    action: types.userTypes.UserActionTypes,
): types.userTypes.UserState {
    switch (action.type) {
        case types.userTypes.UPDATE_DATA_USER_SUCCESS:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}
