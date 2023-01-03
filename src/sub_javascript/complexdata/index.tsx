import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtCard } from "taro-ui";
import CodeHtml from "../../components/codeHtml";
import "taro-ui/dist/style/components/card.scss";

export default function JavaSciptMoudle() {
    const databaseList = [{ name: '基本数据类型', url: '/sub_javascript/database/index' }, { name: '复杂数据类型', url: "/sub_javascript/complexdata/index" }]
    return <>
        <View style={{ marginTop: '20rpx', paddingBottom: '40rpx' }} id='test'>
            <AtCard title="复杂数据类型" >
                <View className="article"> 复杂数据类型，在存储变量中存储的仅仅是地址（引用），因此叫做引用数据类型，通过new关键字创建的对象（系统对象、自定义对象），如Object、Array、Data等</View>
                <View className="title">如何判断数据类型</View>
                <View className="title">
                    1. Object.prototype.toString.call()（推荐使用） </View>
                <View className="article">

                    <CodeHtml code={`   
        let a = [];
        let b = function () { }
        let c = 4;
        let d = null;
        console.log(Object.prototype.toString.call(a)); // [object Array]
        console.log(Object.prototype.toString.call(b)); // [object Function]
        console.log(Object.prototype.toString.call(c)); // [object Number]
        console.log(Object.prototype.toString.call(d)); // [object Null]`}/>
                </View>
                <View className="title"> typeof（有bug）</View>
                <View className="article">typeof能检测到的数据有function、string，number，boolean， undefined，symbol,其他所有的类型，都会被检测为object。</View>
                <View className="article">null是基本数据类型，但使用typeof会显示object</View>
                <View className="title">3. instanceof（只能判断对象类型）</View>
                <View className="title">4. constructor（不稳定）</View>
                <View className="article">null 和 undefined 是无效的对象，因此是不会有 constructor 存在的。</View>
                <View className="article">函数的 constructor 是不稳定的，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object</View>
            </AtCard>
        </View>
    </>
}