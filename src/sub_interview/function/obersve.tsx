import { View } from "@tarojs/components";
import React from "react";
import CodeHtml from "../../components/codeHtml/index";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";

export default function New() {
    return <>
        <AtCard title="发布订阅" >
            <View>
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