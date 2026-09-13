# 关于这个网站的说明
为了女朋友能顺利比赛，对html一窍不通的博主遂用GitHub搭建了个静态网站，内容完全由AI编写，效果还不错？maybe

## 本地预览

- 直接双击 `index.html`：地图从本地 `assets/geo/anhui.js` 加载，兼容浏览器对 `file://` 下 JSON 请求的限制。请保留完整的 `assets/` 文件夹。
- 在仓库目录运行 `python -m http.server 8000`，打开 `http://localhost:8000`：地图从本地 `assets/geo/anhui.json` 加载。
- 地图数据无需访问线上地址；ECharts、Swiper、字体和图标仍通过 CDN 加载，需要网络。

`assets/geo/anhui.js` 是 `anhui.json` 的脚本封装，内容为 `window.anhuiGeoJson = <GeoJSON>;`。更新地图边界时，需同步更新这两个文件。

## 城市图片

`picture/` 保存安徽 16 个市的代表性风景或小吃图片，每市一张。点击地图中的城市后，详情弹窗显示对应的本地图片。`picture/cities.js` 维护城市、图片路径和说明的对应关系，兼容双击打开及 HTTP / HTTPS 访问。

图片作者、原始页面和许可见 [图片来源记录](picture/SOURCES.md)。替换图片时，请同步更新对应关系及来源记录，并保留署名。
