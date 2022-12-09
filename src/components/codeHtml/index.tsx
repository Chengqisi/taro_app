import { RichText, View, Image } from "@tarojs/components";
import React from "react";
import utils from "../../utils/utils";
import "./index.less"
/**
 * @code 富文本内容
 * @isReplace 是否使用正则进行替换
 * */
interface propsConfig {
    code: string,
    isReplace?: boolean | undefined
}
export default function CodeHtml(props: propsConfig) {
    const { code } = props
    function unhtml(str) {
        return str ? str.replace(/[<">']/g, (a) => {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a]
        }) : '';
    }
    return <>
        <View className="code_box">
            <View className="code_head">
                <Image src="https://cdn-ssl.meb.com/mwa/cheese3.png" style={{ width: '30rpx', height: '30rpx' }}></Image>
                <Image src="https://cdn-ssl.meb.com/mwa/cheese2.png"></Image>
                <Image src="https://cdn-ssl.meb.com/mwa/cheese1.png"></Image>
            </View>
            <View className="copy" onClick={() => {
                utils.copy(`
                =====虽然写的很差======
                =====还是有版权😯======
                ${code}  
                =====本人还是个小小前端人======
                =====复制后谨慎使用😊=========`)
            }}>复制代码</View>
            <View className="rich_text">
                <RichText nodes={`<div><pre><code>${props.isReplace ? unhtml(code) : code}</code></pre></div>`}>
                </RichText>
            </View>
        </View>
    </>
}
