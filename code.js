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


/*  All of CS major core courses in Stanford University*/
var s=document.createElement("script")
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")
var body=document.getElementsByTagName("body")[0]
body.after(s)
d3.selectAll("h4").nodes().forEach(function(e){console.log(e.innerText)})
