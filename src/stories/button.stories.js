import '../styles/element-ui/index.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/buttons.css';
import '../../storybook-example/button.css';

export default {
  title: 'Components/button',
};

export const Default = () => ({
  template: `
    <div style="padding: 20px">
      <button type="button" class="secondary-button">Кнопка</button>
    </div>
  `,
});

export const DefaultOnWhite = () => ({
  template: `
    <div style="padding: 20px; background-color: #fff;">
      <button type="button" class="secondary-button">Кнопка</button>
    </div>
  `,
});

export const BackgroundButton = () => ({
  template: `
    <div style="padding: 20px; background-color: #fff;">
      <button type="button" class="background-button">Кнопка</button>
      <button type="button" disabled class="background-button">Disabled</button>
    </div>
  `,
});

export const IconButton = () => ({
  template: `
    <div style="padding: 20px; background-color: #fff;">
      <button type="button" class="background-button icon-button">
        <i class="el-icon-close"></i>
      </button>
    </div>
  `,
});
