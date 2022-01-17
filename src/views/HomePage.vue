<template>
  <div
      id="homepage"
      class="m-flex"
  >
    <div
        id="contents"
        class="m-flex
             m-flex-wrap
             m-justify-content-space-around"
    >
      <Content
          v-for="video in filteredVideos"
          :key="video.id"
          :video="video"
      >
      </Content>
    </div>
  </div>
</template>

<script>
import Content from "@/components/Content";
import API from "@/api";
import {mapGetters} from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      videos: [],

    }
  },
  components: {
    Content
  },
  async mounted() {
    this.videos = await API.getVideoList();
  },
  computed: {
    ...mapGetters({
          textSearch: 'getSearchText'
        }
    ),
    filteredVideos(){
      return this.videos.filter(
          video => video.title.includes(this.textSearch)
      );
    }
  },
  watch: {

  }

}
</script>

<style scoped>
#homepage {
  width: 70%;
  height: auto;
}

#contents {
  width: 100%;
}

</style>