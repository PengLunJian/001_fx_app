import http from '../../http/index';
import apis from '../../apis/index';

Page({
    data: {
        isShow: false,
        persons: [
            {
                name: '金泰熙',
                selected: false,
                img: '../../assets/images/photo01.jpg'
            },
            {
                name: '高圆圆',
                selected: true,
                img: '../../assets/images/photo02.jpg'
            },
            {
                name: '倪妮',
                selected: false,
                img: '../../assets/images/photo03.jpg'
            }
        ]
    },
    onLoad(query) {
        const data = {
            username: 'PENGLUNJIAN',
            password: '18368235508'
        }
        http.post(apis.login, data);
        // 页面加载
        console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    },
    onReady() {
        // 页面加载完成
    },
    onShow() {
        // 页面显示
    },
    onHide() {
        // 页面隐藏
    },
    onUnload() {
        // 页面被关闭
    },
    onTitleClick() {
        // 标题被点击
    },
    onPullDownRefresh() {
        // 页面被下拉
    },
    onReachBottom() {
        // 页面被拉到底部
    },
    onShareAppMessage() {
        // 返回自定义分享信息
        return {
            title: 'My App',
            desc: 'My App description',
            path: 'pages/home/index',
        };
    },
    onHandleStart() {
        this.onHandleShowModal();
    },
    onHandleShowModal() {
        this.setData({
            isShow: true
        });
    },
    onHandleHideModal() {
        this.setData({
            isShow: false
        });
    }
});
