import '../styles/base.css';
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
