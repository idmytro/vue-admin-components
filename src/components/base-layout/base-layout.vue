<template>
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

<style>
.base-layout {
  --width-sidemenu: 72px;

  display: flex;
  min-height: 100vh;
}

.base-layout__menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.base-layout__main {
  flex-grow: 1;
  min-width: 0;
}

.base-layout__menu + .base-layout__main {
  margin-left: var(--width-sidemenu);
}
</style>
