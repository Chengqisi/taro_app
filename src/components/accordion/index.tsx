import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/accordion.scss";
import "taro-ui/dist/style/components/icon.scss";
export default function Accordion() {
    // let [open, setOpen]: [open: boolean, setOpen: Function] = useState(false)
    // const handleClick = function (value) {
    //     setOpen(!open)
    // }
    return <>
        {/* <AtAccordion
            open={false}
            title='标题一'
        >
            <AtList hasBorder={true}>
                <View>1</View>
            </AtList>
        </AtAccordion> */}
    {/* <View>123</View> */}
    </>
}