<template>
  <div
    class="base-layout-list"
    :class="[
      hasAside && asideVisible ? 'base-layout-list--with-aside' : 'base-layout-list--without-aside',
      hasAsideFooter ? '' : 'base-layout-list--without-aside-footer'
    ]"
  >
    <aside
      v-if="hasAside && asideVisible"
      class="base-layout-list__aside"
    >
      <div class="base-layout-list__aside-column">
        <div
          v-if="foldableAside"
          class="base-layout-list__aside-header"
        >
          <button
            ref="asideToggle"
            type="button"
            class="label-button base-layout-list__filters-button base-layout-list__filters-button--expanded"
            @click="toggleAsideVisible(false)"
          >
            Фильтры
          </button>
        </div>
        <div class="base-layout-list__column-body">
          <slot name="aside-body"></slot>
        </div>

        <div class="base-layout-list__column-footer base-layout-list__aside-footer">
          <slot name="aside-footer"></slot>
        </div>
      </div>
    </aside>

    <main class="base-layout-list__main">
      <div
        v-if="foldableAside"
        :class="mainHeaderVisible && 'base-layout-list__main-header'"
      >
        <button
          v-if="!asideVisible"
          ref="mainToggle"
          type="button"
          class="label-button base-layout-list__filters-button"
          @click="toggleAsideVisible(true)"
        >
          Фильтры
        </button>
        <slot name="filters"></slot>
      </div>
      <div class="base-layout-list__main-column flex flex-col overflow-hidden">
        <div class="base-layout-list__column-body base-layout-list__main-body">
          <slot name="main-body"></slot>
        </div>
        <div class="base-layout-list__column-footer base-layout-list__main-footer">
          <slot name="main-footer"></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
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
.base-layout-list {
  --height-header: 60px;
  --space-layout: 20px;
  --width-sidemenu: 72px;
  --height-button: 40px;
  --width-aside: 280px;

  overflow: hidden;
  display: flex;
  flex-grow: 1;
  height: calc(100vh - var(--height-header));
  /* margin-top: calc(0px - var(--space-layout)); */
}

.base-layout-list--without-aside {
  margin-left: var(--space-layout);
}

.base-layout-list__aside {
  width: var(--width-aside);
  flex-shrink: 0;
  margin-top: var(--space-layout);
}

.base-layout-list__main {
  display: flex;
  flex-direction: column;
  margin-top: var(--space-layout);
}

.base-layout-list--with-aside .base-layout-list__main {
  width: calc(100vw - var(--width-sidemenu) - var(--width-aside));
}

.base-layout-list--without-aside .base-layout-list__main {
  width: calc(100vw - var(--width-sidemenu) - var(--space-layout));
}

.base-layout-list__main-body {
  border-top-left-radius: var(--rounded-layout);
  background: #fff;
  padding: 20px 0 0 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.base-layout-list__aside-column,
.base-layout-list__main-column {
  position: relative;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.base-layout-list__aside-column {
  padding: var(--space-layout);
  padding-top: 2px;
  margin-top: -2px;
  overflow-y: auto;
}

.base-layout-list__main-column {
  border-top-left-radius: var(--rounded-layout);
  background-color: #fff;
  padding-bottom: var(--space-layout);
  padding-left: var(--space-layout);
}

.base-layout-list__column-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.base-layout-list__column-footer {
  flex-shrink: 0;
  margin-top: var(--space-layout);
  min-height: var(--height-button);
}

.base-layout-list--without-aside-footer .base-layout-list__aside-footer {
  margin-top: 0;
  min-height: auto;
}

.base-layout-list__table-wrap {
  flex-grow: 1;
  overflow: hidden;
}

.base-layout-list__aside .el-select {
  width: 100%;
}

.base-layout-list-list__aside .el-date-editor--daterange {
  width: 100%;
}

.base-layout-list__aside .el-date-editor.el-input,
.base-layout-list__aside .el-date-editor.el-input__inner {
  width: 100%;
}

/* .entity-layout__narrow-wrapper {
  max-width: 800px;
  position: relative;
} */

.base-layout-list__pagination {
  padding: 2px;
  margin: -2px;
}

.base-layout-list__aside-header {
  flex-shrink: 0;
  margin-bottom: var(--space-layout);
}

.base-layout-list__filters-button {
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 28px;
  color: #181C29;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-right: 36px;
  margin-right: 10px;
}

.base-layout-list__filters-button:focus {
  box-shadow: none;
  outline: none;
}

.base-layout-list__filters-button--expanded {
  display: block;
  width: 100%;
  text-align: left;
  margin-right: 0;
}

.base-layout-list__filters-button::after {
  display: block;
  top: 0;
  right: 0;
  position: absolute;
  line-height: 28px;
  text-align: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  content:"\e6e0";
  background-color: #DADDE5;
  font-family: element-icons;
  transition-property: background-color, box-shadow;
  transition-duration: var(--transition-duration);
}

.base-layout-list__filters-button--expanded::after {
  content:"\e6de";
}

.base-layout-list__filters-button:focus::after {
  box-shadow: var(--box-shadow-focus);
}

.base-layout-list__filters-button:focus::after,
.base-layout-list__filters-button:hover::after {
  background-color: #e9eaf0;
}

.base-layout-list__main-header {
  margin-bottom: 16px;
}

.base-layout-list__main-header .el-tag {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
