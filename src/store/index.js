import { createStore } from "vuex";
const url='https://official-joke-api.appspot.com/random_joke';
export default createStore({
  state: {
    currentjoke: "This is firs joke",
    alljokes: [],
  },
  
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentjoke = payload;
      state.alljokes.push(payload);
    },  
    
  },
  actions: {
    
    async  getjoke(state){
      var jokeurl=await fetch(url)
      var joketext = await jokeurl.json()
      console.log(joketext)
      state.commit("setCurrentJoke",joketext);
      
    }
  },
  modules: {},
  getters: {
    getcurrentjoke: (state) => state.currentjoke,
    getalljoke:state=>state.alljokes,
  },
});
