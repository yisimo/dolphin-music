<template>
  <ul class="switches">
    <li class="switch-item" :class="{'active': currentIndex === index}" @click="switchItem(index)" v-for="(item, index) in switches">
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      switches: {
        type: Array,
        default: []
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      switchItem(index) {
        this.$emit('switch', index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .switches
    display: flex
    align-items: center
    margin: 0 auto
    width: 240px
    border: 1px solid $color-theme
    border-radius: 5px
    .switch-item
      flex: 1
      padding: 8px
      text-align: center
      font-size: $font-size-medium
      background: $color-theme
      color: $color-text-w
      &.active
        background: $color-background
        color: $color-theme
</style>
