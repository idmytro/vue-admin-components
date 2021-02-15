<template id="CopyString">
  <div class="relative inline-block">
    <textarea
      ref="textarea"
      v-model="value"
      readonly
      class="absolute w-0 h-0 opacity-0"
    ></textarea>
    <el-popover
      v-model="tooltipVisible"
      placement="bottom"
      trigger="manual"
      content="Скопировано"
      popper-class="p-8px text-center"
    >
      <button
        slot="reference"
        type="button"
        :class="[
          'regular-button cursor-pointer',
          icon && !label && 'icon-button'
        ]"
        @click="click"
      >
        <i
          v-if="icon"
          class="el-icon-document-copy"
        ></i>
        {{ label }}
      </button>
    </el-popover>
  </div>
</template>

<script>
((global) => {
  const { _ } = global;

  global.components.CopyString = global.Vue.component('CopyString', {
    template: '#CopyString',
    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: 'Скопировать',
      },
      icon: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      delay: 2000,
      tooltipVisible: false,
      timer: undefined,
    }),
    beforeDestroy () {
      this.clearTimer();
    },
    methods: {
      click () {
        this.$refs.textarea.select();
        document.execCommand('copy');
        this.tooltipVisible = true;
        this.clearTimer();
        this.timer = _.delay(() => {
          this.tooltipVisible = false;
        }, this.delay);
      },
      clearTimer () {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = undefined;
      },
    },
  });
})(window);
</script>
