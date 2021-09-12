<template>
  <div class="wrapper-form">
    <h3>Register as a coach now</h3>

    <div class="container">
      <coach-create />
    </div>
  </div>
</template>
<script>
import CoachCreate from "../../components/coaches/CoachCreate.vue";
export default {
  data() {
    return {};
  },
  components: { CoachCreate },
  methods: {},
};
</script>

<style scoped>
.wrapper-form {
  width: 1025px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>