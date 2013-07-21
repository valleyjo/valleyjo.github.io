/*
 * Generates the data visualizations for the Personal Data report 
 */

function generateHeatMap(dataSource, heatmap_ID){
//Obtain a string composed of the entire contents of the CSV file
    d3.text(dataSource, function(raw_data){

        //Parse the string into JSON objects. NOTE: the values are string literals
        var data = d3.csv.parse(raw_data);

        //Convert the string values for hours, week, and day to numbers so the values are mathematically operable
        data.forEach(function(o) {
            o.hours = parseFloat(o.hours);
            o.week = parseInt(o.week);
            o.day = parseInt(o.day);
        });

        //height of each row in the heatmap
        //width of each column in the heatmap
        var gridSize = 30,
            h = gridSize,
            w = gridSize,
            rectPadding = 40;

        //Colors for the linear color scale of the heatmap
        var colorLow = '#B7312D', colorMed = '#FFFDB5', colorHigh = '#3E813E';

        //Margin values
        var margin = {top: 1, right: 1, bottom: 1, left: 1},
            width = 212,
            height = 152;

        //Create the color scale
        var colorScale = d3.scale.linear()
             .domain([6.5, 7.5, 10])
             .range([colorLow, colorMed, colorHigh]);

        //Create the <div> that will be our tooltip containing the date and value
        var div = d3.select(heatmap_ID).append("div")   
                  .attr("class", "tooltip")               
                  .style("opacity", 0);

        //Create the SVG container for our heatmap and give it the margin values
        var svg = d3.select(heatmap_ID).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //Create each individual square (square = day) in the heatmap
        var heatMap = svg.selectAll(".heatmap")
            .data(data, function(d) { return d.day + ':' + d.week; })
          .enter().append("svg:rect")
            .attr("x", function(d) { return d.day * h; })
            .attr("y", function(d) { return d.week * w; })
            .attr("width", w)
            .attr("height", h)
            .attr("stroke-width", 1)
            .attr("stroke", "black")   
            .style("fill", function(d) {
                    if (d.hours === 0)
                        return "white";
                    else
                        return colorScale(d.hours); 
            })
            .on("mouseover", function(d) {      
                    div.transition()        
                       .duration(200)      
                       .style("opacity", 0.9);
                div.html( function(){
                    if (d.hours === 0)
                        return d.date + "<br/>no data";
                    else
                        return d.date + "<br/>"  + Number(d.hours).toFixed(2) + " hours";
                })
                       .style("left", (d3.mouse(this)[0] + 20) + "px")     
                       .style("top", (d3.mouse(this)[1] + 20) + "px"); 
             })
            .on("mouseout", function(d) {
                    div.transition()
                       .duration(500)
                       .style("opacity", 0);
            });
    });
}

function generateDonut(){

// ------------------------- Pre-liminary set-up --------------------------

//The two data sets for home and school
var school = { label: 'At School', pct: [45,50,5 ] },
    home = { label: 'At Home',     pct: [10,10,80] }
	
//On page load, load the school data set
data = school;

//Each label goes with its respective percentage
var labels = ['Walk ', 'Bus ', 'Car '];

//Specify the dimensions for the donut
var w = 350,                       
    h = 350,
    r = Math.min(w, h) / 2,        	// arc radius
    dur = 1000,                     // duration of the transition, in milliseconds
    color = d3.scale.ordinal()		// b/c there is a descrete data set, use an ordinal scale
    			.domain(['Walk', 'Bus', 'Car'])
    			.range(['#e6550d','#fd8d3c','#fdae6b']),
    donut = d3.layout.pie().sort(null),
    arc = d3.svg.arc().innerRadius(r - 10).outerRadius(r - 80);


// ----------------------- Begin donut generation! --------------------------

var svg = d3.select("#transportation").append("svg:svg")
    .attr("width", w).attr("height", h);

//Group the elements for easy translations
var arc_grp = svg.append("svg:g")
    .attr("class", "arcGrp")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var label_group = svg.append("svg:g")
    .attr("class", "lblGroup")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

var center_group = svg.append("svg:g")
    .attr("class", "ctrGroup")
    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

//Create the center label for the donut chart, using the label in the data set from above
var pieLabel = center_group.append("svg:text")
    .attr("dy", ".35em").attr("class", "chartLabel")
    .attr("text-anchor", "middle")
    .text(data.label);

//Create the individual arcs representing the percentages for each travel medium
var arcs = arc_grp.selectAll("path")
    .data(donut(data.pct));
arcs.enter().append("svg:path")
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    .attr("fill", function(d, i) {return color(i);})
    .attr("d", arc)
    .each(function(d) {this._current = d});

//Create the labels for each arc in the chart
var sliceLabel = label_group.selectAll("text")
    .data(donut(data.pct));
sliceLabel.enter().append("svg:text")
    .attr("class", "arcLabel")
    .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
    .attr("text-anchor", "middle")
    .text(function(d, i) {return labels[i]; });

// --------------- Chart Update Functionality ---------------

// Store the currently-displayed angles in this._current
// Then, interpolate from this._current to the new angles
function arcTween(a) {
    var i = d3.interpolate(this._current, a);
    this._current = i(0);
    return function(t) {
        return arc(i(t));
    };
}

//Update chart. Uses the href of the clicked link to select the NEW desired data set.
//Also recomputes the arc angles and rebinds the data and uses a generic D3 transition.
function updateChart(location) {
    data = eval(location); // which location should be displayed?

    arcs.data(donut(data.pct)); // recompute angles, rebind data
    arcs.transition().ease("bounce").duration(dur).attrTween("d", arcTween);

    sliceLabel.data(donut(data.pct));
    sliceLabel.transition().ease("bounce").duration(dur)
        .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; });
        //.style("fill-opacity", function(d) {return d.value==0 ? 1e-6 : 1;});
        
    pieLabel.text(data.label);
}

//Click handler. Works by passing the href, excluding the '#', of the clicked link
//to the update chart function.
$("#location a").click(function() {
    updateChart(this.href.slice(this.href.indexOf('#') + 1));
});
}