function jsonp(url,parameter,callback){
	//生成一个script节点
	var script=document.createElement("script");
	
	//生成一个随机字符串作为回调函数名
	var randomKey="cbf"+new Date().getTime();
	//将callback以生成的随机串为属性名添加到window对象上，这样，在页面的任意位置都能以window[randomKey]()形式访问回调函数
	window[randomKey]=callback;
	url+="?callback="+randomKey;
	
	//拼接参数
	if (parameter) {
		for (var p in parameter) {
			url+=("&"+p+"="+parameter[p]);
		}
	}
	
	//设置script节点的src属性
	script.src=url;
	//拼接到dom结构中
	document.body.appendChild(script);
	
	//操作完成后移除script标签
	script.onload=function(){
		document.body.removeChild(script);
	}
}
