import { View } from "@tarojs/components";
import React from "react";
import CodeHtml from "../../components/codeHtml/index";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";

export default function New() {
    return <>
        <AtCard title="手写new的实现" >
            <View>
                <View className="article">
                1、创建一个控对象
                2、
                </View>
                <CodeHtml code={`
        function myNew(fn, ...args) {
        const obj = {}
        obj.__proto__ = fn.prototype
        fn.apply(obj, args)
        return obj
        }
        `} />
            </View>
        </AtCard>
    </>
}