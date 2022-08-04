import React, { useCallback, useState } from "react";
import { View, Text, Button, Image, WebView } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
export default function WebViewH5() {
    const [url, setUrl] = useState('')
    return <>
        <WebView src={url}></WebView>
    </>
}