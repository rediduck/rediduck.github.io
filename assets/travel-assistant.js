// Curated inspiration runs in memory; no account, storage or server API.
window.initTravelAssistant = function (cities, showCity, getBlindboxCity) {
    const routes = {
        "合肥": ["包公园 → 城区午餐 → 逍遥津漫步", "三河古镇慢游 → 尝三河米饺"],
        "芜湖": ["赭山公园 → 广济寺 → 尝虾籽面", "方特主题游玩，留足体验时间"],
        "蚌埠": ["龙子湖散步 → 城区午餐 → 湖畔看景", "张公山公园 → 尝烧饼夹里脊"],
        "淮南": ["寿县古城 → 通淝门 → 街巷漫步", "八公山游览 → 尝淮南牛肉汤"],
        "马鞍山": ["采石矶 → 太白楼 → 江畔看景", "雨山湖慢走 → 城区寻味"],
        "淮北": ["相山公园 → 看山与休息 → 城区用餐", "隋唐运河古镇漫步 → 尝当地面食"],
        "铜陵": ["天井湖 → 湖畔远眺 → 品尝酥糖", "城区漫步 → 寻访铜都文化景观"],
        "安庆": ["迎江寺一带漫步 → 城区小吃", "天柱山游览，按体力选择步行路段"],
        "黄山": ["黄山风景区看松与奇峰，按体力选择路线", "西递或宏村二选一 → 徽州风味"],
        "滁州": ["琅琊山 → 醉翁亭 → 山林慢走", "明中都遗址，另留交通与游览时间"],
        "阜阳": ["颍州西湖慢游 → 品尝格拉条", "八里河游览 → 返回城区休息"],
        "宿州": ["萧县皇藏峪 → 山林漫步与休息", "灵璧赏石主题游，另留交通时间"],
        "六安": ["天堂寨山林游览，预留休息时间", "慢游休整 → 寻一杯当地茶香"],
        "亳州": ["花戏楼 → 老街漫步 → 尝牛肉馍", "城区慢游 → 了解药材与酒文化"],
        "池州": ["九华山看景，按体力选择游览范围", "杏花村休闲漫步 → 城区寻味"],
        "宣城": ["敬亭山慢游 → 城区午餐与休息", "泾县桃花潭 → 了解宣纸文化"]
    };
    const el = id => document.getElementById(id);
    const citySelect = el("travelCity");
    let currentCity = cities[0];
    let currentDays = 1;
    const cardModal = el("travelCardModal");

    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city.name;
        option.textContent = city.name;
        citySelect.append(option);
    });

    function renderDays(target) {
        target.replaceChildren();
        routes[currentCity.name].slice(0, currentDays).forEach((route, index) => {
            const item = document.createElement("li");
            const day = document.createElement("strong");
            day.textContent = `DAY 0${index + 1} / 第${index + 1}天`;
            const text = document.createElement("p");
            text.textContent = route;
            item.append(day, text);
            target.append(item);
        });
    }

    function renderRoute() {
        currentCity = cities.find(city => city.name === citySelect.value) || cities[0];
        currentDays = el("travelDays").value === "2" ? 2 : 1;
        el("travelRouteTitle").textContent = `${currentCity.name} · ${currentDays === 1 ? "一日漫游" : "两日慢游"}`;
        renderDays(el("travelRouteDays"));
        el("travelRouteNote").textContent = window.cityGuides?.[currentCity.name]?.experience || currentCity.desc;
    }

    function refreshBlindbox() {
        const city = getBlindboxCity();
        el("useBlindboxCity").disabled = !city;
        el("travelFormHint").textContent = city ? `这次盲盒遇见了${city.name}，可以直接用它规划出游。` : "先开一次盲盒，也可以让惊喜决定下一站。";
    }

    el("travelForm").addEventListener("submit", event => { event.preventDefault(); renderRoute(); });
    citySelect.addEventListener("change", renderRoute);
    el("travelDays").addEventListener("change", renderRoute);
    el("useBlindboxCity").addEventListener("click", () => {
        const city = getBlindboxCity();
        if (!city) return;
        citySelect.value = city.name;
        renderRoute();
    });
    el("travelCityDetail").addEventListener("click", () => showCity(currentCity));

    el("showTravelCard").addEventListener("click", () => {
        el("travelCardTitle").textContent = `下一站，${currentCity.name}`;
        el("travelCardSubtitle").textContent = `${currentDays === 1 ? "一日漫游" : "两日慢游"} · ${currentCity.desc}`;
        renderDays(el("travelCardDays"));
        el("travelCardFood").textContent = `风味清单 / ${currentCity.food}`;
        cardModal.hidden = false;
        el("closeTravelCard").focus();
    });
    function closeCard() {
        cardModal.hidden = true;
        el("showTravelCard").focus();
    }
    el("closeTravelCard").addEventListener("click", closeCard);
    cardModal.addEventListener("click", event => { if (event.target === cardModal) closeCard(); });
    cardModal.addEventListener("keydown", event => {
        if (event.key === "Escape") closeCard();
        if (event.key === "Tab") { event.preventDefault(); el("closeTravelCard").focus(); }
    });
    renderRoute();
    refreshBlindbox();
    return { refreshBlindbox };
};
