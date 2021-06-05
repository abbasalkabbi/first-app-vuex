<template>
  <div class="jokes-watch">
    <div class="jokes-list" v-for='joke in alljoke' :key="joke">
      <h1>{{joke.type}}</h1>
       <h2>{{joke.setup}}</h2>
       <h2>{{joke.punchline}}</h2>
    </div>
    
  </div>
</template>
<script>


export default {
 computed:{
    alljoke(){return this.$store.getters.getalljoke;}
 }
}
</script>
