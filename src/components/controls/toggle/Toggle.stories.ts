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

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
