<template>
  <div
    class="side-menu-item"
    :class="type && `side-menu-item--${type}`"
  >
    <button
      v-if="type === 'exit'"
      type="submit"
      :aria-label="tooltip || label"
      class="side-menu-item__control"
    >
      <el-tooltip
        :disabled="!tooltip"
        :content="tooltip"
        effect="dark"
        placement="right"
      >
        <span
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
      </el-tooltip>
    </button>

    <a
      v-else-if="type === 'link' && !isDisabled"
      :aria-label="tooltip || label"
      :href="to"
      target="_blank"
      class="side-menu-item__control"
    >
      <el-tooltip
        :disabled="!tooltip"
        :content="tooltip"
        effect="dark"
        placement="right"
      >
        <span
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
      </el-tooltip>
    </a>

    <router-link
      v-else
      :aria-label="tooltip || label"
      :disabled="isDisabled"
      :tag="computedTag"
      :to="to"
      class="side-menu-item__control"
    >
      <el-tooltip
        :disabled="!tooltip"
        :content="tooltip"
        :tabindex="isDisabled ? -1 : 0"
        effect="dark"
        placement="right"
      >
        <span
          class="side-menu-item__icon"
          v-html="svg"
        ></span>
      </el-tooltip>
    </router-link>
  </div>
</template>

<script>
export default {
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
    to: {
      type: [String, Object],
      default: null,
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
      return `<svg><use xlink:href="#${this.icon}"></use></svg>`;
    },
  },
};
</script>

<style >
.side-menu-item {
  --box-shadow-focus: 0 0 0 3px rgba(61, 76, 102, .5);
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
  border-radius: 8px;
  background-color: transparent;
  transition-duration: 0.2s;
  transition-property: background-color;
  border-width: 0;
  cursor: pointer;
}

.side-menu-item__icon svg {
  width: 24px;
  height: 24px;
}

.side-menu-item__control:hover,
.side-menu-item__control.router-link-active {
  background-color: var(--color-side-menu-item);
}

.side-menu-item__control:focus {
  outline: 0;
  box-shadow: var(--box-shadow-focus);
}

.side-menu-item__control[disabled] {
  opacity: .5;
  cursor: not-allowed;
}

.side-menu-item:hover .side-menu-item__control[disabled] {
  background-color: transparent;
}

.side-menu-item--logo {
  margin-top: 6px;
  height: 48px;
}

.side-menu-item--logo .side-menu-item__control {
  background-color: transparent;
}

.side-menu-item--logo .side-menu-item__icon {
  background-image: var(--logo-url);
  background-size: contain;
  height: 48px;
  width: 48px;
}

.side-menu-item .el-tooltip {
  outline: 0;
}
</style>
