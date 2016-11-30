;(function(){
	//存储cookie
	function setCookie(key,value,day){
		//如果day存在，则需要设置存储时间
		//如果不存在，则直接存储
		if (day==undefined) {
			document.cookie=(key+"="+value);
		}else{
			//需要处理时间
			var date=new Date();
			date.setDate(date.getDate()+day);
			document.cookie=(key+"="+value+";expires="+date.toUTCString());
		}
	}
	
	//取出cookie
	function getCookie(key){
		//创建空对象，目的是存储所有的键值对
		var obj={};
		var cookies=document.cookie.split(";");
		for (var item of cookies) {
			//把每隔元素根据=进行分割
			item=item.split("=");
			//取出key值和value值分别赋值给obj对象
			obj[item[0]]=item[1];
		}
		return(key?obj[key]:obj);
	}
	
	//删除cookie
	function removeCookie(key){
		setCookie(key,"",-1);
	}
	
	//清除cookie
	function clear{
		for(var key in getCookie()){
			removeCookie(key);
		}
	}
	
	window.setCookie=setCookie;
	window.getCookie=getCookie;
	window.removeCookie=removeCookie;
	window.clear=clear;
})();
