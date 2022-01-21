import {shallowMount} from "@vue/test-utils";
import Header from "@/components/Header";

describe("Header.vue", () => {

    it('sanity test ', () => {
        return
    });

    describe("Header unit test", () => {
        it('should Header component exists', () => {
            const wrapper = shallowMount(Header)
            expect(wrapper.exists()).toBeTruthy()
        });

        it('when text changes should save to store',  () => {
            const mock = jest.fn();
            const localThis = {
                $store : {
                    commit : mock
                }
            }

            Header.methods.onTextChange.call(localThis,"<serachtext>")
            expect(mock).toBeCalledWith("changedSearch","<serachtext>")
        });
    })
    describe("Header snapshot test", () => {
        it('should renders Header correctly', () => {
            const wrapper = shallowMount(Header)
            expect(wrapper.element).toMatchSnapshot()
        });
    })
})