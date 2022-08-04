import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast, } from "taro-hooks"
import Taro from '@tarojs/taro'
import logo from "./hook.png";
import './index.less'
import Tabars from "../../components/tabar/index";
interface propsConfig {
    cardTitle?: string,
    imgUrl?: any,
    navigateUrl: string,
    introduce: string
}
const HomeCard = (props: propsConfig): JSX.Element => {
    const toPages = () => {
        Taro.navigateTo({
            url: props.navigateUrl
        })
    }
    return (
        <>
            <View className="homeCard" onClick={toPages}>
                <View className="nav">
                    <Image className="img" src={props.imgUrl}></Image>
                </View>
                <View className="title">{props.cardTitle}</View>
                <View className="box">{props.introduce}</View>
            </View>
        </>
    );
};

export default HomeCard;
