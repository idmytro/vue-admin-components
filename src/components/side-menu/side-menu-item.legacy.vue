<template id="side-menu-item">
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
((global) => {
  global.components.SideMenu = global.Vue.component('SideMenu', {
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
  });
})(window);
</script>
