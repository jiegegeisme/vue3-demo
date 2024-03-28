<template>
    <div class="add">
        <el-card style="margin: 10px;">
            <div class="addtop">
                <div class="icon" @click="boback"><el-icon>
                        <Back />
                    </el-icon></div>
                <div>返回 &nbsp; | <span class="title">{{ route.meta.title }}</span></div>
            </div>
        </el-card>
        <el-card style="margin: 10px;">
            <div class="addcontent">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="图标">
                        <el-input v-model="formInline.icon" placeholder="Approved by" clearable />
                    </el-form-item>
                    <el-form-item label="模型名称">
                        <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Activity time">
                        <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Query</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
const route = useRoute()
const router = useRouter()
const obj = reactive({
    routerData: {}
})
onMounted(() => {
    obj.routerData = route
    console.log(route);

})
const boback = () => {
    router.go(-1)
}
const formInline = reactive({
    icon: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped lang="scss">
.addtop {
    height: 100%;

    .icon {
        margin-top: 5px;
        padding: 10px;
    }

    display: flex;
    align-items: center;
    justify-self: center;

    font-size: 15px;

    .title {
        font-size: 20px;
        margin-left: 10px;
    }
}
</style>