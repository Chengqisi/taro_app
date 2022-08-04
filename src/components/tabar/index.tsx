import React, { useCallback } from "react";
import { View, Text, Image, CustomWrapper } from "@tarojs/components"; 
import "./index.scss";
import Taro from "@tarojs/taro";

// export default class Tabars extends Component {
//     state = {
//         isFullSucreen: false,
//         statusBarHeight: 0,
//         tabActive: 0
//     }
//     props={
//         tabActive: 0
//     }
//     componentDidMount() {
//         console.log(this.props.tabActive);
        
//         try {
//             const res = Taro.getSystemInfoSync();
//             this.setState({ statusBarHeight: res.statusBarHeight })
//             console.log(res.screenHeight - this.state.statusBarHeight - res.windowHeight, res);
//             if (res.screenHeight - this.state.statusBarHeight - res.windowHeight > 72) {
//                 this.setState({ isFullSucreen: true })
//                 console.log("是全面屏");
//             }
//             if (res.model.search('iPhone X') !== -1) {
//                 this.setState({ isFullSucreen: true })
//             }
//             if (res.model.search('iPhone 1') !== -1) {
//                 this.setState({ isFullSucreen: true })
//             }
//         } catch (err) {
//             console.log(err);

//         }
//     }

//     componentWillUnmount() { }

//     componentDidShow() { }

//     componentDidHide() { }
//     tabChange(type) {
//         console.log(type, '点击');
//         this.setState({ tabActive: type })
//         let url = ""
//         switch (type) {
//             case 0:
//                 url = '/pages/index/index';
//                 break;
//             case 1:
//                 url = "/pages/vipMall/index";
//                 break;
//             case 2:
//                 url = "/pages/recomend/index";
//                 break;
//             case 3:
//                 url = '/pages/center/index';
//                 break;
//         }
//         console.log(url);
        
//         Taro.reLaunch({ url: url })

//     }
//     render() {
//         let state = {
//             tabs: [
//                 {
//                     text: '发现',
//                     active: false,
//                     src: 'https://cdn-ssl.meb.com/mwa/tab1',
//                 },
//                 {
//                     text: '会员商城',
//                     active: false,
//                     src: 'https://cdn-ssl.meb.com/mwa/tab2',
//                 },
//                 {
//                     text: '服务',
//                     active: false,
//                     src: 'https://cdn-ssl.meb.com/mwa/tab3',
//                 },
//                 {
//                     text: '我的',
//                     active: false,
//                     src: 'https://cdn-ssl.meb.com/mwa/tab4',
//                 },
//             ]
//         }
//         return (
//             <View className="tabar">
//                 <CustomWrapper>
//                     <View className={`${this.state.isFullSucreen ? 'ipx' : ''} tab-layout`} >
//                         {state.tabs.map((item, index) => {
//                             return (
//                                 <View className="tab_box" key={index} onClick={() => this.tabChange(index)}>
//                                     <Image className="icon" src={item.src + `${this.props.tabActive == index ? '-press.png' : '.png'}`}></Image>
//                                     <Text className={this.props.tabActive == index ? 'tab-text-press' : 'tab-text'}>{item.text}</Text>
//                                 </View>
//                             )
//                         })}
//                     </View>
//                 </CustomWrapper>
//             </View>
//         );
//     }
// }
export default class Tabars extends React.Component {
    state = {
        isFullSucreen: false,
        statusBarHeight: 0,
        tabActive: 0
    }
    props={
        tabActive: 0
    }
    componentDidMount() {
        console.log(this.props.tabActive);
        
        try {
            const res = Taro.getSystemInfoSync();
            this.setState({ statusBarHeight: res.statusBarHeight })
            console.log(res.screenHeight - this.state.statusBarHeight - res.windowHeight, res);
            if (res.screenHeight - this.state.statusBarHeight - res.windowHeight > 72) {
                this.setState({ isFullSucreen: true })
                console.log("是全面屏");
            }
            if (res.model.search('iPhone X') !== -1) {
                this.setState({ isFullSucreen: true })
            }
            if (res.model.search('iPhone 1') !== -1) {
                this.setState({ isFullSucreen: true })
            }
        } catch (err) {
            console.log(err);

        }
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    tabChange(type) {
        console.log(type, '点击');
        this.setState({ tabActive: type })
        let url = ""
        switch (type) {
            case 0:
                url = '/pages/index/index';
                break;
            case 1:
                url = "/pages/vipMall/index";
                break;
            case 2:
                url = "/pages/recomend/index";
                break;
            case 3:
                url = '/pages/center/index';
                break;
        }
        console.log(url);
        
        Taro.reLaunch({ url: url })

    }
    render() {
        let state = {
            tabs: [
                {
                    text: '发现',
                    active: false,
                    src: 'https://cdn-ssl.meb.com/mwa/tab1',
                },
                {
                    text: '会员商城',
                    active: false,
                    src: 'https://cdn-ssl.meb.com/mwa/tab2',
                },
                {
                    text: '服务',
                    active: false,
                    src: 'https://cdn-ssl.meb.com/mwa/tab3',
                },
                {
                    text: '我的',
                    active: false,
                    src: 'https://cdn-ssl.meb.com/mwa/tab4',
                },
            ]
        }
        return (
            <View className="tabar">
                <CustomWrapper>
                    <View className={`${this.state.isFullSucreen ? 'ipx' : ''} tab-layout`} >
                        {state.tabs.map((item, index) => {
                            return (
                                <View className="tab_box" key={index} onClick={() => this.tabChange(index)}>
                                    <Image className="icon" src={item.src + `${this.props.tabActive == index ? '-press.png' : '.png'}`}></Image>
                                    <Text className={this.props.tabActive == index ? 'tab-text-press' : 'tab-text'}>{item.text}</Text>
                                </View>
                            )
                        })}
                    </View>
                </CustomWrapper>
            </View>
        );
    }
}
