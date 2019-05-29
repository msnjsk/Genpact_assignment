import { combineEpics } from 'redux-observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    FETCH_USER_DETAILS,
    fetchUsersDetailsSuccess
} from "../actions";

const url = 'https://reqres.in/api/users/';


function fetchUsersDetailsEpic(action$, store) {
    return action$.ofType(FETCH_USER_DETAILS).switchMap(() => {
        return ajax.getJSON(url + store.value.selectedEngineeringItem.key).map(data => data.data);
    }).map(users => fetchUsersDetailsSuccess(users))
}



export const rootEpic = combineEpics(fetchUsersDetailsEpic);