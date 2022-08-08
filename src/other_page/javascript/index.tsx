import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import Accordion from "../../components/accordion/index";
export default function JavaSciptMoudle() {

    return <>
        <Accordion title="数据类型1" open={false} />
        <Accordion title="数据类型2" open={false} />
    </>
}