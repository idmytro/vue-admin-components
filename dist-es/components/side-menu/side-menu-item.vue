<!-- https://gitlab.edadeal.yandex-team.ru/cisar/vue-admin-ui-components/-/blob/v4.0.2/src/components/side-menu/side-menu-item.vue -->

<template id="side-menu-item">
  <div
    class="side-menu-item"
    :class="type && `side-menu-item--${type}`"
    :style="style"
  >
    <el-tooltip
      :disabled="!tooltip"
      :content="tooltip"
      :tabindex="isDisabled ? -1 : 0"
      effect="dark"
      placement="right"
    >
      <button
        v-if="type === 'exit'"
        type="submit"
        :aria-label="tooltip || label"
        class="side-menu-item__control"
      >
        <span
          v-if="svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
      </button>

      <a
        v-else-if="type === 'link' && !isDisabled"
        :aria-label="tooltip || label"
        :href="to"
        target="_blank"
        class="side-menu-item__control"
      >
        <span
          v-if="svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
      </a>

      <router-link
        v-else
        :aria-label="tooltip || label"
        :disabled="isDisabled"
        :tag="computedTag"
        :to="to || '/'"
        class="side-menu-item__control"
      >
        <span
          v-if="type === 'logo' || svg"
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
        <slot></slot>
        <span
          v-if="type === 'logo'"
          class="side-menu-item__label"
        >{{ label }}</span>
      </router-link>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  template: '#side-menu-item',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    logoUrl: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    tooltip: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    isDisabled () {
      return this.disabled || !this.to;
    },
    computedTag () {
      return this.isDisabled ? 'button' : 'a';
    },
    svg () {
      if (!this.icon) return '';
      return `<svg><use xlink:href="
          #${this.icon}"
        ></use></svg>`;
    },
    style () {
      if (!this.logoUrl || this.type !== 'logo') return '';
      return `--logo-url: url(${this.logoUrl})`;
    },
  },
};
</script>

<style>
.side-menu-item {
  --box-shadow-focus: 0 0 0 3px rgba(61,76,102,0.5);
  --color-hover: var(--color-side-menu-item, #3d4c66);
  --logo-url: url('../../assets/logo.png');
}

.side-menu-item,
.side-menu-item__control,
.side-menu-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-menu-item__control {
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-width: 0;
  border-radius: 8px;
  background-color: transparent;
  transition-duration: 0.2s;
  transition-property: background-color;
}

.side-menu-item__icon svg {
  width: 24px;
  height: 24px;
}

.side-menu-item__control:hover,
.side-menu-item__control.router-link-active {
  background-color: var(--color-hover);
}

.side-menu-item__control:focus {
  outline: 0;
  box-shadow: var(--box-shadow-focus);
}

.side-menu-item__control[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.side-menu-item:hover .side-menu-item__control[disabled] {
  background-color: transparent;
}

.side-menu-item--logo {
  height: 48px;
}

.side-menu-item--logo .side-menu-item__control {
  width: auto;
  text-decoration: none;
  background-color: transparent;
}

.side-menu-item--logo .side-menu-item__label {
  padding-bottom: 6px;
  padding-left: 6px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}

.side-menu-item--logo .side-menu-item__icon {
  width: 48px;
  height: 48px;
  background-image: var(--logo-url);
  background-size: contain;
}

.side-menu-item .el-tooltip {
  outline: 0;
}

.side-menu-item__label {
  display: none;
}
</style>
