const initialState = {
    phones: [],
    sortDirection: "UNORDERED"
}

const ACTION_TYPES = {
    FETCH_PHONES_FULFILLED: "FETCH_PHONES_FULFILLED",
    SORT_PHONES_ASCENDING: 'SORT_PHONES_ASCENDING',
    SORT_PHONES_DESCENDING: 'SORT_PHONES_DESCENDING',
}

function comparStrings(str1, str2) {
    if (str1 === str2) {
        return 0
    }
    if (str1 < str2) {
        return -1
    }
    if (str1 > str2) {
        return 1
    }
}

export function phonesReducer(state = initialState, action) {
    switch(action.type){
        case ACTION_TYPES.FETCH_PHONES_FULFILLED: {
            return {
                ...state,
                phones: action.phones.slice(0, 100)
            }
        }
        case ACTION_TYPES.SORT_PHONES_ASCENDING: {
            return {
                ...state,
                phones: [...state.phones].sort((a, b) => comparStrings(a.title, b.title)),
                sortDirection: "ASC"
            }
        }
        case ACTION_TYPES.SORT_PHONES_DESCENDING: {
            return {
                ...state,
                phones: [...state.phones].sort((a, b) => comparStrings(b.title, a.title)),
                sortDirection: "DESC"
            }
        }
        default: {
            return state
        }
    }
}


export function fetchPhonesFulfilled(phones) {
    return {
        type: ACTION_TYPES.FETCH_PHONES_FULFILLED,
        phones
    }
}

export function sortPhonesAscending() {
    return {
        type: ACTION_TYPES.SORT_PHONES_ASCENDING
    }
}

export function sortPhonesDescending() {
    return {
        type: ACTION_TYPES.SORT_PHONES_DESCENDING
    }
}
