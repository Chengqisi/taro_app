import { View, Text, WebView } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import React from "react";

export default function WebViewPage() {
    const routeQuery: any = useRouter().params || {}
    const { url } = routeQuery
    return <><View>
        <WebView src={url}></WebView>
    </View></>
}