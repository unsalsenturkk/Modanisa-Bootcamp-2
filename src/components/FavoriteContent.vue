<template>
  <div
      id="favorite-content"
      class="m-flex
             m-flex-row"
  >
    <div
        id="favorite-img"
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
        id="favorite-details"
        class="m-flex
               m-flex-column
               m-justify-content-space-around"
    >
      <div
          id="title"
          class="m-flex"
      >
        {{ video.title }}
      </div>
      <div
          id="meta"
          class="m-flex
                m-flex-column"
      >

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
      <div
          id="owner"
          class="m-flex"
      >
        <img
            id="avatar"
            :src="video.ownerImage"
        >
        <div
            id="ownerName"
        >
          {{ video.ownerName }}
        </div>
      </div>
      <div
          id="description"
          class="m-flex"
      >
        {{ video.description }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FavoriteContent",
  props: {video: Object},
  data() {
    return {
      hoverImage: false
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
    }
  },
}
</script>

<style scoped>
#favorite-content {
  width: 100%;
  margin: 30px;
}

#favorite-img {
  width: 30%;
}

#favorite-details {
  width: 70%;
  margin-left: 15px;
}

#avatar {
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-right: 10px;
}

img {
  width: 100%;
  max-height: 100%;
  cursor: pointer;
}

#title {
  font-weight: bold;
}

#description {
  text-align: left;
}

#meta,#owner,details{
  color: grey;
}

#separator{
  margin:0 10px;
}

</style>