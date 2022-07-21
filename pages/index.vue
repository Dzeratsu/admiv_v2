<template>
  <h1>MsoFF - Диспетчерская</h1>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'mainLayout',
  middleware: [({ redirect }) => redirect('/requests')]
})

export default class Admin extends Vue {
}

</script>

<style>

</style>
