import Toggle from "./Toggle.vue";
import { Meta, StoryFn } from "@storybook/vue3";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
    disabled: { control: false },
  },
};

export default meta;

const Template: StoryFn<typeof Toggle> = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  modelValue: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Unchecked",
  modelValue: false,
};

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  label: "Disabled and Unchecked",
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Disabled and Checked",
  modelValue: true,
  disabled: true,
};
