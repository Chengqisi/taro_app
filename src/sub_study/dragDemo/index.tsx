import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtCard } from "taro-ui";
import CodeHtml from "../../components/codeHtml";
import "taro-ui/dist/style/components/card.scss";
export default function DragDemo() {
    return <>
        <AtCard title='如何使用原生Js实现一个元素拖拽'>
            <View className="article">1、首先将一个元素进行定位</View>
            <View className="article">2、监听鼠标的事件</View>
            <View className="article">3、鼠标按下后监听鼠标的移动事件、根据鼠标的移动位置改变元素的定位</View>
            <View className="article">4、鼠标放开后清除事件</View>
            <CodeHtml isReplace={true} code={`
     const rootEle = document.getElementById('root')
     rootEle.style.width = '200px'
     rootEle.style.height = '200px'
     rootEle.style.background = '#f75243'
     rootEle.style.position = 'fixed'
     rootEle.onmousedown = function (e) {
         let x = e.clientX - rootEle.offsetLeft
         let y = e.clientY - rootEle.offsetTop
         rootEle.onmousemove = function (e) {
             var left = e.clientX - x
             var top = e.clientY - y
             if (left < 0) {
                 left = 0
             } else if (left > window.innerWidth - rootEle.offsetWidth) {
                 left = window.innerWidth - rootEle.offsetWidth
             }
             if (top < 0) {
                 top = 0
             } else if (top > window.innerHeight - rootEle.offsetHeight) {
                 top = window.innerHeight - rootEle.offsetHeight
             }
             rootEle.style.left = left + 'px'
             rootEle.style.top = top + 'px'
         }
         rootEle.onmouseup = function () {
             rootEle.onmousemove = null;
             rootEle.onmouseup = null;
         }
     }
    `}></CodeHtml>
        </AtCard>

    </>
}