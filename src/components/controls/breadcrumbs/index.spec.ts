import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { Breadcrumbs } from "..";

const initWrapper = (options = {}) => {
  const wrapper = mount(Breadcrumbs, {
    ...options,
  });
  return wrapper;
};

describe("Breadcrumbs", () => {
  let wrapper: VueWrapper<InstanceType<typeof Breadcrumbs>>;

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
