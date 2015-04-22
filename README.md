# jQuery Master Pages

Using master pages like <a href="https://msdn.microsoft.com/en-us/library/wtxbf3hh.aspx" target="_blank">ASP.NET</a> with jQuery
Download the <a href="https://raw.githubusercontent.com/victorlss/jquery-master-pages/master/_lib/jquery.masterpages-1.0.1.min.js" target="_blank">production version</a> or the Download the <a href="https://raw.githubusercontent.com/victorlss/jquery-master-pages/master/_lib/jquery.masterpages-1.0.1.js" target="_blank">development version</a>.

##### Master Page code:
```html
<html>
	<head>
		<ContentPlaceHolder id="HeadContent"></ContentPlaceHolder>
	</head>
	<body>
		<p>Content that is in the master page</p>
		<hr />	
		<ContentPlaceHolder id="MainContent"></ContentPlaceHolder>
		<ContentPlaceHolder id="FooterContent"></ContentPlaceHolder>
	</body>	
</html>
```

##### Page code:
```html
<script src="_lib/jquery-1.4.1.min.js"></script>
<script src="_lib/jquery.masterpages-1.0.1.min.js" MasterPageFile="_template/site.master.html"></script>

<!-- head -->
<Content ContentPlaceHolderID="HeadContent">
	<title>This is the title</title>
</Content>

<!-- content -->
<Content ContentPlaceHolderID="MainContent"/>
	<p>This is the content</p>
</Content>

<!-- footer -->
<Content ContentPlaceHolderID="FooterContent"/>
	<p>This is the footer</p>
</Content>
```

Built by <a href="https://github.com/victorlss" target="_blank">Victor Silva</a> and <a href="https://github.com/Ykary" target="_blank">Alyson Freitas</a>