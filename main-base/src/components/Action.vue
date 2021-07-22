<template>
    <div>
        <button @click="sendMes1">发送消息1</button>
        <button @click="sendMes2">发送消息2</button>
        <span>接收到消息：{{mes}}</span>
    </div>
</template>

<script>
    import actions from '../actions'

    export default {
        name: "Action.vue",
        data() {
            return {
                mes: '',
                mes1: {user: 'Kaven'},
                mes2: {user: 'Ran'},
            }
        },
        mounted() {
            actions.onGlobalStateChange((state,prev) => { //监听全局状态
                this.mes = state;
                console.log("主应用："+state,prev)
            }, true);
        },
        methods: {
            sendMes1() {
                actions.setGlobalState(this.mes1);//通过setGlobalState改变全局状态
            },
            sendMes2() {
                actions.setGlobalState(this.mes2);
            }

        },
    }
</script>

<style scoped>

</style>
