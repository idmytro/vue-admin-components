<template>
  <section
    data-component="form-section"
    class="form-section"
  >
    <label class="form-section__header">
      <div
        v-if="foldable"
        class="form-section__switch"
      >
        <el-switch v-model="isContentVisible"></el-switch>
      </div>
      <div
        v-if="title"
        class="form-section__heading"
      >
        <h2
          v-if="!nested"
          v-text="title"
        ></h2>
        <h3
          v-else
          v-text="title"
        ></h3>
      </div>
    </label>
    <div
      v-show="isContentVisible"
      class="form-section__content"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    foldable: {
      type: Boolean,
      default: false,
    },
    folded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    nested: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      isContentVisible: !this.folded,
    };
  },
  watch: {
    folded (newVal) {
      this.isContentVisible = !newVal;
    },
  },
};
</script>

<style>
.form-section {
  background-color: #fff;
  padding: 20px;
}

.form-section .form-section {
  padding-left: 0;
  padding-right: 0;
}

.form-section--with-border,
.form-section + .form-section {
  border-top: 4px solid #F3F6FA;
}

.form-section .form-section--with-border,
.form-section .form-section + .form-section {
  border-top: 1px dashed #DADDE5;
}

.form-section__header {
  display: flex;
  align-items: center;
  user-select: none;
}

.form-section__switch {
  padding-right: 0.5em;
}

.form-section__heading {
  font-size: 24px;
}

.form-section__heading h2,
.form-section__heading h3 {
  font-size: inherit;
  margin: 0;
  padding: 0;
}

.form-section .form-section .form-section__heading {
  font-size: 20px;
}

.form-section__header + .form-section__content {
  margin-top: 24px;
}
</style>
