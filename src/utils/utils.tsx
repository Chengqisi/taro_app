import Taro from "@tarojs/taro"

//剪切板复制，再通过剪切板获取，确保复制成功
const copy = (data: string) => {
    return new Promise((resolve, reject) => {
        Taro.setClipboardData({
            data: data,
            success: function () {
                Taro.getClipboardData({
                    success: function (res) {
                        resolve(res)
                    },
                    fail: function () {
                        reject('获取剪切板失败')
                    }
                })
            },
            fail: function () {
                reject('复制失败')
            }
        })
    })
}
export default {
    copy
}