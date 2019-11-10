let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name; // 网页上你好xxx两种方法一种写死 一种就是请求来
      console.log(object);
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyState=1
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      // request.status 实际上是返回的状态
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 css 失败");
      }
    }
  };
  request.send(); // readyState = 2,响应第一个字节打印出3,下载完了打印4
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log(request.response);
  };
  request.onerror = () => {};
  // 创建 script 标签
  const script = document.createElement("script");
  // 填写 script 内容
  script.innerHTML = request.response;
  // 插到身体里
  document.body.appendChild(script);
  request.send();
};

getHTML.onclick = () => {
  request.onload = () => {
    console.log("request.response", request.response);
    // 创建div
    const div = document.createElement("div");
    // 填写div内容
    div.innerHTML = request.response;
    // 插入到身体里
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  // onerror并没有很好的匹配ajax,onerror最开始的时候是匹配一个图片失败了,css失败了，js失败了
  // 专业的前端会用onreadystatechange去匹配
  request.send();
  console.log("进入getHTML完成");
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseXML);
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
