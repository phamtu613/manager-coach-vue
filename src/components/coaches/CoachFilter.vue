<template>
  <div class="wp-filter">
    <h2>Find Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        id="frontend"
        value="frontend"
        checked
        v-model="areas"
        @change="onChange"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="backend"
        value="backend"
        checked
        v-model="areas"
        @change="onChange"
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="career"
        value="career"
        checked
        v-model="areas"
        @change="onChange"
      />
      <label for="career">Career</label>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      areas: ["frontend", "backend", "career"],
    };
  },
  methods: {
    onChange() {
      this.$store.commit("setFilterOption", this.areas);
    },
  },
};
</script>
<style scoped>
.wp-filter {
  width: 990px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
h2 {
  margin-top: 0;
}
.filter-option {
  margin-right: 20px;
}
</style>