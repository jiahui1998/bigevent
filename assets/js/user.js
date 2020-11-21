$(function(){
    // 先获取layui自带的form属性
    var form=layui.form
    // 自定义表达式
    form.verify({
        nickname:function(value){
            if(value.length>6)return '请输入1~6个字符之间'
        }
    })
    initUserInfo()

    // 初始化用户的基本信息
    function initUserInfo() {
      $.ajax({
        method: 'GET',
        url: 'my/userinfo',
         
        success: function(res) {
          if (res.status !== 0) {
            return layer.msg('获取用户信息失败！')
          }
          console.log(res)
          form.val('formUserInfo',res.data)
        }
      })
    }
})