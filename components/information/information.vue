<template>
  <div class="information">
    <div class="information-weather">
      <div>
        <img :src="require('@/assets/icons/fi_calendar.svg')" alt="#">
      </div>
      <div>      {{ date() }}</div>
      <div><img :src="require('@/assets/icons/сloud.svg')" alt="#"></div>
      <div v-if="weather">
        + {{ Math.round(weather.main.temp)}}
      </div>
    </div>
    <div class="time">
      {{ time }}
    </div>
    <div> {{ phone }} Техническая поддержка</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'information'

})
export default class information extends Vue {
  mounted () {
    setInterval(() => this.clock(), 1000)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${process.env.sity}&appid=${process.env.apiWeather}&units=metric`)
      .then(response => response.json())
      .then((commit) => {
        this.weather = commit
      })
  }

  private weather
  private week: string[] = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  private time: string = '00:00'
  private phone: string | undefined = process.env.supportPhone

  public clock () {
    const clock = new Date()
    const hours = clock.getHours()
    const minutes = clock.getMinutes()
    let maskHours
    let maskMinutes
    if (hours < 10) {
      maskHours = '0' + hours
    } else {
      maskHours = hours
    }
    if (minutes < 10) {
      maskMinutes = '0' + minutes
    } else {
      maskMinutes = minutes
    }
    this.time = maskHours + ':' + maskMinutes
  }

  private mask (item) {
    if (item < 10) {
      return '0' + item
    } else {
      return item
    }
  }
  private date () {
    const date = new Date()
    const weekDay = date.getDay()
    const day = date.getDate()
    const mounth = date.getMonth()
    const year = date.getFullYear()
    const maskDay = this.mask(day)
    const maskMounth = this.mask(mounth + 1)
    return maskDay + ':' + maskMounth + ':' + year + ' ' + this.week[weekDay]
  }
}
</script>
