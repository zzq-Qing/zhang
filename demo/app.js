
/*
  小程序初始化的入口文件
  小程序注册页面
  App( {} ) ==>  new Vue( {} )

  小程序注册时默认存放的都是小程序的生命周期钩子函数，生命同期函数不要强制调用。
    1.生命周期函数是当某一个条件满足时才触发的。
    2.开发者可以在注册小程序时添加一些数据或自定义函数供其它页面使用
*/ 
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('launch')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
      console.log('show')
      console.log( options )
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
