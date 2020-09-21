import { SideMenu } from '../..';

export default {
  title: 'Components/side-menu',
  component: SideMenu,
};

const Template = () => ({
  components: { SideMenu },
  template: '<side-menu></side-menu>',
});

export const Default = Template.bind({});
