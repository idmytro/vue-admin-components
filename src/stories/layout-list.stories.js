import LayoutList from '../components/layout-list/layout-list.vue';
import '../styles/base.css';

export default {
  title: 'Components/layout-list',
  component: LayoutList,
};

const Template = () => ({
  components: { LayoutList },
  template: `
    <layout-list>
      <div>MAIN</div>
    </layout-list>
  `,
});

export const WithoutAside = Template.bind({});
