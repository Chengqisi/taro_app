import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import Accordion from "../../components/accordion/index";
export default function JavaSciptMoudle() {
    const databaseList = [{ name: '基本数据类型', url: '/sub_javascript/database/index' },{name:'复杂数据类型',url:"/sub_javascript/complexdata/index"}]
    return <>
        <Accordion title="数据类型" open={false} list={databaseList} />
    </>
}