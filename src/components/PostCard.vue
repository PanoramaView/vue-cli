<template>
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>

      <!-- <p class="card-text" >
        {{ content }}   can't read html tags
      </p> -->

      <!-- it prints the content with html tags -->
      <p class="card-text" v-html="content">
      </p>

      <a href="#" @click= "onLinkClick" class="btn btn-primary">{{ linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: {
        type: String,
        required: true, //se non lo setto, mi da errore

    },
    content: String,
    linkText: {
      type: String,
      default: "Mostra Dettagli",
    },
    img: String,
  },
  data(){
      return {
          variable1: ""
      }
  },
  methods: {
      onLinkClick() {
          //this.title = "aaaaa" //al click mi cambia il title, funziona ma da worning in console.

          alert(this.title)

           this.variable1
      }
  }
};
</script>