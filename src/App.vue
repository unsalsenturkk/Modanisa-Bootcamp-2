<template>
  <div id="app">
    <Header></Header>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  data(){
    return {
      searchText : "",
      videos : [],
    }
  },
  components: {
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

html, body {
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #F9F9F9;
}

.m-flex {
  display: flex;
}

.m-flex-row {
  flex-direction: row;
}
.m-flex-column {
  flex-direction: column;
}

.m-flex-1 {
  flex: 1 1 0%;
}

.m-items-center {
  align-items: center;

}

.m-justify-content-space-around {
  justify-content: space-around;
}

.m-flex-wrap {
  flex-wrap: wrap;
}

.m-flex-grow {
  flex-grow: 1;
}

.m-items-center {
  align-items: center;
}

.m-w-4 {
  width: 1rem;
}

.m-w-full {
  width: 100%;
}

.m-text-base {
  font-size: 1rem;
}

.lg\:m-py-3 {
  width: 1.125rem;
}

.m-bg-transparent {
  background-color: transparent;
}

.m-border-none {
  border-style: none;
}

.m-border-dotted {
  border-style: dotted;
}


</style>
