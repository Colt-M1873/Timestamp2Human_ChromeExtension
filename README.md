# 时间戳转换器

## 描述

此时间戳转换器可以即时将10位或13位Unix时间戳转换为人类可读的日期格式。当您在任何网页上选择一个时间戳数字时，此扩展程序会自动尝试将其解析为时间戳，并在选中文本上方的小弹窗中显示相应的ISO 8601格式的日期时间（YYYY-MM-DDTHH:mm:ss.sssZ格式）。

## 功能特点

- 自动检测选中的10位或13位数字
- 将Unix时间戳（以毫秒为单位）转换为YYYY-MM-DDTHH:mm:ss.sssZ格式
- 在非侵入式弹窗中显示转换后的日期
- 适用于任何网页

## 使用方法

在Chrome浏览器中安装此扩展程序
浏览任意网页
选择（高亮）任何您怀疑是Unix时间戳的13位数字
一个弹窗将出现在选中文本的上方，显示转换后的日期

## 安装步骤

1. 下载扩展程序文件
2. 打开Chrome浏览器，进入`chrome://extensions/`
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"，选择包含扩展程序文件的文件夹

## 兼容性

此扩展程序与所有网站兼容，不会干扰正常的浏览活动。它只在用户选择13位数字时激活。

## 隐私保护

时间戳转换器完全在用户的浏览器内运行，不会向外部服务器发送任何数据。您选择的文本和转换后的日期保持私密，不会被存储或传输

(代码部分完全由Cursor生成，从创建空文件到功能完成共耗时23分钟)
--------------------------------------------------


# Timestamp Converter

## Description

Timestamp Converter is a handy Chrome extension that instantly converts 13-digit Unix timestamps to human-readable dates. When you select a 13-digit number on any webpage, this extension automatically attempts to parse it as a timestamp and displays the corresponding date in YYYY-MM-DD format in a small popup above the selected text.

## Features

- Automatically detects selected 10-digit or 13-digit numbers
- Converts Unix timestamps (in milliseconds) to YYYY-MM-DDTHH:mm:ss.sssZ format
- Displays the converted date in a non-intrusive popup
- Works on any webpage

## How to Use

1. Install the extension in your Chrome browser
2. Browse any webpage
3. Select (highlight) any 10-digit or 13-digit number that you suspect is a Unix timestamp
4. A popup will appear above the selected text, showing the converted date
5. The popup disappears after 3 seconds

## Technical Details

- The extension uses content scripts to interact with web pages
- It listens for the 'mouseup' event to detect text selection
- The popup is created dynamically and positioned above the selected text
- The extension requires no special permissions, ensuring user privacy

## Installation

1. Download the extension files
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the folder containing the extension files

## Compatibility

This extension is compatible with all websites and does not interfere with normal browsing activities. It only activates when a user selects a 13-digit number.

## Privacy

Timestamp Converter operates entirely within the user's browser and does not send any data to external servers. Your selected text and converted dates remain private and are not stored or transmitted.