<template>
  <div class="container-wrapper">
    <coach-filter />
    <div class="list-coaches" v-if="filterCoaches.length > 0">
      <coach-item
        v-for="(coach, index) of filterCoaches"
        :key="index"
        :coach="coach"
      />
    </div>
    <div v-else class="no-data">Không có dữ liệu</div>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
export default {
  data() {
    return {};
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  created() {
    this.$store.dispatch("getAllCoach");
  },
  computed: {
    filterCoaches() {
      return this.$store.state.coaches.filter((item) => {
        if (Array.isArray(item.areas)) {
          for (let i = 0; i < item.areas.length; i++) {
            if (this.$store.state.filterOption.indexOf(item.areas[i]) != -1) {
              return true;
            }
          }
        }
        if (typeof item.areas === "string") {
          return this.$store.state.filterOption.indexOf(item.areas) != -1;
        }
        return false;
      });
    },
  },
};
</script>
<style scoped>
.list-coaches {
  display: flex;
  flex-wrap: wrap;
  width: 1025px;
  margin: 0 auto;
}
.container-wrapper {
  width: 1170px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 80px;
}
.no-data {
  width: 990px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
  color: #6b6161;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}
</style>