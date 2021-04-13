<template
  id="LayoutHeader"
>
  <div
    class="layout-header"
    :class="$slots.default && 'layout-header--with-menu'"
  >
    <el-button
      v-if="hasBackButton"
      class="layout-header__back"
      icon="el-icon-back"
      type="text"
      @click="$router.go(-1)"
    ></el-button>

    <h1 class="layout-header__title">
      {{ title }}
    </h1>
    <div class="flex-grow">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
((global) => {
  global.components.LayoutHeader = global.Vue.component('LayoutHeader', {
    template: '#LayoutHeader',
    props: {
      hasBackButton: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
    },
  });
})(window);
</script>
