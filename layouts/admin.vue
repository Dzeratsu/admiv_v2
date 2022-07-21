<template>
  <div class="flex">
    <sidebar :navigation="navItems" />
    <div class="wrapper">
      <information />
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sidebar from '~/components/Sidebar/sidebar.vue'
import req from '@/assets/icons/requests.svg'
import cit from '@/assets/icons/citizens.svg'
import badge from '@/assets/icons/badge.svg'
import services from '@/assets/icons/services.svg'
import Information from '~/components/information/information.vue'

@Component({
  name: 'admin',
  components: { Information, Sidebar }
})
export default class admin extends Vue {
  public navItems = [
    { name: 'Заявки', href: '/requests', icon: req },
    { name: 'Жители', href: '/citizens', icon: cit },
    { name: 'Исполнители', href: '/employees', icon: badge },
    { name: 'Услуги', href: '/usl', icon: services }
  ]
}
</script>

<style scoped>
.flex {
  display: flex;
}

.wrapper {
  width: 100%;
  max-width: 1540px;
  margin-left: 340px;
}
</style>
