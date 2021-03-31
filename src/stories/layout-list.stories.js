import '../styles/base.css';
import '../styles/buttons.css';
import '../styles/element-icons.css';
import { LayoutList, LayoutHeader } from '../..';

const components = { LayoutList, LayoutHeader };

const borderStyle = 'border: 1px dashed pink';

const aside = `
  <template #aside-body>
    <div class="pl-$space-layout w-$width-aside-inner" style="${borderStyle}; height: 500px">
      <input class="w-full h-40px focus:shadow-$box-shadow-focus outline-none border-none bg-white rounded-$rounded-form-item">
    </div>
  </template>
  <template #aside-footer>
    <div class="pl-$space-layout w-$width-aside-inner" style="${borderStyle}; height: 100%">FOOTER</div>
  </template>
`;

const content = `
  <template #main-body>
    <div style="${borderStyle}; height: 1000px">BODY</div>
  </template>
  <template #main-footer>
    <div style="${borderStyle}; height: 100%">FOOTER</div>
  </template>
`;

const contentWithoutMainFooter = `
  <template #main-body>
    <div style="${borderStyle}; height: 1000px">BODY</div>
  </template>
`;

const Template = () => ({
  components,
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list>
        ${content}
        ${aside}
      </layout-list>
    </div>
  `,
});

// export const WithAside = Template.bind({});

export const WithAside = () => ({
  components,
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list>
        ${content}
        ${aside}
      </layout-list>
    </div>
  `,
});

export const WithoutAside = () => ({
  components,
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list :has-aside="false">${content}</layout-list>
    <div>
  `,
});

export const FoldableAside = () => ({
  components,
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list foldable-aside>${content}</layout-list>
    <div>
  `,
});

export const WithoutAsideAndMainFooter = () => ({
  components,
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list :has-aside="false">${contentWithoutMainFooter}</layout-list>
    <div>
  `,
});

export default {
  title: 'Components/layout-list',
  component: LayoutList,
};
