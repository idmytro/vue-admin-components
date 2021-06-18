export default {
  template: `
  <div
    class="side-menu-item"
    :class="type && 'side-menu-item--'+type"
  >
    <el-tooltip
      v-if="type === 'exit'"
      :disabled="!tooltip"
      :content="tooltip"
      effect="dark"
      placement="right"
    >
      <button
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
    </el-tooltip>

    <el-tooltip
      v-else-if="type === 'link' && !isDisabled"
      :disabled="!tooltip"
      :content="tooltip"
      effect="dark"
      placement="right"
    >
      <a
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
    </el-tooltip>

    <el-tooltip
      v-else
      :disabled="!tooltip"
      :content="tooltip"
      :tabindex="isDisabled ? -1 : 0"
      effect="dark"
      placement="right"
    >
      <router-link
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
  `,
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
