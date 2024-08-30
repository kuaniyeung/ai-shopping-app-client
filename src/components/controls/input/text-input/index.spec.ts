import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { TextInput } from "..";

const initWrapper = (options = {}) => {
  const wrapper = mount(TextInput, {
    props: {
      placeholder: "Type Here...",
    },
    ...options,
  });
  return wrapper;
};

describe("TextInput", () => {
  let wrapper: VueWrapper<InstanceType<typeof TextInput>>;

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    test(`should have correct attrs && props`, async () => {
      expect(wrapper.attributes()).toHaveProperty(
        "placeholder",
        wrapper.props().placeholder
      );
    });

    test(`should be disabled if disabled attribute is passed`, async () => {
      expect(wrapper.attributes()).not.toHaveProperty("disabled");
      mountComponent({ attrs: { disabled: true } });
      expect(wrapper.attributes()).toHaveProperty("disabled");
    });
  });

  describe("Emits", () => {
    describe("update:modelValue", () => {
      test(`should emit `, async () => {
        const value = "Testing";
        wrapper.find("input").setValue(value);
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted("update:modelValue")).toEqual([[value]]);
      });
    });
  });
});
