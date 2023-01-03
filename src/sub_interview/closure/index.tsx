import { View } from "@tarojs/components";
import React from "react";
import CodeHtml from "../../components/codeHtml/index";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";
export default function Closure() {
    return <>
        <View style={{ marginTop: '20rpx', paddingBottom: '40rpx' }} id='test'>
            <AtCard title="闭包" >
                <View className="article"> 闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。</View>
            </AtCard>
        </View>
    </>
}