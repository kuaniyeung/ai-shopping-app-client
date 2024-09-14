import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { Accordion } from "..";

const initWrapper = (options = {}) => {
  const wrapper = mount(Accordion, {
    ...options,
  });
  return wrapper;
};

describe("Accordion", () => {
  let wrapper: VueWrapper<InstanceType<typeof Accordion>>;

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    test("should exist", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
