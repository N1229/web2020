<template>
  <div>
      <div class="pagination-container">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next, jumper"
            :total="total">
          </el-pagination>
      </div>
  </div>
</template>

<script>

export default {
    name: "Pagination",
    data() {
        return {
            currentPage: 1,
        };
    },
    props:{
        total:{
            type:[String,Number],
            default:0
        }
    },
    methods:{
        handleSizeChange(){},
        handleCurrentChange(vel){
            this.$emit("page",vel)
        }
    }
}
</script>

<style scoped>

.pagination-container{
    margin-top: 40px;
}

</style>