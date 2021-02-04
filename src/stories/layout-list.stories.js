import '../styles/base.css';
import '../styles/buttons.css';
import '../styles/element-icons.css';
import { LayoutList, LayoutHeader } from '../..';

export default {
  title: 'Components/layout-list',
  component: LayoutList,
};

const Template = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list></layout-list>
    <div>
  `,
});

export const WithAside = Template.bind({});

export const WithoutAside = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list :hasAside="false"></layout-list>
    <div>
  `,
});

export const FoldableAside = () => ({
  components: { LayoutList, LayoutHeader },
  template: `
    <div>
      <layout-header></layout-header>
      <layout-list foldable-aside></layout-list>
    <div>
  `,
});
