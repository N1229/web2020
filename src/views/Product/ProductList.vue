<template>
  <div>
    <element-table :tableData="tableData" :cellStyle="cellStyle" ref="multipleTable">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column show-overflow-tooltip prop="id" label="商品ID" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="title" label="商品ID" width="180"></el-table-column>
      <el-table-column show-overflow-tooltip prop="image" label="商品图片" width="180"></el-table-column>
      <el-table-column show-overflow-tooltip prop="sellPoint" label="商品卖点" width="280"></el-table-column>
      <el-table-column show-overflow-tooltip prop="price" label="商品价格" width="100"></el-table-column>
      <el-table-column show-overflow-tooltip prop="num" label="商品数量" width="100"></el-table-column>
      <el-table-column show-overflow-tooltip prop="descs" label="商品描述" >
        <template slot-scope="scope">
          <!-- scope.row只读一行 -->
          <div v-html="scope.row.descs"></div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </element-table>
    <div style="margin-top: 20px; float: left">
        <el-button @click="toggleSelection([tableData])">全部选择</el-button>
        <el-button>取消选择</el-button>
    </div>
  </div> 
</template>

<script>
import api from "../../api";

export default {
  name: "ProductList",
  data() {
    return {
        tableData:[]
    };
  },
  mounted() {
    this.http(1);
    this.$bus.$on("page",val=>{
      this.http(val)
    })
    this.$bus.$on("searchData",data=>{
      this.tableData = data
    })
    this.$bus.$on("onRef",data=>{
      this.http(1)
    })
  },
  methods:{
    http(page){
      // 启动 loading
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
      });
      api.getSelectTbItemAllByPage({page}).then((res) => {
        loading.close();
        this.tableData = res.data
      });
    },
    /**
    * 编辑
    */
    handleEdit(index, row) {
      this.$bus.$emit("onEdito", row);
    },
    /**
    * 删除
    */
    handleDelete(index, row) {
       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
       })
       .then(() => {
          api.deleteItemById({
            id: row.id,
          }).then((res) => {
             if (res.data.status === 200) {
                 this.$message({
                    type: "success",
                    message: "删除成功!",
                 });
                this.http(1); // 刷新页面
             } else {
                this.$message({
                    type: "error",
                    message: "删除失败!",
                });
              }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    cellStyle({row, column, rowIndex, columnIndex}){
      if(row.num <= 50){
        return {
          color: 'red'
        }
      }
      if(row.price < 100){
        return {
          color: 'green'
        }
      }
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
  }
};
</script>

<style>
</style>