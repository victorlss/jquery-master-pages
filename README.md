# jQuery Master Pages

Using master pages like <a href="https://msdn.microsoft.com/en-us/library/wtxbf3hh.aspx" target="_blank">ASP.NET</a> with jQuery.<br />

<a href="https://raw.githubusercontent.com/victorlss/jquery-master-pages/master/src/jquery.masterpages-1.0.1.js" target="_blank">Latest Version Download (1.1.0)</a>

##### Master Page code:
```html
<html>
	<head>
		<ContentPlaceHolder id="HeadContent"></ContentPlaceHolder>
	</head>
	<body>
		<p>Content in master page</p>
		<hr />	
		<ContentPlaceHolder id="MainContent"></ContentPlaceHolder>
		<ContentPlaceHolder id="FooterContent"></ContentPlaceHolder>
	</body>	
</html>
```

##### Page code:
```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="jquery.masterpages-1.0.1.js" MasterPageFile="templates/site.master.html"></script>

<!-- head -->
<Content ContentPlaceHolderID="HeadContent">
	<title>Title of Page</title>
</Content>

<!-- content -->
<Content ContentPlaceHolderID="MainContent"/>
	<p>MainContent of current page</p>
</Content>

<!-- footer -->
<Content ContentPlaceHolderID="FooterContent"/>
	<p>FooterContent of current page</p>
</Content>
```

Authors: <a href="https://github.com/victorlss" target="_blank">Victor Silva</a>, <a href="https://github.com/Ykary" target="_blank">Alyson Freitas</a>, <a href="https://github.com/edgardleal" target="_blank">Edgard Leal</a>.<br />
All Rights Reserved.<br />
Use, reproduction, distribution, and modification of this code is subject to the terms and conditions of the MIT license, available at <a href="http://www.opensource.org/licenses/mit-license.php" target="_blank">http://www.opensource.org/licenses/mit-license.php</a>.