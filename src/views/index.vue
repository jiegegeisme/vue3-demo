<template>
    <el-container class="layout-container-demo" style="height: 100vh">
        <el-aside :width="isCollapse ? '200px' : '64px'">
            <home-page :isCollapse="!isCollapse"></home-page>
        </el-aside>

        <el-container style="height: 100%">
            <el-header style="text-align: right; font-size: 12px">
                <header-page @logShow="logShow"></header-page>
            </el-header>

            <el-main height="100%">
                <app-mian />
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import homePage from './components/homePage.vue';
import headerPage from './components/headerPage.vue';
import appMian from './appMian/index.vue'
const isCollapse = ref<boolean>(true)
const logShow = (param: boolean) => {
    isCollapse.value = param
}
</script>
  
<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    /* background: var(--el-color-primary-light-8); */
    background-color: #fff;
    transition: 0.75s;
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    overflow: auto;
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
  