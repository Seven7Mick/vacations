<template>
  <div id="app">
    <div class="wrapper">
      <PersonInfo class="person-info" />

      <TabletForm class="tablet-form" />

      <FilterPage class="filter" />

      <div v-if="stateTabs">
        <TabNav />
        <router-view />
      </div>
      
      <GlobalCalendar v-else />
      
    </div>
  </div>
</template>

<script>
import PersonInfo from "@/components/PersonInfo";
import FilterPage from "@/components/FilterPage";
import TabletForm from "@/components/TabletForm";
import TabNav from "@/components/TabNav";
import { mapGetters } from "vuex";
import GlobalCalendar from "@/components/GlobalCalendar";

export default {
  name: "App",
  components: {
    PersonInfo,
    TabletForm,
    FilterPage,
    TabNav,
    GlobalCalendar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allUsers"]),
    stateTabs(){
      return this.allUsers[0].level
    }
  },
};
</script>

<style>
@import "./style/null.css";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px 20px;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(172, 172, 172);
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.24);
  border-radius: 20px;
}

.person-info {
  margin-bottom: 50px;
}

.tablet-form {
  margin-bottom: 50px;
}

.filter {
  margin-bottom: 25px;
}
</style>
