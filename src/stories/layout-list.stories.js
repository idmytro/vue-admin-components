import '../styles/base.css';
import '../styles/buttons.css';
import '../styles/element-icons.css';
import { LayoutList, LayoutHeader } from '../..';

export default {
  title: 'Components/layout-list',
  component: LayoutList,
};

const content = `
  <template #main-body>
    <div style="background-color: pink; height: 1000px">BODY</div>
  </template>
  <template #main-footer>
    <div style="background-color: pink; ">FOOTER</div>
  </template>
`;

const contentWithoutMainFooter = `
  <template #main-body>
    <div style="background-color: pink; height: 1000px">BODY</div>
  </template>
`;

const Template = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list>${content}</layout-list>
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
