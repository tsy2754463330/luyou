<template>
  <div class="box">
    <ul class="top">
      <li>
        <router-link to="/" exact tag="li">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/about" tag="li">
        <p>关于</p>
        </router-link>
      </li>
       <li>
        <router-link to="/My" tag="li">
        <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "top",
  
  data() {
    return {};
  },
};
</script>

<style scoped>
.box{
    background-color: rgb(174, 249, 252);
    width: 100%;
    height: 60px;
}
.top{
    width: 100px;
    height: 60px;
     display: flex;
    justify-content: space-between;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
}
.top li{
 
    width: 50px;
    height: 60px;

}
a {
text-decoration: none;
display: block;
color: black;

}

.router-link-active {
text-decoration: none;
color: black;
color: red;
font-weight: 600;
} 
</style>