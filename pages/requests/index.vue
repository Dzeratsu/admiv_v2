<template>
  <div class="dashbord">
    <div class="dashbord-button">
      <div> <img :src="require('@/assets/icons/fi_plus.svg')" alt="#"></div>
      <div>Создать заявку</div>
    </div>
    <div>
      тут инпут
    </div>
    <div>Тут выберите дату</div>
    <div>тут выгрузите отчет</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  middleware: ['auth'],
  layout: 'admin'
})

export default class request extends Vue {
}

</script>

<style>

</style>
