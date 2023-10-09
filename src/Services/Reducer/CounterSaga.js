const initialstate = {
    count: 0
}

export const SagaCounter = (state = initialstate, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }

        default:
            return state
    }

}
