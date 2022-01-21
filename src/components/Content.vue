<template>
  <div
      id="content"
      class="m-flex
               m-flex-column"
  >
    <input
        id="favoriteButton"
        class="favorite-button"
        :class="{'favorite':this.isFavorite(video.id)}"
        @click="favoriteBtnClicked"
        type="submit"
        value=""
    >
    <div
        id="img"
        class="m-flex
        m-flex-column"
        @mouseover="displayHoverImg"
        @mouseleave="displayCoverImg"
    >
      <img
          v-show="hoverImage === false"
          :src="video.coverImage"
          :alt="video.title"
      >
      <img
          v-show="hoverImage === true"
          :src="video.hoverImage"
          :alt="video.title"
          @click="navigateToFavoritePage"
      >
    </div>

    <div
        id="details"
        class="m-flex"
    >
      <img
          id="avatar"
          :src="video.ownerImage"
      >
      <div
          id="meta"
          class="m-flex
                   m-flex-column"

      >
        <div
            id="title"
        >
          {{ video.title }}
        </div>
        <div
            id="ownerName"
        >
          {{ video.ownerName }}
        </div>
        <div
            id="metadata-line"
            class="m-flex"
        >
           <span
               id="viewCount"
           >
             {{ video.viewCount }} B görüntüleme
           </span>
          <span
              id="separator"
          >
              •
            </span>
          <span
              id="publishDateInMonth"
          >
              {{ video.publishDateInMonth }} ay önce
           </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  name: "Content",
  props: {video: Object},
  data() {
    return {
      hoverImage: false,
    }
  },
  methods: {
    displayHoverImg() {
      this.hoverImage = true;
    },
    displayCoverImg() {
      this.hoverImage = false;
    },
    navigateToFavoritePage() {
      this.$router.push({name: "Watch", query: {id: this.video.id}});
    },
    favoriteBtnClicked() {
      this.$store.dispatch("favoriteStatusChanged", this.video)
    }

  },
  watch: {},
  mounted() {

  },
  computed:{
    ...mapGetters({
      isFavorite : "isFavorite"
    }),
  }
}
</script>

<style scoped>

#content {
  width: 360px;
  height: 200px;
  margin-top: 20px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 50px;
  position: relative;

}

#img {
  max-width: 99%;
  max-height: 80%;
}


#avatar {
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-top: 12px;
  margin-right: 12px;
}

#meta {
  margin-top: 12px;
  text-align: left;
}

#title {
  font-weight: bold;
}

#ownerName, #metadata-line {
  color: grey;
}

#separator {
  margin: 0 4px;
}

.favorite-button {
  position: absolute;
  top: 0;
  right: 0;
  background: url('data:image/svg+xml;utf8,<svg fill="red" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>');
  width: 48px;
  height: 48px;
  cursor: pointer;
  border: none;
  margin: 4px;
  transition: background 300ms ease-in-out;
}

.favorite {
background: url('data:image/svg+xml;utf8,<svg fill="red" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>');
}

img {
  width: 100%;
  max-height: 100%;
  cursor: pointer;
}

</style>