import { View } from "@tarojs/components";
import React from "react";
import CodeHtml from "../../components/codeHtml/index";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";

// 引入组件
import Ajax from "./ajax";
import New from "./new";
export default function Closure() {
    return <>
        <View style={{ marginTop: '20rpx', paddingBottom: '40rpx' }} id='test'>
            {/* 常用的 */}
            <Ajax />
            <New />
            {/* 不常用的数据处理方式 */}
            <View>
                <AtCard title="打乱一个数组">
                    <View className="article">
                        <CodeHtml code={`
        const shuffle=functon(arr){
            return arr.sort()=>{
            return Math.random>0.5? 1: -1
            }
        }

        const shuffle=function(arr){
            const i=arr.length
        while(i){
            let j=Math.floor(Math.random()*i--)
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
        }                      
                        `}></CodeHtml>
                    </View>
                </AtCard>
            </View>
        </View>
    </>
}