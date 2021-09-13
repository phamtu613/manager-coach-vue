<template>
  <div class="card" style="width: 300px">
    <img src="https://source.unsplash.com/random" style="width: 100%" />
    <div class="container">
      <h4>
        <b>{{ coach.lastName }} {{ coach.firstName }}</b>
      </h4>
      <p>{{ coach.hourlyRate }} $/hour</p>
      <div class="coach-area">
        <span
          :class="classArea(area)"
          v-for="(area, index) in coach.areas"
          :key="index"
          >{{ area }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    coach: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    classArea(area) {
      switch (area) {
        case "frontend":
          return { "bg-lightskyblue": true };
        case "backend":
          return { "bg-lightcoral": true };
        case "career":
          return { "bg-lightgreen": true };
        default:
          return {};
      }
    },
  },
};
</script>
<style scoped>
.bg-lightskyblue {
  background: lightskyblue;
}
.bg-lightcoral {
  background: lightcoral;
}
.bg-lightgreen {
  background: lightgreen;
}
.card {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 0 20px 20px;
  padding-bottom: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.coach-area {
  text-align: center;
}
.coach-area span {
  display: inline-block;
  padding: 10px 12px;
  margin-right: 7px;
  border-radius: 10px;
  color: #fff;
  text-transform: capitalize;
}
.coach-area span:last-child {
  margin-right: 0px;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>