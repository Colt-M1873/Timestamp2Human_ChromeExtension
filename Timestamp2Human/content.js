console.log("时间戳转换器插件已加载");

let currentPopup = null;

document.addEventListener('mouseup', function(event) {
    // console.log("检测到 mouseup 事件");
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    console.log("选中的文本:", selectedText);
    
    if ((selectedText.length === 13 || selectedText.length === 10) && /^\d+$/.test(selectedText)) {
        // console.log("检测到10位或13位数字");
        let timestamp = parseInt(selectedText);
        if (selectedText.length === 10) {
            timestamp *= 1000; // 将秒级时间戳转换为毫秒级
        }
        const date = new Date(timestamp);
        const formattedDate = date.toISOString();
        
        console.log("转换后的日期:", formattedDate);
        showPopup(formattedDate, event);
    } else if (isHexString(selectedText)) {
        // 将十六进制字符串转换为字节数组
        const byteArray = selectedText.split('\\x').filter(hex => hex).map(hex => parseInt(hex, 16));
        // 将字节数组转换为 Uint8Array
        const uint8Array = new Uint8Array(byteArray);
        // 使用 TextDecoder 解码 UTF-8
        const decoder = new TextDecoder('utf-8');
        const decodedText = decoder.decode(uint8Array);
        console.log("解码后的文本:", decodedText);
        showPopup(decodedText, event);
    } else {
        hidePopup();
    }
});

document.addEventListener('selectionchange', function() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (!((selectedText.length === 13 || selectedText.length === 10) && /^\d+$/.test(selectedText)) && !isHexString(selectedText)) {
        hidePopup();
    }
});

function showPopup(text, event) {
    // console.log("尝试显示弹窗");
    if (currentPopup) {
        hidePopup();
    }
    let popup = document.createElement('div');
    popup.textContent = text;
    popup.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        z-index: 2147483647;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    `;
    
    // 设置弹窗位置为鼠标光标位置
    popup.style.left = `${event.pageX}px`;
    popup.style.top = `${event.pageY}px`;
    
    document.body.appendChild(popup);
    // console.log("弹窗已添加到页面");
    
    currentPopup = popup;
}

function hidePopup() {
    if (currentPopup) {
        document.body.removeChild(currentPopup);
        currentPopup = null;
        // console.log("弹窗已移除");
    }
}

// 辅助函数：检查是否为十六进制字符串
function isHexString(str) {
    return /^(\\x[0-9A-Fa-f]{2})+$/.test(str);
}
