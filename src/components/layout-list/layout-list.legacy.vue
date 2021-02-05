<!-- https://git.edadev.ru/cisar/vue-admin-ui-components/-/blob/v2.0.6/src/components/layout-list/layout-list.legacy.vue -->

<template
  id="LayoutList"
>
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
        <div class="layout-list__column-body">
          <slot name="aside-body"></slot>
        </div>

        <div class="layout-list__column-footer layout-list__aside-footer">
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
      <div class="layout-list__main-column flex flex-col overflow-hidden">
        <div class="layout-list__column-body layout-list__main-body">
          <slot name="main-body"></slot>
        </div>
        <div
          v-if="hasMainFooter"
          class="layout-list__column-footer layout-list__main-footer"
        >
          <slot name="main-footer"></slot>
        </div>
      </div>
    </main>

    <slot name="drawer"></slot>
  </div>
</template>

<script>
((global) => {
  global.components.LayoutList = global.Vue.component('LayoutList', {
    template: '#LayoutList',
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
  });
})(window);
</script>
