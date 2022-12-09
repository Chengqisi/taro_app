import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtCard } from "taro-ui";
import CodeHtml from "../../components/codeHtml";
import "taro-ui/dist/style/components/card.scss";
export default function DragDemo() {
    return <>
        <AtCard title='如何使用原生Js实现一个元素拖拽'>
            <View className="article"> 放大镜的实现和元素的拖拽是相同的道理，只是第一个元素发生拖动的时候；另外一个元素需要跟着去移动就实现了一个简单的放大镜的效果</View>
            <View className="title">HTML代码</View>
            <CodeHtml isReplace={true} code={`
              <div id="app">
              <img class="img" src="./WeChat593cbbeaf7f9c01d6f0890cb2278bd81.png" alt="">
              <div class="scale">
                  <img src="./WeChat593cbbeaf7f9c01d6f0890cb2278bd81.png" alt="" id="img">
              </div>
              <div class="lens" id="lens">
              </div>
          </div>
            `}></CodeHtml>
            <View className="title">JS代码</View>
            <CodeHtml isReplace={true} code={`
      const lensEl = document.getElementById('lens')
      const imgEl = document.getElementById('img')
      lensEl.onmousedown = function (e) {
          e.preventDefault()
          let x = e.clientX - lensEl.offsetLeft
          let y = e.clientY - lensEl.offsetTop
          lensEl.onmousemove = function (e) {
              console.log(e);
              e.preventDefault()
              var left = e.clientX - x
              var top = e.clientY - y
              if (left < 0) {
                  left = 0
              } else if (left > window.innerWidth - lensEl.offsetWidth) {
                  left = window.innerWidth - lensEl.offsetWidth
              } else if (left > 300) {
                  left = 300
              }
              if (top < 0) {
                  top = 0
              } else if (top > window.innerHeight - lensEl.offsetHeight) {
                  top = window.innerHeight - lensEl.offsetHeight
              } else if (top > 300) {
                  top = 300
              }
              lensEl.style.left = left + 'px'
              lensEl.style.top = top + 'px'
              imgEl.style.left = -left * 4 + "px"
              imgEl.style.top = -top * 4 + "px"
          }
          lensEl.onmouseup = function () {
              lensEl.onmousemove = null;
              lensEl.onmouseup = null;
              document.onmousemove = null;
              document.onmouseup = null;
          }
      }
    `}></CodeHtml>
            <View className="title">
                <CodeHtml code={`
            #app {
                position: relative;
                display: flex;
            }

            .lens {
                width: 100px;
                height: 100px;
                position: absolute;
                -webkit-backdrop-filter: blur(1px);
                backdrop-filter: blur(1px);
                /* Add box-shadow for more darker */
                box-shadow: 0px 10px 15px 10px rgba(0, 0, 0, 0.15);
                background-color: rgba(228, 228, 228, 0.10);
                z-index: 10;
                top: 0;
                left: 0;
                border: 1px solid black;
                border-radius: 100px;
            }

            .scale {
                width: 400px;
                height: 400px;
                border: 1px solid grey;
                overflow: hidden;
                position: relative;
            }

            .scale>img {
                width: 1600px;
                height: 1600px;
                position: absolute;
                top: 0;
                left: 0;
            }
`}></CodeHtml>
            </View>
        </AtCard>

    </>
}