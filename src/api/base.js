const base = {
    baseUrl:"/api",
    login:"/api/login",  // 登陆
    register:"/api/register", // 注册
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage",//商品查询接口
    total:"/api/total", // 商品总条数
    search:"/api/search", // 商品的模糊查询
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId",// 类目选择
    insertTbItem:"/api/backend/item/insertTbItem",// 添加商品
    deleteItemById:"/api/backend/item/deleteItemById",// 商品删除
    preUpdateItem:"/api/backend/item/preUpdateItem", // 预更新
    updateTbItem:"/api/backend/item/updateTbItem", // 修改商品
    preCategory:"/api/preCategory", // 类目预更新
    selectItemParamAll:"/api/backend/itemParam/selectItemParamAll", // 规格参数读取数据
    paramsSearch:"/api/params/search", // 规格参数模糊查询
    paramsDelete:"/api/params/delete", // 规格参数删除
    paramsTotal:"/api/params/total", // 规格参数总条数
    insertItemParam:"/api/backend/itemParam/insertItemParam", // 规格参数添加
    paramsItem:"/api/product/params/paramsItem", // 产品规格参数
    selectContentCategoryByParentId:"/api/content/selectContentCategoryByParentId", // 内容分类管理 导航查询
    insertContentCategory:"/api/content/insertContentCategory", // 内容分类管理 添加导航
    updateContentCategory:"/api/content/updateContentCategory", // 内容分类管理 修改导航
    deleteContentCategoryById:"/api/content/deleteContentCategoryById", // 内容分类管理 删除导航
    insertTbContent:"/api/content/insertTbContent", // 内容分类管理 内容添加
    selectTbContentAllByCategoryId:"/api/content/selectTbContentAllByCategoryId", // 内容分类管理 内容查询
    deleteContentByIds:"/api/content/deleteContentByIds", // 内容分类管理 内容删除
}

export default base;