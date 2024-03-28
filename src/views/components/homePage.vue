<template>
    <el-scrollbar>
        <div class="logShow">
            <img src="@/assets/vue.svg" alt="">
            <span v-show="!isCollapse">智能对话</span>
        </div>
        <!-- :default-openeds="['1', '3']" -->
        <el-menu class="el-menu-vertical-demo" default-active="2" :collapse="isCollapse">
            <template v-for="(item, index) in menus" :key="item.path">
                <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
                    <template #title>
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item @click='titleChange(item1.name)' :index="item.path" v-for="item1 in item.children"
                        :key="item1.path">
                        <el-icon>
                            <component :is="item1.meta.icon"></component>
                        </el-icon>
                        <span>{{ item1.meta.title }}</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else @click='titleChange(item.name)' :index="item.path">
                    <el-icon>
                        <component :is="item.meta.icon" />
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
defineProps({
    isCollapse: {
        type: Boolean
    },
})
const router = useRouter()
const titleChange = (param: string) => {
    router.push(param)
    console.log(param);

}
const menus = reactive([
    {
        path: ' /',
        redirect: '/index',
        name: 'index',
        meta: {
            title: '首页',
            icon: 'house'
        },
        children: [
        ]
    },
    {
        path: ' /ai',
        redirect: '/aiModel',
        name: 'ai',
        meta: {
            title: 'Al创作',
            icon: 'message'
        },
        children: [
            {
                path: '/aiModel',
                name: 'aiModel',
                meta: {
                    title: '创作模型',
                    icon: 'setting'
                },
            },
        ]
    }
])

</script>

<style lang="scss" scoped>
.logShow {
    padding: 10px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 30px;
        display: block;
        width: 64px;
    }

    span {
        margin-left: 10px;
        font-size: 20px;
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>