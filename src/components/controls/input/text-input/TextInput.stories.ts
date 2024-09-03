import TextInput from "./TextInput.vue";
import { Meta, StoryFn } from "@storybook/vue3";

// Define your story metadata
const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    placeholder: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof TextInput> = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: '<TextInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type here...",
};

export const DisabledTextInput = Template.bind({});
DisabledTextInput.args = {
  placeholder: "Disabled",
  //@ts-ignore
  disabled: true,
};
