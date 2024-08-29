import { type Preview, setup } from "@storybook/vue3";
import { Button } from "../src/components";
import "../src/index.css";

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

setup((app) => {
  app.component("Button", Button);
});

export default preview;
