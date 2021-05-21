<template>
  <ul class="tabs">
    <router-link class="tabs__link" to="/">Календарь</router-link>
    <router-link class="tabs__link" to="/vacations">Отпуска работников</router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  height: 50px;
  display: flex;
  justify-items: flex-start;
  border-bottom: 1px solid rgb(104, 104, 104);
}

.tabs__link {
  height: 80%;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: rgba(129, 129, 139, 0.493);
  flex: 0 1 200px;
  align-self: flex-end;
  border-radius: 10px 10px 0 0;
  color: black;
  font-size: 16px;
  line-height: 250%;
}
.tabs__link:hover{
  box-shadow: 2px 0 4px rgba(63, 63, 63, 0.507);
}

.router-link-exact-active{
  background-color: rgba(92, 92, 92, 0.925);
  color: rgba(255, 255, 255, 0.781);
}


</style>