<!-- https://gitlab.edadeal.yandex-team.ru/cisar/vue-admin-ui-components/-/blob/v4.0.4/src/components/base-layout/base-layout.vue -->

<template id="base-layout">
  <div class="base-layout">
    <div
      v-if="$slots.menu"
      class="base-layout__menu z-11"
    >
      <slot name="menu"></slot>
    </div>
    <div class="base-layout__main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  template: '#base-layout',
};
</script>

<style>
.base-layout {
  --width-sidemenu: 72px;
  --height-sidemenu: 60px;
  --space-layout: 20px;
  --height-header: 60px;

  display: flex;
  min-height: 100vh;
}

.base-layout__menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: var(--width-sidemenu);
}

.base-layout__main {
  flex-grow: 1;
  min-width: 0;
}

.base-layout__menu + .base-layout__main {
  margin-top: 0;
  margin-left: var(--width-sidemenu);
}

.base-layout__header {
  position: sticky;
  z-index: 10;
  top: 0;
}

.base-layout__header::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  height: var(--space-layout);
  background-image: linear-gradient(var(--color-background), rgba(255,255,255,0));
}

.base-layout__body {
  padding-top: var(--space-layout);
  padding-left: var(--space-layout);
}

.base-layout .form-section:first-of-type {
  border-top-left-radius: var(--rounded-layout);
}
</style>
