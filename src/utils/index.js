export default class Utils {

    constructor() {
        this.props = {};
    }

    handlerPagination(data) {
        return data;
    }

    handlerHtmlFontSize() {
        const iWidth = document.body.clientWidth
            || document.documentElement.clientWidth;
        const fontSize = iWidth / 3.75;
        const oHtml = document.querySelector('html');
        oHtml.style.fontSize = fontSize + 'px';
    }

    exeHandlerHtmlFontSize() {
        this.handlerHtmlFontSize();
        window.onresize = () => {
            this.handlerHtmlFontSize()
        }
    }
}