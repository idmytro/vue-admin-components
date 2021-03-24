import '../styles/base.css';
import '../styles/buttons.css';
import '../styles/element-icons.css';
import { LayoutList, LayoutHeader } from '../..';

export default {
  title: 'Components/layout-list',
  component: LayoutList,
};

const aside = `
  <template #aside-body>
    <div style="border: 1px dashed pink; height: 500px">BODY</div>
  </template>
  <template #aside-footer>
    <div style="border: 1px dashed pink; height: 100% ">FOOTER</div>
  </template>
`;

const content = `
  <template #main-body>
    <div style="border: 1px dashed pink; height: 1000px">BODY</div>
  </template>
  <template #main-footer>
    <div style="border: 1px dashed pink; height: 100%">FOOTER</div>
  </template>
`;

const contentWithoutMainFooter = `
  <template #main-body>
    <div style="border: 1px dashed pink; height: 1000px">BODY</div>
  </template>
`;

const Template = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list>
        ${content}
        ${aside}
      </layout-list>
    <div>
  `,
});

export const WithAside = Template.bind({});

export const WithoutAside = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list :has-aside="false">${content}</layout-list>
    <div>
  `,
});

export const FoldableAside = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list foldable-aside>${content}</layout-list>
    <div>
  `,
});

export const WithoutAsideAndMainFooter = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list :has-aside="false">${contentWithoutMainFooter}</layout-list>
    <div>
  `,
});
