export default {
  pages: [
    "pages/index/index",
    "pages/center/index",
    "pages/answer/index",
    "pages/login/index",
    "pages/webview/index"
  ],
  subpackages: [
    {
      root: "other_page",
      pages: ["javascript/index", "typescripts/index"]
    },
    {
      root: "sub_javascript",
      __desc: "javascript",
      pages: ["database/index", "complexdata/index"]
    },
    {
      root: 'sub_webView',
      __desc: "webView",
      pages: ["index"]
    },
    {
      root: "sub_study",
      __desc: "相关学习demo",
      pages: [
        "dragDemo/index",
        "enlarge/index"
      ]
    }
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    // navigationStyle: "custom",
  },

  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "imgs/my-main.png",
        selectedIconPath: "imgs/my-main-act.png"
      },
      {
        pagePath: "pages/answer/index",
        text: "学习",
        iconPath: "imgs/answer.png",
        selectedIconPath: "imgs/answer_select.png"
      },
      {
        pagePath: "pages/center/index",
        text: "个人中心",
        iconPath: "imgs/my-tab.png",
        selectedIconPath: "imgs/my-tab-act.png"
      }
    ],
    color: "#666",
    selectedColor: "#000",
    borderStyle: "black"
  }
};
