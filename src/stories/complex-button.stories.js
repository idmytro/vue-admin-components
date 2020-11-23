import '../styles/element-ui/index.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/buttons.css';
import { ComplexButton } from '../..';

const components = { ComplexButton };

export default {
  title: 'Components/complex-button',
  component: ComplexButton,
};

const Template = () => ({
  components,
  template: `
    <div style="margin: 20px">
      <complex-button
        icon="el-icon-plus"
        label="Добавить"
      ></complex-button>
    </div>
  `,
});

export const Default = Template.bind({});

export const Regular = () => ({
  components,
  template: `
    <div style="margin: 20px">
      <complex-button
        theme="regular"
        icon="el-icon-plus"
        label="Добавить"
      ></complex-button>
    </div>
  `,
});

export const Accent = () => ({
  components,
  template: `
    <div style="margin: 20px">
      <complex-button
        theme="accent"
        icon="el-icon-plus"
        label="Добавить"
      ></complex-button>
    </div>
  `,
});

export const Success = () => ({
  components,
  template: `
    <div style="margin: 20px">
      <complex-button
        theme="success"
        icon="el-icon-plus"
        label="Добавить"
      ></complex-button>
    </div>
  `,
});

export const Danger = () => ({
  components,
  template: `
    <div style="margin: 20px">
      <complex-button
        theme="danger"
        icon="el-icon-plus"
        label="Добавить"
      ></complex-button>
    </div>
  `,
});
