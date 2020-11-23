<template>
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
export default {
  name: 'ComplexButton',
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
        case 'regular': return 'regular-button';
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
};
</script>
