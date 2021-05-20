<template>
  <form class="tablet-form">
    <table border="1" bordercolor="black" class="tablet-form__table">
      <thead>
        <tr>
          <td>Вид отпуска</td>
          <td>Даты</td>
          <td>Всего дней</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vacation of allVacations" :key="vacation.id">
          <td>{{ vacation.select ? vacation.select : '' }}</td>
          <td>
            {{ vacation.dataStart ? vacation.dataStart : '' }} --
            {{ vacation.dataEnd }}
          </td>
          <td>{{ vacation.all_days ? vacation.all_days : '' }}</td>
        </tr>
        <tr v-show="!allVacations.length">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <button class="tablet-form__btn" type="submit">Submit tablet</button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allVacations"]),
    counterDaysVacations() {
      let counterDays;
      for (let vac of this.allVacations) {
        counterDays =
          Math.floor(
            (new Date(vac.dataEnd) - new Date(vac.dataStart)) /
              (1000 * 60 * 60 * 24)
          ) + 1;
      }
      return counterDays;
    },
  },
};
</script>

<style scoped>
.tablet-form{
  display: flex;
  align-items: flex-end;
}


.tablet-form__table {
  max-width: 800px;
  margin-right: 100px;
  font-size: 16px;
  line-height: 150%;
  background-color: bisque;
}

.tablet-form__table > thead > tr > td {
  width: 200px;
  height: 24px;
}

.tablet-form__table > tbody > tr > td {
  width: 200px;
  height: 24px;
}

.tablet-form__btn {
  max-width: 150px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid rgb(51, 50, 50);
  border-radius: 5px;
}
</style>