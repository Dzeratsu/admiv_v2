<template>
  <div class="sidebar">
    <h2>Диспетчерская</h2>
    <div class="link">
      <NuxtLink v-for="item in navigation" :key="item.name" class="sidebar-todo" :to="item.href" active-class="active-menu">
        <div class="icon">
            <img :src="item.icon" alt="#">
        </div>
          <div>{{ item.name }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { INavigation } from '~/Interface/layouts/INavigation'

@Component({
  name: 'sidebar'
})
export default class sidebar extends Vue {
  @Prop()
  navigation!: [INavigation]

}

</script>

<style>

</style>
