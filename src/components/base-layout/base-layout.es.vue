<!-- Нужен! template id="base-layout" -->
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

<!-- Нужен! template: '#base-layout', -->
<script>
export default {
  template: '#base-layout',
};
</script>

<!-- Оригинал: base-layout.css -->
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
  left: 0;
  top: 0;
  overflow: hidden;
  width: var(--width-sidemenu);
  bottom: 0;
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
  top: 0;
  z-index: 10;
}

.base-layout__header::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: var(--space-layout);
  background-image: linear-gradient(var(--color-background), rgba(255, 255, 255, 0));
}

.base-layout__body {
  padding-left: var(--space-layout);
  padding-top: var(--space-layout);
}

.base-layout .form-section:first-of-type {
  border-top-left-radius: var(--rounded-layout);
}
</style>
