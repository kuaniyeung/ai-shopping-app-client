import Button from "./Button.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import { ButtonStyles } from "./enums";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    loading: { control: "boolean" },
    iconStart: { control: "text" },
    iconEnd: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    const loading = ref(args.loading);
    return { args, loading };
  },
  template: `
    <Button v-bind="args">
      <template #iconStart>
        <span v-if="args.iconStart">{{ args.iconStart }}</span>
      </template>
      <template #iconEnd>
        <span v-if="args.iconEnd">{{ args.iconEnd }}</span>
      </template>
    </Button>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading...",
  loading: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "With Icons",
  iconStart: "🔍",
  iconEnd: "🚀",
};

export const IconButton = Template.bind({});
IconButton.args = {
  iconStart: "🔍",
  class: ButtonStyles.ICON,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Disabled",
  //@ts-ignore
  disabled: true,
};
