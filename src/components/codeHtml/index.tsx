import { RichText, View, Image } from "@tarojs/components";
import React from "react";
import utils from "../../utils/utils";
import "./index.less"
interface propsConfig {
    code: string,
}
export default function CodeHtml(props: propsConfig) {
    const { code } = props
    return <>
        <View className="code_box">
            <View className="code_head">
                <Image src="https://cdn-ssl.meb.com/mwa/cheese3.png" style={{ width: '30rpx', height: '30rpx' }}></Image>
                <Image src="https://cdn-ssl.meb.com/mwa/cheese2.png"></Image>
                <Image src="https://cdn-ssl.meb.com/mwa/cheese1.png"></Image>
            </View>
            <View className="copy" onClick={() => {
                utils.copy(code)
            }}>复制代码</View>
            <View className="rich_text">
                <RichText nodes={`<pre><code>${code}</code></pre>`}>
                </RichText>
            </View>
        </View>
    </>
}