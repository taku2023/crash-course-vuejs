import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Login component", () => {
  it("button is disabled when email is not valid", async () => {
    const wrapper = mount(Login);
    await wrapper
      .find("input[type='email']")
      .setValue("invalid#email@gmail.com");
    await wrapper.find("input[type='password']").setValue("longpassw0rd");
    expect(wrapper.find("button").attributes().disabled).toBeDefined();
  });

  it("button is disabled when password is not valid", async ()=>{
	const wrapper = mount(Login)
    await wrapper
      .find("input[type='email']").setValue("valid@gmail.com")
	await wrapper.find('input[type="password"]').setValue('sh0rt')
	expect(wrapper.find("button").attributes().disabled).toBeDefined();
  })
});
