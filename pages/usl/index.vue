<template>
  <div>жители</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  middleware: ['auth'],
  layout: 'admin'
})

export default class usl extends Vue {
}

</script>
