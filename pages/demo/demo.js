const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const minutes = []
const hours_s = []
const minutes_s = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

for (let i = 1; i <= 23; i++) {
  hours.push(i)
  // console.log(time.push(i))
}

for (let i = 1; i <= 60; i++) {
  minutes.push(i)
  // console.log(minutes.push(i))
}

for (let i = 1; i <= 23; i++) {
  hours_s.push(i)
  // console.log(minutes.push(i))
}

for (let i = 1; i <= 60; i++) {
  minutes_s.push(i)
  // console.log(minutes.push(i))
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    hours: hours,
    hour: 3,
    minutes: minutes,
    minute: 2,
    hours_s: hours_s,
    hours_: 7,
    minutes_s: minutes_s,
    minutes_: 9,
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    // console.log(e);
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      hour: this.data.hours[val[3]],
      minute: this.data.minutes[val[5]],
      hours_: this.data.hours_s[val[7]],
      minutes_: this.data.minutes_s[val[9]],
    })
  }
})
