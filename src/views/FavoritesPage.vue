<template>
  <div
      id="favoritespage"
      class="m-flex"
  >
    <div
        id="favorite-contents"
        class="m-flex
               m-flex-column"
    >
      <FavoriteContent
          v-for="video in filteredFavoriVideos"
          :key="video.id"
          :video="video"
      >
      </FavoriteContent>
    </div>
  </div>
</template>

<script>
import FavoriteContent from "@/components/FavoriteContent";
import API from "@/api";
import {mapGetters} from "vuex"

export default {
  name: "FavoritesPage",
  data() {
    return {
      videos: []
    }
  },
  components: {
    FavoriteContent
  },
  async mounted() {
    this.videos = await API.getVideoList();
  },
  computed: {
    ...mapGetters({
      getFavoriteVideos: "getFavoriteVideos",
      textSearch: 'getSearchText'
    }),
    filteredFavoriVideos() {
      return this.getFavoriteVideos.filter(
          video => video.title.includes(this.textSearch)
      );
    }

  },


}
</script>

<style scoped>
#favoritespage {
  width: 50%;
  height: auto;
}

#favorite-contents {
  width: 100%;
}
</style>