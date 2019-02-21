/*  step1  */
var s = document.createElement("script")
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")
var body = document.getElementsByTagName("body")[0]
body.after(s)
d3.selectAll("div.fusion-text a").nodes().forEach(function(e){console.log(e.innerText)})




/*  step2  */
var s=document.createElement("script")
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")
var body=document.getElementsByTagName("body")[0]
body.after(s)
d3.selectAll("div#main>ul a").nodes().forEach(function(e){console.log(e.innerText)})


/*  All of Stanford University Interdisciplinary Programs  */
var s=document.createElement("script")
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")
var body=document.getElementsByTagName("body")[0]
body.after(s)
d3.selectAll("div.alpha-group a").nodes().forEach(function(e){console.log(e.innerText)})


/*  All Majors in Furman University  */
var s=document.createElement("script")
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")
var body=document.getElementsByTagName("body")[0]
body.after(s)
d3.selectAll("div.panel_active ul.degrees-content__list:first-of-type").nodes().forEach(function(e){console.log(e.innerText)})
