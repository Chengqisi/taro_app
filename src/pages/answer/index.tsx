import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
// import logo from "./hook.png";
import { AtList, AtListItem, AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";
import './index.less'
import Taro from "@tarojs/taro";
export default function Index() {
    let [tabList, setTablist] = useState([{ title: '原生JS' }, { title: "面试题" }, { title: "性能优化" }])
    let [current, setCurrent] = useState(0)
    const tabSwitch = (tab) => {
        setCurrent(tab)
    }
    return <>
        <AtTabs current={current} tabList={tabList} onClick={tabSwitch}>
            <AtTabsPane current={current} index={0} >
                <AtList>
                    <AtListItem title='实现简单的拖拽效果' arrow='right' onClick={() => { Taro.navigateTo({ url: '/sub_study/dragDemo/index' }) }} />
                    <AtListItem title='实现简单的放大镜效果' arrow='right' onClick={() => { Taro.navigateTo({ url: '/sub_study/enlarge/index' }) }} />
                </AtList>
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
                <AtList>
                    <AtListItem title='闭包' arrow='right' onClick={() => { Taro.navigateTo({ url: '/sub_interview/closure/index' }) }} />
                    <AtListItem title='原型链' arrow='right' onClick={() => { Taro.navigateTo({ url: '/sub_study/enlarge/index' }) }} />
                    <AtListItem title='高频手写函数' arrow='right' onClick={() => { Taro.navigateTo({ url: '/sub_interview/function/index' }) }} />
                </AtList>
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>努力更新中。。。</View>
            </AtTabsPane>
        </AtTabs>
    </>
}