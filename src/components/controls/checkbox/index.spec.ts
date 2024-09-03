import { mount, VueWrapper } from "@vue/test-utils";
import { Checkbox } from "..";
import { beforeEach, describe, expect, test } from "vitest";

const initWrapper = (options = {}) => {
  const wrapper = mount(Checkbox, {
    props: {
      label: "Default",
    },
    ...options,
  });
  return wrapper;
};

describe("Checkbox", () => {
  let wrapper: VueWrapper<InstanceType<typeof Checkbox>>;
  const getLabel = () => wrapper.find("[data-test=label]");

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    describe("label", () => {
      test(`should render with correct text`, () => {
        expect(getLabel().exists()).toBeTruthy();
        expect(getLabel().text()).toEqual(wrapper.props().label);
      });
    });

    describe("Emits", () => {
      describe("update:modelValue", () => {
        test(`should emit`, async () => {
          const value = true;
          wrapper.find("input").setValue(value);
          await wrapper.vm.$nextTick();
          expect(wrapper.emitted("update:modelValue")).toEqual([[value]]);
        });
      });
    });
  });
});
