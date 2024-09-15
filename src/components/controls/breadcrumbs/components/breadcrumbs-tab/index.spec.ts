import { test, expect, describe, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { BreadcrumbsTab } from "..";

const disabledLinkProps = {
  title: "Tab title",
  disabled: true,
};

const enabledLinkProps = {
  disabled: false,
  title: "Tab 2",
  href: "tab2.com",
};

const initWrapper = (options = {}) => {
  const wrapper = mount(BreadcrumbsTab, {
    props: disabledLinkProps,
    ...options,
  });
  return wrapper;
};

describe("BreadcrumbsTab", () => {
  let wrapper: VueWrapper<InstanceType<typeof BreadcrumbsTab>>;
  const getTitleEnabledLink = () =>
    wrapper.find("[data-test=title-enabled-link]");
  const getTitleDisabledLink = () =>
    wrapper.find("[data-test=title-disabled-link]");

  const mountComponent = (options = {}) => (wrapper = initWrapper(options));

  beforeEach(() => {
    mountComponent();
  });

  describe("Template", () => {
    describe("title", () => {
      test(`should render with correct text when hyperlink is disabled`, () => {
        expect(getTitleDisabledLink().exists()).toBeTruthy();
        expect(getTitleDisabledLink().text()).toEqual(wrapper.props().title);
      });

      test(`should render with correct text when hyperlink is enabled`, () => {
        mountComponent({
          props: enabledLinkProps,
        });
        expect(getTitleEnabledLink().exists()).toBeTruthy();
        expect(getTitleEnabledLink().text()).toEqual(wrapper.props().title);
      });
    });

    describe("href link", () => {
      test(`should not have <a> if disabled is true`, () => {
        expect(getTitleDisabledLink().exists()).toBeTruthy();
      });

      test(`should have <a> and href if disabled is false`, () => {
        mountComponent({
          props: enabledLinkProps,
        });
        expect(getTitleEnabledLink().exists()).toBeTruthy();
        expect(getTitleEnabledLink().attributes("href")).toEqual("tab2.com");
      });
    });
  });
});
