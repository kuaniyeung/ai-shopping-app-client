import { App } from "vue";
import { Button, TextInput } from "../../";

export default () => {
  const initGlobalComponents = (app: App<Element>) => {
    app.component("Button", Button);
    app.component("TextInput", TextInput);
  };
  return {
    initGlobalComponents,
  };
};
