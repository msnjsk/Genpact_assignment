import {
    FETCH_USER_DETAILS,
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_FAILURE,
    UPDATE_DEPARTMENT,
    UPDATE_EMPLOYEE,
    RESET_DATA
} from '../actions';

const initialState = {
    usersData: [],
    isLoading: false,
    error: false,
    selectedDeparementItem: undefined,
    selectedEngineeringItem: undefined,
    dropDownOptions: {
        "hr": [
            1,
            2,
            3,
            4,
            5
        ],
        "engineering": [
            6,
            7,
            8,
            9,
            10
        ]
    }
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_DETAILS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_USER_DETAILS_SUCCESS:
            debugger
            return {
                ...state,
                usersData: action.payload,
                isLoading: false,
                error: null
            };
        case FETCH_USER_DETAILS_FAILURE:
            return {
                usersData: [],
                isLoading: false,
                error: action.payload
            };
        case UPDATE_DEPARTMENT:
            return {
                ...state,
                selectedDeparementItem: action.depId
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                selectedEngineeringItem: action.empId
            }
        case RESET_DATA:
            return {
                ...state,
                usersData: [],
                isLoading: false,
                error: false,
                selectedDeparementItem: undefined,
                selectedEngineeringItem: undefined
            }
        default:
            return state;
    }
}