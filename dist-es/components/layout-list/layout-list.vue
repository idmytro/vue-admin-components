<!-- https://gitlab.edadeal.yandex-team.ru/cisar/vue-admin-ui-components/-/blob/v4.0.6/src/components/layout-list/layout-list.vue -->

<template id="layout-list">
  <div
    class="layout-list"
    :class="[
      hasAside && asideVisible ? 'layout-list--with-aside' : 'layout-list--without-aside',
      hasAsideFooter ? '' : 'layout-list--without-aside-footer'
    ]"
  >
    <aside
      v-if="hasAside && asideVisible"
      class="layout-list__aside"
    >
      <div class="layout-list__aside-column">
        <div
          v-if="foldableAside"
          class="layout-list__aside-header"
        >
          <button
            ref="asideToggle"
            type="button"
            class="label-button layout-list__filters-button layout-list__filters-button--expanded"
            @click="toggleAsideVisible(false)"
          >
            Фильтры
          </button>
        </div>
        <div class="layout-list__aside-body">
          <slot name="aside-body"></slot>
        </div>

        <div class="layout-list__aside-footer">
          <slot name="aside-footer"></slot>
        </div>
      </div>
    </aside>

    <main class="layout-list__main">
      <div
        v-if="foldableAside"
        :class="mainHeaderVisible && 'layout-list__main-header'"
      >
        <button
          v-if="!asideVisible"
          ref="mainToggle"
          type="button"
          class="label-button layout-list__filters-button"
          @click="toggleAsideVisible(true)"
        >
          Фильтры
        </button>
        <slot name="filters"></slot>
      </div>
      <div class="layout-list__main-column">
        <div class="layout-list__main-body">
          <slot name="main-body"></slot>
        </div>
        <div
          v-if="hasMainFooter"
          class="layout-list__main-footer"
        >
          <slot name="main-footer"></slot>
        </div>
      </div>
    </main>

    <slot name="drawer"></slot>
  </div>
</template>
<script>
export default {
  template: '#layout-list',
  props: {
    hasAside: {
      type: Boolean,
      default: true,
    },
    foldableAside: {
      type: Boolean,
      default: false,
    },
    foldedAsideKey: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      asideVisible: true,
    };
  },
  computed: {
    hasAsideFooter () {
      return !!this.$slots['aside-footer'];
    },
    hasMainFooter () {
      return !!this.$slots['main-footer'];
    },
    mainHeaderVisible () {
      return !!this.$slots.filters || !this.asideVisible;
    },
  },
  created () {
    if (this.foldedAsideKey) {
      this.asideVisible = !localStorage.getItem(this.foldedAsideKey) || !this.foldableAside;
    }
  },
  methods: {
    toggleAsideVisible (value) {
      if (this.foldedAsideKey) {
        value
          ? localStorage.removeItem(this.foldedAsideKey)
          : localStorage.setItem(this.foldedAsideKey, !value);
      }

      this.asideVisible = value;
      this.$nextTick(() => {
        const nextButton = value ? this.$refs.asideToggle : this.$refs.mainToggle;
        if (nextButton) nextButton.focus();
      });
    },
  },
};
</script>
<style>
.layout-list {
  --height-header: 60px;
  --height-filters: 28px;
  --space-filters: 30px; /* var(--height-filters) + var( --space-aside-top) */
  --space-layout: 20px;
  --height-button: 40px;
  --width-aside: 280px;
  --space-aside-top: 2px;

  display: flex;
  overflow: hidden;
  flex-grow: 1;
  height: calc(100vh - var(--height-header));
}

.layout-list--without-aside {
  margin-left: var(--space-layout);
}

.layout-list__aside {
  flex-shrink: 0;
  width: var(--width-aside);
  margin-top: calc(var(--space-layout) - var(--space-aside-top));
}

.layout-list__main {
  display: flex;
  flex-direction: column;
  margin-top: var(--space-layout);
}

.layout-list--with-aside .layout-list__main {
  width: calc(100% - var(--width-aside));
}

.layout-list--without-aside .layout-list__main {
  width: 100%;
}

.layout-list__aside-column,
.layout-list__main-column {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}

.layout-list__aside-column {
  overflow-y: auto;
  padding-top: var(--space-aside-top);
}

.layout-list__main-column {
  overflow: hidden;
  padding-bottom: var(--space-layout);
  padding-left: var(--space-layout);
  border-top-left-radius: var(--rounded-layout);
  background-color: #FFF;
}

.layout-list__aside-body,
.layout-list__main-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.layout-list__aside-header,
.layout-list__aside-body,
.layout-list__aside-footer {
  padding-right: var(--space-layout);
  padding-left: var(--space-layout);
}

.layout-list__main-body {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding-top: var(--space-layout);
  border-top-left-radius: var(--rounded-layout);
  background: #FFF;
}

.layout-list__aside-footer,
.layout-list__main-footer {
  flex-shrink: 0;
  min-height: var(--height-button);
  margin-top: var(--space-layout);
}

.layout-list__aside-footer {
  box-sizing: content-box;
  border-bottom: var(--space-layout) solid transparent;
}

.layout-list--without-aside-footer .layout-list__aside-footer {
  min-height: auto;
  margin-top: 0;
}

.layout-list__table-wrap {
  overflow: hidden;
  flex-grow: 1;
}

.layout-list__aside .el-select {
  width: 100%;
}

.layout-list-list__aside .el-date-editor--daterange {
  width: 100%;
}

.layout-list__aside .el-date-editor.el-input,
.layout-list__aside .el-date-editor.el-input__inner {
  width: 100%;
}

.layout-list__pagination {
  margin: -2px;
  padding: 2px;
}

.layout-list__aside-header {
  flex-shrink: 0;
  margin-bottom: var(--space-layout);
}

.layout-list__filters-button {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  padding-right: 36px !important;
  cursor: pointer;
  color: #181C29;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  line-height: var(--height-filters);
}

.layout-list .layout-list__filters-button:focus {
  outline: none;
  box-shadow: none;
}

.layout-list__filters-button--expanded {
  display: block;
  width: 100%;
  margin-right: 0;
  text-align: left;
}

.layout-list__filters-button::after {
  content: "\e6e0";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 28px;
  height: var(--height-filters);
  text-align: center;
  border-radius: 8px;
  background-color: #DADDE5;
  font-family: element-icons;
  line-height: var(--height-filters);
  transition-duration: var(--transition-duration);
  transition-property: background-color, box-shadow;
}

.layout-list__filters-button--expanded::after {
  content: "\e6de";
}

.layout-list__filters-button:focus::after {
  box-shadow: var(--box-shadow-focus);
}

.layout-list__filters-button:focus::after,
.layout-list__filters-button:hover::after {
  background-color: #E9EAF0;
}

.layout-list__main-header {
  margin-bottom: 16px;
}

.layout-list__main-header .el-tag {
  margin-right: 5px;
  margin-bottom: 5px;
}

.layout-list__pagination-total {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-right: 10px;
  color: var(--color-plain-text);
  font-size: var(--size-text-menu);
  font-weight: 500;
}
</style>
