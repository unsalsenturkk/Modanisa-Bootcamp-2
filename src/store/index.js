import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
    favoriteVideos: [],
    searchText: ""
}

export const getters = {
    getFavoriteVideos: state => {
        return state.favoriteVideos;
    },
    isFavorite: (state) => (videoId) => {
        return state.favoriteVideos.some(video => video.id === videoId)
    },
    getSearchText: state => {
        return state.searchText;
    }
}

export const mutations = {
    addToFavorites(state, video) {
        state.favoriteVideos.push(video)
    },
    removeFromFavoritesById(state, videoId) {

        state.favoriteVideos = state.favoriteVideos.filter(product => product.id !== videoId)
    },
    changedSearch(state, newValue) {
        state.searchText = newValue;
    }
}

export const actions = {
    favoriteStatusChanged({commit, getters}, video) {
        const favorite = getters.isFavorite(video.id);
        favorite ? commit('removeFromFavoritesById', video.id) : commit('addToFavorites', video)
    }
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {}
});