<template>
  <div class="person-info">
    <div class="person-info__bio">
      <h2>ФИО: {{ allUsers[0].name }}</h2>
      <p>Должность:</p>
      <p>Стаж:</p>
      <p>Всего дней отпуска: {{ sumDaysVacationsUser }}</p>
    </div>

    <table border="1" bordercolor="black" class="table">
      <tr>
        <td>Вид отпуска</td>
        <td>Всего дней</td>
        <td>Исползовано дней</td>
        <td>Осталось дней</td>
      </tr>
      <tr v-for="vacation of allUsers[0].vacations" :key="vacation.id">
        <td>{{ vacation.discription }}</td>
        <td>{{ vacation.days_res }}</td>
        <td>{{ vacation.days_res - vacation.days}}</td>
        <td>{{ vacation.days }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allUsers", "sumDaysVacationsUser", "allVacations"]),
  },
};
</script> 

<style scoped>
.person-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.person-info__bio{
  text-align: left;
}

.table {
  max-width: 800px;
  font-size: 16px;
  line-height: 150%;
  background-color: rgb(255, 248, 239);
}

.table > tr > td {
  width: 200px;
}
</style>