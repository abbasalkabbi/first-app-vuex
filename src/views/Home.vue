<template>
  <div class="home">
    <h1>Joke</h1>
    
    <div class="jokes">
      <h1>{{joke.type}}</h1>
       <h2>{{joke.setup}}</h2>
       <h3>{{joke.punchline}}</h3>
    </div>
    <span @click="next()">Next</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({}),
  mounted() {},
  computed: {
    joke(){return this.$store.getters.getcurrentjoke;},
   
  },
  methods:{
    next(){
       this.$store.dispatch('getjoke')
    }
  },
  components: {},
};
</script>
