export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE';
export const UPDATE_DEPARTMENT = 'UPDATE_DEPARTMENT';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const RESET_DATA = 'RESET_DATA';

export const fetchUsersDetails = () => ({
    type: FETCH_USER_DETAILS
});

export const updatedDepartment = (depId) => ({
    type: UPDATE_DEPARTMENT,
    depId
});

export const updatedEmplID = (empId) => ({
    type: UPDATE_EMPLOYEE,
    empId
});

export const resetData = () => ({
    type: RESET_DATA
});

export const fetchUsersDetailsSuccess = (users) => ({
    type: FETCH_USER_DETAILS_SUCCESS,
    payload: users
});

export const fetchUsersDetailsFailure = (message) => ({
    type: FETCH_USER_DETAILS_FAILURE,
    payload: message
});