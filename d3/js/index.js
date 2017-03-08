/*
* @Author: wangchunran
* @Date:   2017-03-08 12:25:25
* @Last Modified by:   wangchunran
* @Last Modified time: 2017-03-08 21:51:02
*/

'use strict';
var svg = d3.select("#container")
.append("svg")
.attr("width",250)
.attr("height",500)

d3.select("svg")
.append("g")
.attr("transform","translate(50,30)")


var data=[1,2,3,4,5,6,7,8,9]
var line = d3.svg.line()
// alert(line_generator)
.x(function(d,i){return i;})
.y(function(d){return d;})

d3.select("g")
.append("path")
.attr("d",line)
