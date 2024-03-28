<template>
    <div class="header">
        <div class="toolbarLeft" @click="expendHandle">
            <el-icon style="margin-right: 8px; margin-top: 1px">
                <Expand v-show="data.showLeft" />
                <Fold v-show="!data.showLeft" />
            </el-icon>
        </div>
        <div class="toolbar">
            <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px">
                    <setting />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>Tom</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Setting, Expand, Fold } from '@element-plus/icons-vue'
import { reactive, ref, } from 'vue';
const data = reactive({
    showLeft:true,
})
const emit = defineEmits(['logShow'])
const expendHandle = () => {
    data.showLeft = !data.showLeft
    emit('logShow',data.showLeft)
    console.log(data.showLeft);
}
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    .toolbarLeft {
        font-size: 20px;
    }
}
</style>