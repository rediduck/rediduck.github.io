# 关于这个网站的说明
为了女朋友能顺利比赛，对html一窍不通的博主遂用GitHub搭建了个静态网站，内容完全由AI编写，效果还不错？maybe

## 本地预览

- 直接双击 `index.html`：地图从本地 `assets/geo/anhui.js` 加载，兼容浏览器对 `file://` 下 JSON 请求的限制。请保留完整的 `assets/` 文件夹。
- 在仓库目录运行 `python -m http.server 8000`，打开 `http://localhost:8000`：地图从本地 `assets/geo/anhui.json` 加载。
- 地图数据无需访问线上地址；ECharts、Swiper、字体和图标仍通过 CDN 加载，需要网络。

`assets/geo/anhui.js` 是 `anhui.json` 的脚本封装，内容为 `window.anhuiGeoJson = <GeoJSON>;`。更新地图边界时，需同步更新这两个文件。
