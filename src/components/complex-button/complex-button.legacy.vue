<template id="complex-button-tpl">
  <button
    data-component="complex-button"
    type="button"
    :class="[themeClass, iconClass]"
    @click="$emit('click')"
  >
    <span
      v-if="icon"
      :class="icon"
    ></span>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script>
((global) => {
  global.components.ComplexButton = global.Vue.component('ComplexButton', {
    name: 'complex-button',
    template: '#complex-button-tpl',
    props: {
      icon: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: '',
      },
    },
    computed: {
      themeClass () {
        switch (this.theme) {
          case 'accent': return 'accent-button';
          case 'success': return 'accent-button accent-button--theme-success';
          case 'danger': return 'accent-button accent-button--theme-danger';
          default: return 'secondary-button';
        }
      },
      iconClass () {
        return this.icon && !this.label ? 'icon-button' : '';
      },
    },
  });
})(window);
</script>
