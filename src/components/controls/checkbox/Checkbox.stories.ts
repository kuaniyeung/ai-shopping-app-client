import Checkbox from "./Checkbox.vue";
import { Meta, StoryFn } from "@storybook/vue3";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof Checkbox> = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
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
