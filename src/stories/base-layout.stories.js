import '../styles/base.css';
import { BaseLayout, SideMenu } from '../..';

export default {
  title: 'Components/base-layout',
  component: BaseLayout,
};

const Template = () => ({
  components: { BaseLayout },
  template: `
    <base-layout>
      <div style="padding: 20px">MAIN</div>
    </base-layout>
  `,
});

export const WithoutMenu = Template.bind({});

export const WithMenu = () => ({
  components: { BaseLayout, SideMenu },
  template: `
    <base-layout>
      <template slot="menu">
        <side-menu></side-menu>
      </template>
      <div style="padding: 20px">MAIN</div>
    </base-layout>
  `,
});
