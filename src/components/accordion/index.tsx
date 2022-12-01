import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/accordion.scss";
import "taro-ui/dist/style/components/icon.scss";
import { PropConfig } from "./type"
import './index.less'
import Taro from "@tarojs/taro";
export default function Accordion(props: PropConfig): JSX.Element {
    const { list } = props
    let [open, setOpen]: [open: boolean, setOpen: Function] = useState(props.open)
    function openAccord() {
        setOpen(!open)
    }
    return <>
        <AtAccordion
            open={open}
            title={props.title}
            onClick={openAccord}
            customStyle={{ 'background': "#fff" }}
            isAnimation={true}
        >
            <AtList hasBorder={true}>
                {
                    list.map((item, index) => {
                        return <View className="item" onClick={() => {
                            Taro.navigateTo({
                                url: item.url
                            })
                        }}>{item.name}</View>
                    })
                }
            </AtList>
        </AtAccordion>
    </>
}