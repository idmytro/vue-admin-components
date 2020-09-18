import '../styles/variables.css';
import '../styles/base.css';
import PageHeader from '../components/page-header/page-header.vue';

export default {
  title: 'Components/page-header',
  component: PageHeader,
};

const Template = () => ({
  components: { PageHeader },
  template: '<page-header title="Page Title"></page-header>',
});

export const Default = Template.bind({});
