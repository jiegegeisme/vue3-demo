<template>
    <div class="modelTop">
        <el-card>
            <div class="item">
                <label>技能名称：</label>
                <el-input v-model="data.searchData.name" />
            </div>
            <div class="item">
                <label>技能类目：</label>
                <el-input v-model="data.searchData.category" />
            </div>
            <div class="item">
                <label>技能状态：</label>
                <el-input v-model="data.searchData.status" />
            </div>
            <div class="item">
                <el-button @click="search" type="primary">查询</el-button>
                <el-button @click="reset">重置</el-button>
                <el-button>导出</el-button>
            </div>
        </el-card>
    </div>
    <div class="modelBottom">
        <el-card>
            <div style="margin-bottom:10px ;">
                <el-button @click="editHandle(1)" type="primary">新增创作模型</el-button>
                <el-button @click="deletSomeHandle" type="primary">批量删除</el-button>
            </div>
            <el-table :data="data.tableData" @selection-change="handleSelectionChange" style="width: 100%">
                <el-table-column type="selection" width="55" />
                <el-table-column prop="date" label="图标" width="150" />
                <el-table-column prop="name" label="技能名称" width="120" />
                <el-table-column prop="state" label="描述" width="120" />
                <el-table-column prop="city" label="所属类目" />
                <el-table-column prop="address" label="状态" />
                <el-table-column prop="times" label="访问数据/次" width="120" />
                <el-table-column prop="people" label="使用人数" width="120" />
                <el-table-column prop="sort" label="排序" width="120" />
                <el-table-column prop="createTime" label="创建时间" width="120" />
                <el-table-column fixed="right" label="操作" width="120">
                    <template #default='scope'>
                        <el-button link @click="editHandle(scope.row, 2)" type="primary">编辑</el-button>
                        <el-button link type="primary" @click="deletClick(scope.row, scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
interface User {
    date: string
    name: string
    address: string,
    city: string,
    state: string,
    tag: string,
    times: number,
    createTime: string,
    sort: number,
    people: string,
}
const data = reactive({
    searchData: {
        name: '',
        category: '',
        status: ''
    },
    tableData: [
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            times: 1,
            tag: 'Home',
            createTime: 'string',
            sort: 1,
            people: 'string',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            times: 1,
            tag: 'Home',
            createTime: 'string',
            sort: 1,
            people: 'string',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            times: 1,
            tag: 'Home',
            createTime: 'string',
            sort: 1,
            people: 'string',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            times: 1,
            tag: 'Home',
            createTime: 'string',
            sort: 1,
            people: 'string',
        },
    ]
})
// 重置
const reset = () => {
    data.searchData.name = ""
    data.searchData.category = ""
    data.searchData.status = ""
}
// 查询
const search = () => {

}
const handleClick = () => {
    console.log('click')
}
const handleSelectionChange = (data: User[]) => {
    console.log(data);

}
const router = useRouter()
// 编辑添加
const editHandle = (data: object) => {
    console.log(data);

    router.push({
        path: 'addAiModel',
        query: data
    })
}
</script>

<style scoped lang="scss">
.modelTop {
    margin: 10px;

    .item {
        display: inline-block;

        label {
            width: 80px;
            min-width: 70px;
        }

        .el-input {
            width: 200px;
            min-width: 200px;
        }

        margin: 5px 10px;
    }
}

.modelBottom {
    margin: 10px;

}
</style>