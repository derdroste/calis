export default {
    namespaced: true,
    state: {
        isLoggedIn: false,
        information: {
            id: '',
            email: '',
            name: '',
            image: null
        },
    },
    mutations: {
        resetUser(state) {
            state.isLoggedIn = false;
            state.information = {
                id: '',
                email: '',
                name: '',
                image: ''
            }
        },
        isLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },
        setInformation(state, payload) {
            state.information = payload;
        },
        setImage(state, payload) {
            state.information.image = payload;
        },
        setemail(state, payload) {
            state.information.email = payload;
        },
        setname(state, payload) {
            state.information.name = payload;
        }
    },
    actions: { },
}