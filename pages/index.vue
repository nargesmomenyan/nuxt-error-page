<template>
  <div>
    <div class="main">
      <button @click="showErrorPage(404)" class="btn btn-danger"  v-permission="['admin']">Error 404</button>
      <button @click="showErrorPage(550)" class="btn btn-danger" v-permission="['admin']">Error 550</button>
      <button
        @click="showErrorPage(0)"
        class="btn btn-danger"
        v-permission="['admin','supervisor']"
      >Other Errors</button>
    </div>
  </div>
</template>

<script>
import { permission } from "~/components/directives/PermissionDirective";

export default {
  methods: {
    showErrorPage(errorNumber) {
      return this.$nuxt.error({ statusCode: errorNumber });
    }
  },
  directives: {
    permission
  },
  methods: {
    setToken() {
      //this.$store.commit('setToken', {});
    }
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
}

.btn-danger {
  margin: 1rem 2rem;
  width: 150px;
  display:none;
}

@media screen and (max-width: 40rem) {
  .main {
    flex-direction: column;
  }
}
</style>
