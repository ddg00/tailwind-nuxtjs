<template>
  <t-table :headers="headers" :data="data" responsive />
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  method: {}
}
</script>
