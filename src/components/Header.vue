<template>
  <div
      id="header"
      class="m-flex
             m-justify-content-space-around"
  >
    <div
        id="search-bar"
        class="m-flex"
    >
      <div id="search-icon-container"
           class="m-flex
                      m-items-center
                      lg:m-py-3"
      >
        <svg id="search-input-icon"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             class="m-w-4"
        >
          <g
              fill="none"
          >
            <circle
                cx="7.111"
                cy="7.111"
                r="6.111"
                fill="#FFF"
                stroke="#000"
                stroke-width="2"
            >
            </circle>
            <path
                fill="#000"
                d="M12.34 11.222l2.986 2.986c.39.39.39 1.023 0 1.414-.39.39-1.023.39-1.414 0l-2.986-2.986c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.415 0z"
            >
            </path>
          </g>
        </svg>
      </div>
      <div
          class="m-flex
                     m-flex-1"
      >
        <input
            id="search-input"
            type="text"
            placeholder="Ara"
            autocomplete="off"
            value=""
            class="m-flex-grow
                       m-w-full
                       m-text-base"
        >
      </div>
    </div>
    <div
        id="favorites"
    >
          <span
              id="favorites-span"
              class="header-favorites"
              @click="navigateToFavoritePage"
          >
            Favoriler
          </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods :{
    navigateToFavoritePage(){
      this.$router.push({ name: 'Favorites', params: { userid: 'bootcamp' } })
    }
  }
}
</script>

<style scoped lang="css">

#header {
  width: 70%;
  height: auto;
  background: white;
  border-radius:50px;
  padding: 10px;
}

#search-bar {
  width: 80%;
}
.favorites{

}

.header-favorites {
  background: transparent url(//fns.modanisa.com/r/pro2/banner-upload/2018-12/newheaderfooter-favorites3725.svg) center top no-repeat;
  float: right;
  color: #000;
  font-size: 12px;
  padding: 17px 0 0;
  line-height: 1.5;
  width: auto;
  height: auto;
  cursor: pointer;
}

a {
  text-decoration: none;
}

</style>

