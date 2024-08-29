import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "..";

describe("Button", () => {
  describe("Template", () => {
    test(`should render with correct text`, async () => {
      const wrapper = mount(Button, {
        props: {
          label: "Hey darling",
        },
      });
      expect(wrapper.text()).toBe(wrapper.props().label);
    });
  });
});
