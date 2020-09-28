import SideMenuItem from './side-menu-item.vue';
import SideMenuIcons from './side-menu-icons.vue';

export default {
  components: { SideMenuItem, SideMenuIcons },
  template: `
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
  `,
};

export { SideMenuItem };
