<template>
    <div
        id="content"
        class="m-flex
               m-flex-column"
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
            @click = "navigateToFavoritePage"
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


export default {
  name: "Content",
  props : {video : Object},
  data() {
    return {
      hoverImage : false
    }
  },
  methods:{
    displayHoverImg(){
      this.hoverImage = true;
    },
    displayCoverImg(){
      this.hoverImage = false;
    },
    navigateToFavoritePage() {
      this.$router.push({name:"Watch",query : {id : this.video.id}});
    }
  },
  watch:{

  },
  mounted() {

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
}

#img {
  max-width: 99%;
  max-height: 80%;
}


#avatar {
  width: 36px;
  height: 36px;
  border-radius:50px;
  margin-top: 12px;
  margin-right: 12px;
}

#meta{
  margin-top: 12px;
  text-align: left;
  }

#title{
  font-weight: bold;
}

#ownerName, #metadata-line{
  color: grey;
}

#separator{
  margin:0 4px;
}

img {
  width: 100%;
  max-height: 100%;
  cursor: pointer;
}

</style>