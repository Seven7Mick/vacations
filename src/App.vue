<template>
  <div id="app">
    <div class="wrapper">
      <PersonInfo class="person-info"/>

      <TabletForm class="tablet-form"/>

      <FilterPage />

      <GlobalCalendar />
    </div>
  </div>
</template>

<script>
import PersonInfo from "@/components/PersonInfo";
import FilterPage from "@/components/FilterPage";
import GlobalCalendar from "@/components/GlobalCalendar";
import TabletForm from "@/components/TabletForm"

export default {
  name: "App",
  components: {
    PersonInfo,
    TabletForm,
    FilterPage,
    GlobalCalendar,
  },
  data(){
    return{

    }
  },
};
</script>

<style>
*{
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

.wrapper{
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color:rgba(255, 255, 255, 0.24);
  border-radius: 20px;
}

.person-info{
  margin-bottom: 50px;
}

.tablet-form{
  margin-bottom: 50px;
}
</style>
