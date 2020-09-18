<template>
  <div
    class="page-header"
    :class="$slots.default && 'page-header--with-menu'"
  >
    <el-button
      v-if="hasBackButton"
      class="page-header__back"
      icon="el-icon-back"
      type="text"
      @click="$router.go(-1)"
    ></el-button>

    <h1 class="page-header__title">
      {{ title }}
    </h1>
    <div class="flex-grow">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasBackButton: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.page-header {
  --space-layout: 20px;

  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;
  position: sticky;
  z-index: 10;
  top: 0;
}

.page-header::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: var(--space-layout);
  background-image: linear-gradient(var(--color-background), rgba(255,255,255,0));
}

.page-header__title {
  font-size: 28px;
  line-height: 32px;
}

.page-header__back {
  font-size: 24px;
  min-width: 54px;
  text-align: center;
  color: #2E384D;
}

.page-header__back:hover {
  color: inherit;
}

.page-header__title {
  margin-left: 20px;
  margin-right: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.page-header--with-menu .page-header__title {
  padding-right: 20px;
  border-right: 1px solid var(--color-borders);
}

.page-header__back + .page-header__title {
  margin-left: 0;
  border-left: 1px solid var(--color-borders);
  padding-left: 20px;
}

.page-header__buttons {
  height: 32px;
  display: flex;
  align-items: center;
}

.page-header__buttons--with-border {
  border-left: 1px solid var(--color-borders);
  padding-left: 20px;
  margin-left: 20px;
}

.page-header .el-menu-item {
  padding: 0;
  font-weight: 500;
}

.page-header .el-menu-item + .el-menu-item {
  margin-left: 30px;
}
</style>
