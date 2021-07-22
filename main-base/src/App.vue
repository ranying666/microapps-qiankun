<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Welcome to <span class="qiankun">qiankun</span> Main App</h1>
        <li>
            <a href="/">main</a>
        </li>
        <li>
            <a href="/about">about</a>
        </li>
        <!-- 子应用 vue app -->
        <li>
            <a href="/vue">app1</a>
        </li>
        <li>
            <a href="/app2">app2</a>
        </li>
        <Action></Action>
        <!-- 主应用容器 -->
        <router-view></router-view>
        <!-- 子应用容器 -->
        <div id="container"></div>
    </div>
</template>

<script>
    import Action from './components/Action.vue'

    export default {
        name: 'App',
        components:{
            Action
        }
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
        color: #42b983;
    }
</style>
