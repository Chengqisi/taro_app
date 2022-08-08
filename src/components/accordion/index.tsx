import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/accordion.scss";
import "taro-ui/dist/style/components/icon.scss";
import { PropConfig } from "./type"
export default function Accordion(props: PropConfig): JSX.Element {
    let [open, setOpen]: [open: boolean, setOpen: Function] = useState(props.open)
    // const handleClick = function (value) {
    //     setOpen(!open)
    // }
    function openAccord() {
        setOpen(!open)
    }
    return <>
        <AtAccordion
            open={open}
            title={props.title}
            onClick={openAccord}
            customStyle={{'background':"#fff"}}
        >
            <AtList hasBorder={true}>
                <View>123</View>
            </AtList>
        </AtAccordion>
    </>
}