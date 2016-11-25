//我的工具
function MyUtil(info){
	this.info = info;
}

//打印msg指定内容，并且附加打印的时间
MyUtil.prototype.print = function(msg){
	console.log("时间：" + this.handleDate() + "；打印：" + msg);
}

//把当前日期以字符串的形式返回
MyUtil.prototype.handleDate = function(){
	//2016-10-11 11:13:50
	var now = new Date();
	var result = now.getFullYear() + "-" +
	 (now.getMonth() + 1) + "-" +  now.getDate();
	return result;
}

/**
 * 判断指定的属性是不是指定对象原型上的属性，
 * 是返回true，否则返回false
 * @param  {Object}  obj  [判定的对象]
 * @param  {String}  prop [指定的属性]
 * @return {Boolean}      
 */
MyUtil.prototype.isPrototype = function(obj, prop){
	return !obj.hasOwnProperty(prop) && (prop in obj);
}
MyUtil.prototype.createXHR = createXHR;
function createXHR(){
			//如果浏览器支持XMLHttpRequest那么直接创建返回该对象
			if (typeof XMLHttpRequest != 'undefined'){
				return new XMLHttpRequest();
			}else if(typeof ActiveXObject != 'undefined'){
				if (typeof arguments.callee.activeXString != 'string'){
					var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
					for(var i = 0; i < versions.length;i++){
						try{
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString = versions[i]
						}catch(e){

						}
					}
				}
				return new ActiveXObject(arguments.callee.activeXString);
			}else{
				throw new Error("没法正常的创建ajax对象");
			}
		}
MyUtil.prototype.ajax = ajax;
//封装，把参数封装到对象中
function ajax(boj){
	//1.创建一个XMLHttpRequest对象
	var xhr = mTool.createXHR();
	//在不影响请求的前提下，加一个随机数（没有实际意义），让浏览器觉得每次都是一个新的请求，每次都从服务器获取数据，而不是读取缓存的数据
	obj.url = obj.url + '?rand=' + Math.random();
	//2.初始化
	if (async == true) {
		xhr.open(obj.method,obj.url);
	}else{
		xhr.open(obj.method,obj.url,false);
	}
	//3.发送
	xhr.setRequestHeader('Content-type','application.json');
	xhr.setRequestHeader('Content-type',application/www-form-unlencoded);
	//bookname = 123 && price = 100…
	if (obj.sendType == 'application/json') {
		xhr.send(JSON.stringify(obj.data));
	} else if (obj.sendType == 'application/x-www-form-urlencoded') {
		xhr.setRequestHeader('Content-type',application/www-form-urlencoded);
		xhr.send(handleData(ibj.data));
	} else {
		throw new Error('其他的格式数据发送为支持');
	}
	//4.处理响应
	xhr.onreadystatechange = function(){
		if (xhr.status == 200 || xhr.status == 304){
			if (xhr.readyState == 4){
				callback();
			}
		}
	}
	function callback(){
		obj.success(xhr.responseText);
	}
	
}

function handleData(data){
	var ar = [];
	for (var p in data) {
		ar.push(p + '=' + data[p]);
	}
	return ar.join('&');

var mTool = new MyUtil("cohen.lee的工具");

g.tool = mTool;