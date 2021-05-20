export default {
  state: {
    workers: [
      {
        user_id: 1,
        name: "Иванов Иван Иванович",
        vacations: [
          {
            days_res: 14,
            days: 14,
            require: true,
            discription: "Неразрывный отпуск",
          },
          {
            days_res: 38,
            days: 38,
            discription: "Основной отпуск",
          },
          {
            days_res: 14,
            days: 14,
            discription: "За доп должность",
          }
        ],
        boss_id: 1,
        level: 0,
      },
      {
        user_id: 2,
        name: "Петров Петр Петрович",
        uncut_days: 14,
        discription_uncut: "Неразрывный отпуск",
        generDays: 30,
        discription_gener: "Основной отпуск",
        dopDays: 7,
        discription_dop: "За доп должность",
        boss_id: 1,
        level: 0,
      },
      {
        user_id: 2,
        name: "Селиванов Валерка",
        vacations: [
          {
            days: 14,
            require: true,
            discription: "Неразрывный отпуск",
          },
          {
            days: 26,
            discription: "Основной отпуск",
          },
          {
            days: 10,
            discription: "За доп должность",
          }
        ],
        boss_id: 1,
        level: 0,
      }
    ],

    limitation_days: [
      {
        user_id: 1,
        limit: [
          {
            discription: 'Приёмка',
            start_day: '2021-07-01',
            end_day: '2021-08-20'
          },
          {
            discription: 'Просто нельзя',
            start_day: '2021-09-01',
            end_day: '2021-10-01'
          },
        ],
      },
      {
        user_id: 2,
        limit: [
          {
            discription: 'Приёмка',
            start_day: '2021 - 06 - 01',
            end_day: '2021 - 07 - 20'
          },
          {
            discription: 'Просто нельзя',
            start_day: '2021 - 09 - 01',
            end_day: '2021 - 010 - 01'
          },
        ],
      },
      {
        user_id: 3,
        limit: [
          {
            discription: 'Приёмка',
            start_day: '2021 - 07 - 01',
            end_day: '2021 - 08 - 20'
          },
          {
            discription: 'Просто нельзя',
            start_day: '2021 - 09 - 01',
            end_day: '2021 - 010 - 01'
          },
        ],
      }
    ],

    targetsDays: [
      {
        user_id: 1,
        days: [
          {
            start: null,
            end: null,
            all: null,
          }
        ],
      },
      {
        user_id: 2,
        days: [
          {
            start: null,
            end: null,
            all: null,
          }
        ],
      },
      {
        user_id: 3,
        days: [
          {
            start: null,
            end: null,
            all: null,
          }
        ],
      }
    ],

    vacations: [],
  },
  
  actions: {},

  mutations: {
    newVacation(state, vacation) {
      state.vacations.push(vacation)
    },

    changeVacationsDaysOfUser(state, coutered) {
      let { couteredDays, select } = coutered;
      state.workers[0].vacations.find(vac => vac.discription == select).days = state.workers[0].vacations.find(vac => vac.discription == select).days - couteredDays;
    },
  },

  getters: {
    allUsers(state) {
      return state.workers
    },

    allVacations(state) {
      return state.vacations
    },
    sumDaysVacationsUser(state) {
      let sum = 0;
      for (let vac of state.workers[0].vacations) {
        sum = sum + vac.days
      }
      return sum
    }
  }
}
