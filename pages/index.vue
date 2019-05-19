<template>

<div class="main">
  <button @click="showErrorPage(404)" class="btn btn-danger">Error 404</button>
  <button @click="showErrorPage(550)" class="btn btn-danger">Error 550</button>
  <button @click="showErrorPage(0)" class="btn btn-danger">Other Errors </button>
</div>

</template>

<script>

export default {
  methods:{
    showErrorPage(errorNumber){
       return this.$nuxt.error({ statusCode: errorNumber})
    }
  }
}
</script>

<style scoped>
.main{
  height: 100%;
  width:100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-top: 40vh;
}

.btn-danger{
  margin: 1rem 2rem;
  width: 150px;
}

@media screen and (max-width: 40rem) {
  .main{
    flex-direction: column;
  }
}

</style>
