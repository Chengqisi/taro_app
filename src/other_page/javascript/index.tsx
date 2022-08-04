import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import logo from "./hook.png";
import Accordion from "../../components/accordion/index";
export default function JavaSciptMoudle() {

    return <>
        <Accordion />
    </>
}