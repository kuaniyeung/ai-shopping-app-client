import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { AccordionTab } from "..";

const initWrapper = (options = {}) => {
  const wrapper = mount(AccordionTab, {
    props: {
      title: "Click to open and close",
    },
    ...options,
  });
  return wrapper;
};

describe("AccordionTab", () => {
  let wrapper: VueWrapper<InstanceType<typeof AccordionTab>>;
  const getTitle = () => wrapper.find("[data-test=title]");

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    describe("title", () => {
      test(`should render with correct text`, () => {
        expect(getTitle().exists()).toBeTruthy();
        expect(getTitle().text()).toEqual(wrapper.props().title);
      });
    });
  });
});
