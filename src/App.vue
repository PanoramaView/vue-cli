<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row row-cols-3 g-4">
        <div class="col" v-for="index in 10"
            :key="index">
          <PostCard
            :title="'Titolo ' + index"
            :content="'<i>Contenuto della card ' + index + '</i>'"
          >
          </PostCard>
        </div>
      </div>
    </div>

    <h1>{{ title }}</h1>

    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import PostCard from "./components/PostCard.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    PostCard,
    Navbar,
  },
  data() {
    return {
      title: "{{titolo}} Titolo String scritto in data().",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css"; // recuperiamo bootstrap da node_modules, dopo averlo installato dal comando 'vue ui'

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
