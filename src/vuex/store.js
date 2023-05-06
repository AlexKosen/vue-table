import { createStore } from 'vuex'
import axios from 'axios'


export const store = createStore({
    state: {
        users: [],
    },
    actions: {
        GET_USER_FROM_API({commit}) {
            return axios.get('http://localhost:3000/users') 
            .then((response) => {
                commit('SET_USERS_TO_COMMIT', response.data)
            })
        }
    },
    mutations: {
        SET_USERS_TO_COMMIT(state, users) {
            state.users = users
        }
    },
    getters: {
        USERS(state) {
            return state.users
        }
    }
})
