

代码使用方法
http://www.swiper.com.cn/usage/index.html

1.首先加载插件，需要用到的文件有swiper.min.js和swiper.min.css文件。

<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    ...
    <script src="path/to/swiper.min.js"></script>
</body>
</html>

如果你的页面加载了jQuery.js或者zepto.js，你可以选择使用更轻便的swiper.jquery.min.js。

<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    ...
    <script src="path/to/jquery.js"></script>
    <script src="path/to/swiper.jquery.min.js"></script>
</body>
</html>


2.HTML内容。

<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
<!-- 导航等组件可以放在container之外 -->

 3.你可能想要给Swiper定义一个大小，当然不要也行。

.swiper-container {
    width: 600px;
    height: 300px;
}  

4.初始化Swiper：最好是挨着</body>标签

<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })        
  </script>
</body>

如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化。

<script type="text/javascript">
window.onload = function() {
  ...
}
</script>

或者这样（Jquery和Zepto）

<script type="text/javascript">
$(document).ready(function () {
 ...
})
</script>

5.完成。恭喜你，现在你的Swiper应该已经能正常切换了，如果没有，你可以参考下这个测试包。现在开始添加各种选项和参数丰富你的Swiper，开启华丽移动前端创作之旅。



























