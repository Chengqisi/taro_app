import React, { ReactDOM, ReactNode, useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import head from "../../imgs/head.png"
import type CardProps from "./index"
import './index.less'
import Taro, { useDidShow } from "@tarojs/taro";
export default function Index() {
    let [avatarUrl, setAvtarl]: [avatarUrl: string, setAvtarl: Function] = useState(head)
    const bindchooseavatar = (e) => {
        console.log(e.detail.avatarUrl, "===>头像");
        const avatarUrl = e.detail.avatarUrl
        Taro.setStorageSync('avatarUrl', avatarUrl)
        setAvtarl(avatarUrl)
    }

    // 对应 onShow
    useDidShow(() => {
        let avatarUrl: string = Taro.getStorageSync('avatarUrl')
        if (avatarUrl) {
            setAvtarl(avatarUrl)
        }
    })
    return <>
        <View>
            <View className="head">
                <Button openType="chooseAvatar" className="head_img" onChooseAvatar={bindchooseavatar}>
                    <Image src={avatarUrl}></Image>
                </Button>
                <View className="head_num" >游客</View>
            </View>
            <View className="content">
                <Card text={'v1.0.0'} url={'1'} title={"版本号"}></Card>
                <Card text={'v1.0.0'} url={'1'} title={"版本号"}></Card>
                <Card text={'v1.0.0'} url={'1'} title={"版本号"}></Card>
            </View>
            <View className="foot">--学习使用，仅供参考--</View>
        </View>
    </>
}
function Card({ title, text, url }: { title: string, text: string, url: string }): JSX.Element {
    const naviageFnc = () => {
        Taro.navigateTo({
            url: url
        })
    }
    return <>
        <View className="card" onClick={naviageFnc}>
            <View>{title}：{text}</View>
            <Image src="https://cdn-ssl.meb.com/mwa/v2.4.8/arrow-right.png" mode="widthFix"></Image>
        </View>
    </>
}