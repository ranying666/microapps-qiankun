<template>
    <div id="app">
        <h2>来自 <span class="qiankun"> app1 </span>的内容</h2>
        <li>
            <router-link to="/">home</router-link>
        </li>
        <li>
            <router-link to="/about">about</router-link>
        </li>
        <li>
            <router-link to="/helloword">helloword</router-link>
        </li>

        <li>
            <router-link to="/action">message</router-link>
        </li>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
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
    }

    .qiankun {
        font-size: x-large;
        color: coral;
    }
</style>
