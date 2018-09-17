const initialState = {
    phones: [],
    sortDirection: "UNORDERED"
}

const ACTION_TYPES = {
    FETCH_PHONES_FULFILLED: "FETCH_PHONES_FULFILLED",
    SORT_PHONES_ASCENDING: 'SORT_PHONES_ASCENDING',
    SORT_PHONES_DESCENDING: 'SORT_PHONES_DESCENDING',
}

function comparePrices(price1, price2) {
    if (price1 === price2) {
        return 0
    }
    if (price1 < price2) {
        return -1
    }
    if (price1 > price2) {
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
                phones: [...state.phones].sort((a, b) => comparePrices(a.price, b.price)),
                sortDirection: "ASC"
            }
        }
        case ACTION_TYPES.SORT_PHONES_DESCENDING: {
            return {
                ...state,
                phones: [...state.phones].sort((a, b) => comparePrices(b.price, a.price)),
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
