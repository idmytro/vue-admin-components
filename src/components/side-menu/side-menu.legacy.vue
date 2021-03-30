<template id="side-menu">
  <div class="side-menu">
    <side-menu-item
      type="logo"
      to="/"
      :label="label"
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
((global) => {
  global.components.SideMenu = Vue.component('SideMenu', {
    template: '#side-menu',
    props: {
      label: {
        type: String,
        default: undefined,
      },
    },
  });
})(window);
</script>
