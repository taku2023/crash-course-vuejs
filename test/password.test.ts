import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Password from "@/components/Password.vue";

describe("Password component", () => {
  it("Shows error when input invalid password", async () => {
    const wrapper = mount(Password);
    const input = wrapper.find("input[type='password']");
    await input.setValue("sh0rt");
    expect(wrapper.find("label.is-error").text()).toBe(
      "contains alphabets and digits, 6 or more characters"
    );
  });

  it("shows no error label", async () => {
    const wrapper = mount(Password);
    const input = wrapper.find("input[type='password']");
    await input.setValue("longpassw0rd");
    expect(wrapper.find("label.is-error").isVisible()).toBeFalsy();
  });
});
