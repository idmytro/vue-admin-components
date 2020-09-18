import BaseLayoutList from '../components/base-layout-list/base-layout-list.vue';
import '../styles/base.css';

export default {
  title: 'Components/base-layout-list',
  component: BaseLayoutList,
};

const Template = () => ({
  components: { BaseLayoutList },
  template: `
    <base-layout-list>
      <div>MAIN</div>
    </base-layout-list>
  `,
});

export const WithoutAside = Template.bind({});
