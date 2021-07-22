<template>
    <div>
        <div>这是 app1 子应用</div>
        <p>接收到的消息： {{mes}}</p>
        <button @click="butClick">点击发送消息</button>
    </div>
</template>

<script>
    import actions from '../actions'//导入实例
    export default {
        data() {
            return {
                mes: '',
            }
        },
        mounted() {
            actions.onGlobalStateChange((state) => { //监听全局状态
                this.mes = state
            }, true);
        },
        methods: {
            butClick() {
                actions.setGlobalState({user: 'app1'})//改变全局状态
            }
        }
    }
</script>
