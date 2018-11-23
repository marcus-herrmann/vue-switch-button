import { shallowMount } from "@vue/test-utils";
import SwitchButton from "../src/components/SwitchButton.vue";

describe("SwitchButton.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SwitchButton);
  });

  it("initializes unchecked by default", () => {
    expect(wrapper.find("button").attributes("aria-checked")).toBe("false");
  });

  it("reads prop 'onLabel'", () => {
    wrapper.setProps({ onLabel: "An" });
    expect(wrapper.find("button span:first-child").text()).toBe("An");
  });

  it("reads prop 'offLabel'", () => {
    wrapper.setProps({ offLabel: "Deactivated" });
    expect(wrapper.find("button span:last-child").text()).toBe("Deactivated");
  });

  it("reacts on click with toggling", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.find("button").attributes("aria-checked")).toBe("true");
  });

});
