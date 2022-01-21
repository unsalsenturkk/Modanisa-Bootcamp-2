import {createLocalVue, shallowMount} from "@vue/test-utils";
import WatchPage from "@/views/WatchPage";
import VueRouter from "vue-router";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const $route = {
    query: {id: 1}
}

describe("WatchPage.vue", () => {

    it('sanity test ', () => {
        return
    });

    describe("WatchPage unit test", () => {
        it('should component exists', () => {
            const wrapper = shallowMount(WatchPage, {
                localVue,
                router
            });

            expect(wrapper.exists()).toBeTruthy()
        });

        it('should component exists with id query', () => {
            const wrapper = shallowMount(WatchPage, {
                mocks: {
                    $route
                }
            });

            expect(wrapper.exists()).toBeTruthy()
        });
    })

    describe("WatchPage Snapshot", () => {
        it('renders WatchPage correctly ', () => {
            const wrapper = shallowMount(WatchPage, {
                mocks: {
                    $route
                }
            });
            expect(wrapper.element).toMatchSnapshot()
        });

    })
})