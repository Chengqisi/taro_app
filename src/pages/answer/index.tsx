import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
// import logo from "./hook.png";
import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss"

import './index.less'
export default function Index() {
    let [tabList, setTablist] = useState([{ title: 'tab1' }, { title: "tab2" }, { title: "tab3" }])
    let [current, setCurrent] = useState(0)
    const tabSwitch = (tab) => {
        setCurrent(tab)
    }
    return <>
        <AtTabs current={current} tabList={tabList} onClick={tabSwitch}>
            <AtTabsPane current={current} index={0} >
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
            </AtTabsPane>
        </AtTabs>
    </>
}