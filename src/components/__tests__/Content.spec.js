import {createLocalVue, shallowMount} from "@vue/test-utils";
import Content from "@/components/Content";
import Vuex from "vuex";
import content from "@/components/Content";

describe("Content.vue", () => {

    it('sanity test ', () => {
        return
    });

    describe("Content unit test", () => {
        describe("exists check", () => {
            it('should content component exists', () => {
                const localVue = createLocalVue();
                localVue.use(Vuex)

                const getters = {
                    isFavorite: () => (videoid) => {
                        return false
                    }
                }

                const video = {
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

                const store = new Vuex.Store({
                    getters
                })

                const wrapper = shallowMount(Content, {
                    localVue,
                    store,
                    propsData: {
                        video
                    }
                })

                expect(wrapper.exists()).toBeTruthy()
            });
            it('should render favorite button', () => {
                const localVue = createLocalVue();
                localVue.use(Vuex)

                const getters = {
                    isFavorite: () => (videoid) => {
                        return false
                    }
                }

                const video = {
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

                const store = new Vuex.Store({
                    getters
                })

                const wrapper = shallowMount(Content, {
                    localVue,
                    store,
                    propsData: {
                        video
                    }
                })
                const favoriteButton = wrapper.find("#favoriteButton")
                expect(favoriteButton.exists()).toBeTruthy()
                expect(favoriteButton.text()).toEqual("")

            })
            it('should render img', () => {
                const localVue = createLocalVue();
                localVue.use(Vuex)

                const getters = {
                    isFavorite: () => (videoid) => {
                        return false
                    }
                }

                const video = {
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

                const store = new Vuex.Store({
                    getters
                })

                const wrapper = shallowMount(Content, {
                    localVue,
                    store,
                    propsData: {
                        video
                    }
                })

                const img = wrapper.find("#img")
                expect(img.exists()).toBeTruthy()

            })
            it('should render details', () => {
                const localVue = createLocalVue();
                localVue.use(Vuex)

                const getters = {
                    isFavorite: () => (videoid) => {
                        return false
                    }
                }

                const video = {
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

                const store = new Vuex.Store({
                    getters
                })

                const wrapper = shallowMount(Content, {
                    localVue,
                    store,
                    propsData: {
                        video
                    }
                })

                const details = wrapper.find("#details")
                expect(details.exists()).toBeTruthy()
            })
        })
        describe('check functionality', () => {
            it("check displayHoverImg functionality", () => {
                const localThis = {
                    hoverImage: false,
                }
                content.methods.displayHoverImg.call(localThis)
                expect(localThis.hoverImage).toBeTruthy()
            })
            it("check displayCoverImg functionality", () => {
                const localThis = {
                    hoverImage: false,
                }
                content.methods.displayCoverImg.call(localThis)
                expect(localThis.hoverImage).toBeFalsy()
            })
            it("check navigateToFavoritePage functionality", () => {
                const video = {
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
                const localThis = {
                    video,
                    $router: {
                        push: jest.fn()
                    },
                }
                content.methods.navigateToFavoritePage.call(localThis)
                expect(localThis.$router.push).toBeCalled()
            })
            it("check favoriteBtnClicked functionality", () => {
                const video = {
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
                const dispatch = jest.fn()
                const localThis = {
                    video,
                    $store: {
                        dispatch
                    },
                }
                content.methods.favoriteBtnClicked.call(localThis)
                expect(dispatch).toHaveBeenCalledWith("favoriteStatusChanged",video)
            })
        })
    })
    describe("Content snapshot test", () => {
        it('should renders content correctly', () => {
            const localVue = createLocalVue();
            localVue.use(Vuex)

            const getters = {
                isFavorite: () => (videoid) => {
                    return false
                }
            }

            const video = {
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

            const store = new Vuex.Store({
                getters
            })

            const wrapper = shallowMount(Content, {
                localVue,
                store,
                propsData: {
                    video
                }
            })

            expect(wrapper.element).toMatchSnapshot()
        });
    })
})