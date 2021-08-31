<template>
  <div class="about">
    <Top></Top>
    <h1>这是关于页面</h1>
  </div>
</template>
<script>
// @ is an alias to /src

import Top from "../components/top";

export default {
  name: "About",
  components: {
    Top
  },
};
</script>