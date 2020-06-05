<template>
  <div>
    <button @click="doMercy">Mercy</button>
    <span v-if="showMercy">{{ mercy }}</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    mercy: `I'am mercy !!`,
    showMercy: false
  }),

  methods: {
    doMercy () {
      this.showMercy = true
    }
  }
}
</script>