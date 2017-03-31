---
layout: post
title: Html的模板使用
description: "在使用重复性代码时，可用Html模板"
tags: [Web前端总结]
image:
  background: index-bg.jpg
---

## 在请求数据时，重复性的内容可以通过模板添加到html中，大大减少了代码量

#### 实现原理：一个stringObj使用replace替换stringObj中需要变化的量，将这个stringObj插入到想要的地方

#### 1、构建HTML
```html

<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="jQuery-1.11.3.js"></script>
	<script src="index.js"></script>
	<title>使用模板</title>
</head>
<body>
	<div class="content">
	
	</div>
	<script type="text/template" id="test">
		<div class="test1">
			<p> {$name} </p>
		</div>
	</script>
</body>
</html>

```

#### 2、将模板打印成stringObj：

#### var test = $('#test').text();       //是一个字符串对象，替换该对象中的{$aaa}

#### 请求数据，为了测试我请求了本地data.json

```javascript
$.ajax({
	"type":"get",
	"url":"data.json",
	"success":function(data){                                           //定义一个函数，返回数组
				return{
				aaa:data.name
				}
			}
			varnm=function(data){
	console.log(data);
	vartest=$('#test').text();                                   //将模板打印成stringObj
		$.each(data,function(index,item){       //遍历data，获取data中的name值
		$.tpl(test,nm(item)).appendTo('.content');         //调用tpl函数，将模板中的{$name}替换为数组data中的名字，并插入到content这个class里
	})
	}
})
```

#### 本地Json中的内容：

```yaml
[
	{
	"name":"张三"
	},
	{
	"name":"李四"
	},
	{
	"name":"王五"
	},
	{
	"name":"周六"
	},
	{
	"name":"三七"
	}
]

```

#### 3、在JavaScript中自定义一个模板函数

```javascript
$.tpl = function (template,params,pureHtml,escape){       //param使用nm()函数返回一个数组
	var rtn = template.repalace(/\{\$(.+?)\}/gi,function(total,param){   //total取得是要替换整个的字符串，param取的是{$ }内部字符串
		return (params[param] === undefined )? total:(escape?encodeURIComponent(params[param]):params[param]);
	})
}
```

### 介绍下，JS中replace的使用方法


  *  返回根据正则表达式进行文字替换后的字符串的复制。
   
  *  stringObj.replace(rgExp, replaceText)
  
  *  参数
  
  >  stringObj 
  
  >  必选项。要执行该替换的 String 对象或字符串文字。该字符串不会被 replace 方法修改。 
  
  >  rgExp 
  
  >  必选项。为包含正则表达式模式或可用标志的正则表达式对象。也可以是 String 对象或文字。如果 rgExp 不是正则表达式对象，它将被转换为字符串，并进行精确的查找；不要尝试将字符串转化为正则表达式。
  
  >  replaceText 
  
  >  必选项。是一个String 对象或字符串文字，对于stringObj 中每个匹配 rgExp 中的位置都用该对象所包含的文字加以替换。在 Jscript 5.5 或更新版本中，replaceText 参数也可以是返回替换文本的函数。

### 最终结果：

```html
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="jQuery-1.11.3.js"></script>
	<script src="index.js"></script>
	<title>使用模板</title>
</head>
<body>
	<div class="content">
    <div class="test1">
			<p>张三</p>   
		</div>
    <div class="test1">
			<p>李四</p>   
		</div>
    <div class="test1">
			<p>王五</p>   
		</div>
    <div class="test1">
			<p>周六</p>   
		</div>
    <div class="test1">
			<p>三七</p>   
		</div>
	</div>
	<script type="text/template"id="test">
		<div class="test1">
			<p>{$name}</p>   
		</div>
	</script>
</body>
</html>
```