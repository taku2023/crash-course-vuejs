import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import EmailAddress from "@/components/EmailAddress.vue";

describe("EmailAddress component ", () => {
  test("shows error when input invalid email", async () => {
    const wrapper = mount(EmailAddress);
    const input = wrapper.find("input[type='email']");
    await input.setValue("invalid#email@gmail.com");
    expect(wrapper.find("label").text()).toBe("contains only alphabet");
  });

  test("shows no error label", async () => {
    const wrapper = mount(EmailAddress);
    const input = wrapper.find("input[type='email']");
    await input.setValue("valid@gmail.com");
    expect(wrapper.find("label").isVisible()).toBeFalsy();
  });
});
