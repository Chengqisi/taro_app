import { View } from "@tarojs/components";
import React from "react";
import CodeHtml from "../../components/codeHtml/index";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss"
import "taro-ui/dist/style/components/list.scss";

export default function Ajax() {
    return <>
        <AtCard title="AJAX实现原理" >
            <View>
                <CodeHtml code={`
        const ajax = {
            get(url, fn) {
              const xhr = new XMLHttpRequest()
              xhr.open('GET', url, true)
              xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                  fn(xhr.responseText)
                }
              }
              xhr.send()
            },
            post(url, fn, data) {
              const xhr = new XMLHttpRequest()
              xhr.open('POST', url, true)
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
              xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                  fn(xhr.responseText)
                }
              }
              xhr.send(data)
            }
          }
        `} />
            </View>
        </AtCard>
    </>
}