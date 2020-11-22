export default {
    namespaced: true,
    state: {
        isLoggedIn: false,
        information: {
            id: '',
            email: '',
            name: ''
        }
    },
    mutations: {
        resetUser(state) {
            state.isLoggedIn = false;
            state.information = {
                id: '',
                email: '',
                name: ''
            }
        },
        isLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },
        setInformation(state, payload) {
            state.information = payload;
        }
    },
    actions: { },
}