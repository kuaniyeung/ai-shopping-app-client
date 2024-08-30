import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { Button, ButtonThemes } from "..";

const initWrapper = (options = {}) => {
  const wrapper = mount(Button, {
    props: {
      label: "Hey darling",
    },
    ...options,
  });
  return wrapper;
};

describe("Button", () => {
  let wrapper: VueWrapper<InstanceType<typeof Button>>;
  const getLabel = () => wrapper.find("[data-test=label]");
  const getLoader = () => wrapper.find("[data-test=loader]");

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    test(`should have correct attrs && props`, async () => {
      const attrs = wrapper.attributes();
      expect(attrs).toHaveProperty("class", `btn ${ButtonThemes.PRIMARY}`);
    });

    test(`should be disabled if disabled attribute is passed`, async () => {
      expect(wrapper.attributes()).not.toHaveProperty("disabled");
      mountComponent({ attrs: { disabled: true } });
      expect(wrapper.attributes()).toHaveProperty("disabled");
    });

    describe("label", () => {
      test(`should render with correct text`, () => {
        expect(getLabel().exists()).toBeTruthy();
        expect(getLabel().text()).toEqual(wrapper.props().label);
      });
      test(`should not render if props.label is falsy`, async () => {
        wrapper.setProps({ label: "" });
        await wrapper.vm.$nextTick();
        expect(getLabel().exists()).toBeFalsy();
      });
    });

    describe("loader", () => {
      test(`should render if props.loading is truthy`, async () => {
        expect(getLoader().exists()).toBeFalsy();
        wrapper.setProps({ loading: true });
        await wrapper.vm.$nextTick();
        expect(getLoader().exists()).toBeTruthy();
      });
    });

    describe("$slots", () => {
      const icon = '<i class="icon"></i>';
      describe("slots.iconStart", () => {
        beforeEach(() => {
          mountComponent({ slots: { iconStart: icon } });
        });
        test(`should render if $slots.iconStart is passed to the component`, async () => {
          expect(wrapper.html()).contains(icon);
        });

        test(`should not render if props.loading is truthy`, async () => {
          wrapper.setProps({ loading: true });
          await wrapper.vm.$nextTick();
          expect(wrapper.html()).not.contains(icon);
        });
      });

      describe("slots.iconEnd", () => {
        beforeEach(() => {
          mountComponent({ slots: { iconEnd: icon } });
        });
        test(`should render if $slots.iconEnd is passed to the component`, async () => {
          expect(wrapper.html()).contains(icon);
        });

        test(`should not render if props.loading is truthy`, async () => {
          wrapper.setProps({ loading: true });
          await wrapper.vm.$nextTick();
          expect(wrapper.html()).not.contains(icon);
        });
      });
    });
  });
});
