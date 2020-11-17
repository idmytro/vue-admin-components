<template id="BaseLayout">
  <div class="base-layout">
    <div
      v-if="$slots.menu"
      class="base-layout__menu"
    >
      <slot name="menu"></slot>
    </div>
    <div class="base-layout__main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
((global) => {
  global.components.BaseLayout = global.Vue.component(
    'BaseLayout',
    {
      template: '#BaseLayout',
    },
  );
})(window);
</script>
