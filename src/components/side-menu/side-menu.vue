<template>
  <div class="side-menu">
    <side-menu-item
      type="logo"
      to="/"
      label="Catalyst"
    ></side-menu-item>

    <div class="side-menu__list">
      <slot></slot>
    </div>

    <form
      action="/api/v1/logout"
      method="post"
    >
      <side-menu-item
        icon="side-menu-icon--exit"
        tooltip="Выйти"
        type="exit"
      ></side-menu-item>
    </form>

    <side-menu-icons></side-menu-icons>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item.vue';
import SideMenuIcons from './side-menu-icons.vue';

export default {
  components: { SideMenuItem, SideMenuIcons },
};
</script>

<style>
.side-menu {
  flex-shrink: 0;
  width: 72px;
  background-color: #2E384D;
  display: grid;
  grid-template-rows: 54px 1fr 68px;
  grid-gap: 6px;
}

.side-menu__list {
  height: calc(100vh - 54px - 68px - 12px);
  overflow-y: auto;
}

.side-menu__list .side-menu-item {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
