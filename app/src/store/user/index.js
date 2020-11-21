export default {
    namespaced: true,
    state: {
        email: ''
    },
    mutations: {
        setEmail(state, payload) {
            state.email = payload;
        }
    },
    actions: { },
}