import React, { useCallback, useState } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/card.scss";
export default function DataBase() {
    console.log(document);
    
    return <>
        <View style={{ marginTop: '20rpx', paddingBottom: '40rpx' }} id='test'>
            <AtCard title="基本数据类型" >
       
                <View>
                    <View className="article">
                        JavaScript的数据类型分为两种：原始类型（即基本数据类型）和对象类型（即引用数据类型）。
                    </View>
                    <View className="article">
                        ●　常用的基本数据类型包括undefined、null、number、boolean、string；

                    </View>
                    <View className="article">
                        ●　引用数据类型也就是对象类型，比如：Object、array、function、data等；
                    </View>
                </View>
                <View>
                    <View className="title">number类型</View>
                    <View className="article">① number类型包含整数和浮点数（浮点数数值必须包含一个小数点，且小数点后至少有一位数字）。</View>
                    <View className="article">② 浮点数的最高精度是17位，</View>
                    <View className="article">③ NaN：非数字类型，特点：涉及到任何关于NaN的操作，都会返回NaN，而且NaN不等于自身</View>
                    <View className="article">④ isNaN()函数用于判断是否是一个非数字类型，如果传入的参数是一个非数字类型，那么返回true，否则返回false；</View>
                    <View className="article">⑤ isNaN()函数传入一个参数，函数会先将参数转换为数值，如果参数类型为对象类型，会先调用对象的valueOf()方法，再确定该方法返回的值是否可以转换为数值类型，如果不能，再调用对象的toString()方法，再确定返回值；</View>
                </View>
                <View>
                    <View className="title">string类型</View>
                    <View className="article">① 字符串类型中的单双引号作用一样；</View>
                    <View className="article">② 字符串有length属性，可以取得字符串的长度：</View>
                    <View className="article">③ 字符串的值是不可变的，要改变一个字符串的值，首先要销毁原来的字符串，再用另一个包含新值得字符串区填充该字符串；</View>
                    <View className="article">④ 字符串转换：
                        String()，转型函数，适用于任何数据类型（null，undefined转换后为null和undefined）
                        toString()方法可以把一个逻辑值转换为字符串，并返回结果（null、undefined没有toString()方法）</View>
                    <View className="article"></View>
                </View>
                <View>
                    <View className="title">boolean类型</View>
                    <View className="article">① 这个类型只有两个值，true和false；</View>
                    <View className="article">② Boolean()，转型函数，将某个值转换为Boolean类型</View>
                </View>
                <View>
                    <View className="title">null类型</View>
                    <View className="article">① null类型被看做空对象指针，只有一个值，即null值，所以在用typeof操作符去检测null类型的值得时候，结果是object类型；
                    </View>
                    <View className="article">② 如果你定义了一个变量，但是想在以后把这个对象当做一个对象来使用，最好将该对象初始化为null值</View>
                </View>
                <View>
                    <View className="title">undefined类型</View>
                    <View className="article">① 只有一个值，即undefined，如果声明了一个变量，但是未给变量初始化值，那么这个变量的值就是undefined：
                    </View>
                    <View className="article">② 调用函数时，应该提供的参数没有提供，该参数等于undefined；</View>
                    <View className="article">③ 对象没有赋值的属性，该属性的值为undefined；</View>
                    <View className="article">④ 函数没有返回值，默认返回undefined。</View>
                </View>
              
            </AtCard>
        </View>
    </>
}