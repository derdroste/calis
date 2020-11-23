export default {
    namespaced: true,
    state: {
        uncroppedImage: '',
        minAspectRatio: 0,
        commit: ''
    },
    mutations: {
        setUncroppedImage(state, payload) {
            state.uncroppedImage = payload.img;
            state.minAspectRatio = payload.minAspectRatio;
            state.commit = payload.commit;
        }
    },
    actions: { },
}