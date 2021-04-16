import '../styles/base.css';
import { BaseLayout, SideMenu } from '../..';

export default {
  title: 'Components/base-layout',
  component: BaseLayout,
};

const components = { BaseLayout, SideMenu };

const MENU = `
<template #menu>
  <side-menu></side-menu>
</template>`;

const HEADER = `
<header class="base-layout__header">
  <div style="height: 60px; background-color: #fff;"></div>
</header>`;

const CONTENT = '<div style="padding: 20px">Content</div>';

export const Simple = () => ({
  components,
  template: `
    <base-layout>
      ${CONTENT}
    </base-layout>
  `,
});

export const WithHeader = () => ({
  components,
  template: `
    <base-layout>
      ${HEADER}
      ${CONTENT}
    </base-layout>
  `,
});

export const WithMenu = () => ({
  components,
  template: `
    <base-layout>
      ${MENU}
      ${CONTENT}
    </base-layout>
  `,
});

export const WithMenuAndHeader = () => ({
  components,
  template: `
    <base-layout>
      ${MENU}
      ${HEADER}
      ${CONTENT}
    </base-layout>
  `,
});

export const WithMenuHeaderAndBody = () => ({
  components,
  template: `
    <base-layout>
      ${MENU}
      ${HEADER}
      <div class="base-layout__body">
        <div class="form-section" style="height: 1000px;">FORM SECTION</div>
      </div>
    </base-layout>
  `,
});
