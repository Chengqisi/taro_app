import React, { useCallback, useState } from "react";
import { View, Text, Button, Image, ScrollView } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast, } from "taro-hooks"
import Taro from '@tarojs/taro'
import HomeCard from "../../components/homeCard/index";
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.less'
import { AtNavBar } from "taro-ui";
const Index = () => {
  const [cardList, setCard] = useState([{ navigateUrl: '/other_page/javascript/index', cardTitle: 'JavaScript', imgUrl: 'https://img2.baidu.com/it/u=4158766407,612112290&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', introduce: "是一种具有函数优先的轻量级，解释型或即时编译型的编程语言" },
  { navigateUrl: 'TypeScript', cardTitle: 'TypeScript', imgUrl: 'https://img0.baidu.com/it/u=4167016203,3166254551&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=311', introduce: "TypeScript是微软开发的一个开源的编程语言，通过在JavaScript的基础上添加静态类型定义构建而成" },
  { navigateUrl: 'Vue', cardTitle: 'Vue', imgUrl: 'https://img1.baidu.com/it/u=3137752502,1535259864&fm=253&fmt=auto&app=138&f=PNG?w=500&h=288', introduce: "vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用" },
  { navigateUrl: 'React', cardTitle: 'React', imgUrl: 'https://img1.baidu.com/it/u=3545225878,2086373205&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=236', introduce: "用于构建用户界面的 JavaScript库" }])
  return (
    <>
    <AtNavBar
  color='#000'
  title='NavBar 导航栏示例'
  leftText='返回'
  rightFirstIconType='bullet-list'
  rightSecondIconType='user'
/>
      <ScrollView scrollY>
        {(cardList.map((item, index) => {
          return <>
            <HomeCard navigateUrl={item.navigateUrl} cardTitle={item.cardTitle} imgUrl={item.imgUrl} introduce={item.introduce} />
          </>
        }))}
        <View className="foots">--学习使用，仅供参考--</View>
      </ScrollView>
    </>
  );
};

export default Index;
