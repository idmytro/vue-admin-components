import { storiesOf } from '@storybook/vue';
import StoryRouter from '../storybook/router';

import App from '../App.vue';

import router from '../router';

storiesOf('App', module)
  .addDecorator(StoryRouter({}, router.options))
  .add('app', () => ({
    render: h => h(App),
  }));
