<!-- https://gitlab.edadeal.yandex-team.ru/cisar/vue-admin-ui-components/-/blob/v4.0.4/src/components/side-menu/side-menu.vue -->

<template id="side-menu">
  <div
    :class="[
      'side-menu',
      profileAvatar && 'side-menu--with-profile'
    ]"
  >
    <div class="side-menu__logo-cell">
      <slot
        v-if="$slots.logo"
        name="logo"
      ></slot>
      <side-menu-item
        v-else
        type="logo"
        to="/"
        v-bind="{label, logoUrl}"
      ></side-menu-item>
    </div>

    <div class="side-menu__list">
      <slot></slot>
    </div>

    <div
      v-if="profileAvatar"
      class="side-menu__profile-cell"
    >
      <el-tooltip
        effect="dark"
        placement="right"
        :disabled="!profileTooltip"
      >
        <template #content>
          <p
            v-for="(line, index) in profileTooltip"
            :key="`line-${index}`"
          >
            {{ line }}
          </p>
        </template>

        <a
          class="side-menu__profile"
          href="https://passport.yandex-team.ru/profile"
          target="_blank"
        >
          <img :src="profileAvatar">
        </a>
      </el-tooltip>
    </div>

    <form
      action="/api/v1/logout"
      method="post"
      class="side-menu__footer-cell"
    >
      <side-menu-item
        tooltip="Выйти"
        type="exit"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3333 12.5C13.3333 12.04 13.7058 11.6667 14.1666 11.6667C14.6275 11.6667 15 12.04 15 12.5V17.5C15 17.96 14.6275 18.3334 14.1666 18.3334H9.99996V19.1667C9.99996 19.4167 9.88746 19.6525 9.69496 19.8109C9.54496 19.9342 9.35746 20 9.16664 20C9.1125 20 9.0575 19.995 9.00332 19.9834L0.67 18.3167C0.28082 18.2392 0 17.8975 0 17.5V0.83332C0 0.824696 0.00291674 0.816513 0.00584116 0.808308C0.00855952 0.800681 0.0112845 0.793035 0.0116797 0.785C0.0120201 0.774967 0.0109279 0.765082 0.009832 0.755163C0.00828684 0.741178 0.00673433 0.727126 0.00917969 0.7125C0.0179568 0.65106 0.0414796 0.59603 0.0651414 0.540674C0.0684381 0.532962 0.0717374 0.525243 0.075 0.5175C0.078806 0.50779 0.0814607 0.49793 0.0841062 0.488106C0.0878141 0.474335 0.0915039 0.460631 0.0983203 0.4475C0.15332 0.34332 0.229141 0.25582 0.319961 0.18418C0.323297 0.181682 0.325591 0.178142 0.327889 0.174596C0.330191 0.171042 0.332497 0.167483 0.335859 0.164961C0.345243 0.157818 0.356064 0.15427 0.366908 0.150714C0.376287 0.147639 0.385683 0.144558 0.39418 0.139141C0.46832 0.0925 0.5475 0.0583203 0.635 0.0358203C0.6725 0.0266406 0.70832 0.02 0.7475 0.0158203C0.759843 0.0144139 0.771744 0.0113606 0.783644 0.0083079C0.799838 0.00415343 0.816027 0 0.83332 0H14.1666C14.6275 0 15 0.37332 15 0.833359V5.83336C15 6.29336 14.6275 6.66668 14.1666 6.66668C13.7058 6.66668 13.3333 6.29336 13.3333 5.83336V1.66668H6.51164L9.40582 2.535C9.75832 2.64082 10 2.96582 10 3.33332V16.6667H13.3333V12.5ZM19.755 8.57649C19.8325 8.65399 19.8933 8.74649 19.9358 8.84817C20.02 9.05149 20.02 9.28149 19.9358 9.48473C19.8933 9.58723 19.8325 9.67973 19.755 9.75641L17.2558 12.2556C17.0933 12.4189 16.88 12.4998 16.6666 12.4998C16.4533 12.4998 16.24 12.4189 16.0775 12.2556C15.7516 11.9306 15.7516 11.4031 16.0775 11.0773L17.155 9.99977H12.4999C12.0391 9.99977 11.6666 9.62645 11.6666 9.16645C11.6666 8.70645 12.0391 8.33313 12.4999 8.33313H17.155L16.0775 7.25563C15.7517 6.93063 15.7517 6.40313 16.0775 6.07731C16.4033 5.75231 16.93 5.75231 17.2558 6.07731L19.755 8.57649Z"
            fill="white"
          />
        </svg>
      </side-menu-item>
    </form>
  </div>
</template>

<script>
import SideMenuItem from './side-menu-item.vue';

export default {
  name: 'SideMenu',
  template: '#side-menu',
  components: { SideMenuItem },
  props: {
    label: {
      type: String,
      default: undefined,
    },
    logoUrl: {
      type: String,
      default: undefined,
    },
    profileAvatar: {
      type: String,
      default: undefined,
    },
    profileTooltip: {
      type: Array,
      default: undefined,
    },
  },
};
</script>

<style>
.side-menu {
  --gap: 6px;

  display: grid;
  grid-gap: var(--gap);
  grid-template-rows: 60px 1fr 60px;
  align-items: center;
  width: 72px;
  min-height: 100vh;
  padding: 0 6px 16px;
  background-color: #2E384D;
}

.side-menu--with-profile {
  grid-template-rows: 60px 1fr 60px 60px;
}

.side-menu__list {
  display: block;
  overflow-y: auto;
  flex-grow: 1;
  height: calc(100vh - 60px - var(--gap) - 60px - var(--gap) - 16px);
}

.side-menu--with-profile .side-menu__list {
  height: calc(100vh - 60px - var(--gap) - 60px - var(--gap) - 60px - var(--gap) - 16px);
}

.side-menu__logo-cell,
.side-menu__profile-cell,
.side-menu__footer-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-menu__profile {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #FFF;
}

.side-menu__profile > img {
  width: 100%;
  height: 100%;
}

.side-menu__list .side-menu-item {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
