import {shallowMount} from "@vue/test-utils";
import favoriteContent from "@/components/FavoriteContent";

describe("FavoriteContent.vue",()=>{

    it('sanity test ',  () => {
        return
    });

    describe("Favorite unit test",()=>{
        describe("exists check", () => {
            it('should FavoriteContent component exists', () => {

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

                const wrapper = shallowMount(favoriteContent, {
                    propsData: {
                        video
                    }
                })

                expect(wrapper.exists()).toBeTruthy()
            });
            it('should render favorite-img', () => {

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

                const wrapper = shallowMount(favoriteContent, {
                    propsData: {
                        video
                    }
                })

                const favorite_img = wrapper.find("#favorite-img")
                expect(favorite_img.exists()).toBeTruthy()

            })
            it('should render favorite-details', () => {
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

                const wrapper = shallowMount(favoriteContent, {
                    propsData: {
                        video
                    }
                })

                const favorite_details = wrapper.find("#favorite-details")
                expect(favorite_details.exists()).toBeTruthy()
            })
        })
        describe('check functionality', () => {
            it("check displayHoverImg functionality", () => {
                const localThis = {
                    hoverImage: false,
                }
                favoriteContent.methods.displayHoverImg.call(localThis)
                expect(localThis.hoverImage).toBeTruthy()
            })
            it("check displayCoverImg functionality", () => {
                const localThis = {
                    hoverImage: false,
                }
                favoriteContent.methods.displayCoverImg.call(localThis)
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
                favoriteContent.methods.navigateToFavoritePage.call(localThis)
                expect(localThis.$router.push).toBeCalled()
            })
        })
    })
    describe("Favorite snapshot test",()=>{
        it('should renders FavoriteContent correctly', () => {

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

            const wrapper = shallowMount(favoriteContent, {
                propsData: {
                    video
                }
            })

            expect(wrapper.element).toMatchSnapshot()
        });
    })
})