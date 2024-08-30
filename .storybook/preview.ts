import { type Preview, setup } from "@storybook/vue3";
import "../src/index.css";
import { useInitAppComponents } from "../src/components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const { initGlobalComponents } = useInitAppComponents();

setup((app) => {
  initGlobalComponents(app);
});

export default preview;
