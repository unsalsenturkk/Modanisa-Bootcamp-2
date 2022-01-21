import FavoritesPage from "@/views/FavoritesPage";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import API from "@/api";
import Vuex from "vuex";
import flushPromises from "flush-promises";

jest.mock("@/api")

describe("FavoritesPage.vue",()=>{
    it('sanity test',  () => {
        return
    });

    describe("FavoritesPage unit tests",()=>{

        it('should FavoritePage exists',  async () => {
            const mockData = {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
            const mockResponse = [
                mockData
            ]
            API.getVideoList.mockResolvedValue(mockResponse)

            const localVue = createLocalVue()
            localVue.use(Vuex)

            const getters = {
                getSearchText : () => "",
                getFavoriteVideos : () => [mockData]
            }


            const store = new Vuex.Store({
                getters
            })

            const wrapper = shallowMount(FavoritesPage,{
                localVue,
                store
            })

            await flushPromises()
            expect(wrapper.exists()).toBeTruthy()
        });
    })

    describe("FavoritesPage snapshot test",()=>{
        it('should renders FavoritePage correclty',  async () => {
            const mockData = {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
            const mockResponse = [
                mockData
            ]
            API.getVideoList.mockResolvedValue(mockResponse)

            const localVue = createLocalVue()
            localVue.use(Vuex)

            const getters = {
                getSearchText : () => "",
                getFavoriteVideos : () => [mockData]
            }


            const store = new Vuex.Store({
                getters
            })

            const wrapper = shallowMount(FavoritesPage,{
                localVue,
                store
            })

            await flushPromises()
            expect(wrapper.element).toMatchSnapshot()
        });
    })
})