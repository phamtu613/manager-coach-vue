import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios");
import { API_URL } from "../constant";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coaches: [],
    filterOption: ["frontend", "backend", "career"],
  },
  getters: {
    getCoaches: (state) => state.coaches,
  },
  mutations: {
    setDataCoaches(state, coaches) {
      state.coaches = coaches;
    },
    setFilterOption(state, options) {
      state.filterOption = options;
    },
  },
  actions: {
    async getAllCoach({ commit }) {
      await axios
        .get(`${API_URL}/coaches.json`)
        .then((response) => {
          let allCoach = [];
          if (response.data) {
            Object.keys(response.data).forEach((key) => {
              allCoach.push({ id: key, ...response.data[key] });
            });
          }
          commit("setDataCoaches", allCoach);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async registerCoach({ dispatch }, data) {
      const coachData = {
        areas: data.areas,
        description: data.description,
        firstName: data.firstName,
        lastName: data.lastName,
        hourlyRate: data.hourlyRate,
      };
      await axios
        .post(`${API_URL}/coaches.json`, coachData)
        .catch((error) => console.log(error));
      dispatch("getAllCoach");
      router.push({ name: "Coaches" });
    },
  },
  modules: {},
});
