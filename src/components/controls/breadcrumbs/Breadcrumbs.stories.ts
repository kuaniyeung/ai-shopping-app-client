import { Meta, StoryFn } from "@storybook/vue3";
import Breadcrumbs from "./Breadcrumbs.vue";
import BreadcrumbsTab from "./components/breadcrumbs-tab/BreadcrumbsTab.vue";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
};

export default meta;

const BreadcrumbsTemplate: StoryFn = (args) => ({
  components: { Breadcrumbs, BreadcrumbsTab },
  setup() {
    return { args };
  },
  template: `<Breadcrumbs v-bind="args">
    <BreadcrumbsTab
      v-for="item in test"
      :key="item.title"
      :title="item.title"
      :disabled="item.disabled"
      :href="item.href"
    />
  </Breadcrumbs>`,
  data() {
    return {
      test: [
        {
          title: "Hyperlink enabled",
          disabled: false,
          href: "https://test1.com",
        },
        { title: "Hyperlink disabled", disabled: true },
        {
          title: "Hyperlink enabled",
          disabled: false,
          href: "https://test2.com",
        },
      ],
    };
  },
});

export const Default = BreadcrumbsTemplate.bind({});
Default.args = {};
