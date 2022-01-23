import {createStore} from "vuex";

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Swann'
            },
            token: null
        }
    },
    getters: {},
    actions: {},
    modules: {}
})
export default store;
