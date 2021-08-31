<template>
  <div class="home">
     <Top></Top>
    <Homes msg="看首页" />
 
  </div>
</template>

<script>
// @ is an alias to /src
import Homes from "../components/Homes";
import Top from "../components/top";

export default {
  name: "Home",
  components: {
    Homes,Top
  },
};
</script>
