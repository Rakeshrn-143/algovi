const OBJ_HIDDEN = -1;
const VERTEX_SHAPE_CIRCLE = "circle";
const VERTEX_SHAPE_RECT = "rect";
const VERTEX_DEFAULT = "default";
const VERTEX_NORMAL_BLUE = "normal_blue";
const VERTEX_NORMAL_GREEN = "normal_green";
const VERTEX_HIGHLIGHTED = "highlighted";
const VERTEX_HIGHLIGHTED_RECT = "highlighted_rect";
const VERTEX_TRAVERSED = "traversed";
const VERTEX_RESULT = "result";
const VERTEX_RESULT_RECT = "result_rect";
const VERTEX_RECT = "rect";
const VERTEX_BLUE_FILL = "blueFill";
const VERTEX_GREEN_FILL = "greenFill";
const VERTEX_GREY_FILL = "greyFill";
const VERTEX_PINK_FILL = "pinkFill";
const VERTEX_RED_FILL = "redFill";
const VERTEX_BLUE_OUTLINE = "blueOutline";
const VERTEX_GREEN_OUTLINE = "greenOutline";
const VERTEX_GREY_OUTLINE = "greyOutline";
const VERTEX_PINK_OUTLINE = "pinkOutline";
const VERTEX_RED_OUTLINE = "redOutline";
const EDGE_DEFAULT = "default";
const EDGE_HIGHLIGHTED = "highlighted";
const EDGE_TRAVERSED = "traversed";
const EDGE_BLUE = "blue";
const EDGE_GREEN = "green";
const EDGE_GREY = "grey";
const EDGE_PINK = "pink";
const EDGE_RED = "red";
const EDGE_TYPE_UDE = 0;
const EDGE_TYPE_DE = 1;
const EDGE_TYPE_BDE = 2;
const POLYGON_DEFAULT = "default";
const POLYGON_HIDDEN = "hidden";
const POLYGON_BLUE_FILL = "blueFill";
const POLYGON_GREEN_FILL = "greenFill";
const POLYGON_GREY_FILL = "greyFill";
const POLYGON_PINK_FILL = "pinkFill";
const POLYGON_RED_FILL = "redFill";
const POLYGON_BLUE_TRANSPARENT = "blueTransparent";
const POLYGON_GREEN_TRANSPARENT = "greenTransparent";
const POLYGON_GREY_TRANSPARENT = "greyTransparent";
const POLYGON_PINK_TRANSPARENT = "pinkTransparent";
const POLYGON_RED_TRANSPARENT = "redTransparent";
const NO_ITERATION = -1;
const NO_STATELIST = {};
const ANIMATION_PLAY = 1;
const ANIMATION_PAUSE = 0;
const ANIMATION_STOP = -1;
const UPDATE_FORWARD = true;
const UPDATE_BACKWARD = false;
const MODE_GET_ALL_SUBMITTED_GRAPHS_SUMMARY = 21;
const MODE_SUBMIT_GRAPH = 22;
const MODE_GET_SUBMITTED_GRAPH_BY_ID = 23;
const MODE_GET_ALL_GRAPH_TOPICS = 24;
const MODE_DELETE_SUBMITTED_GRAPH = 25;
const MODE_COMMIT_SUBMITTED_GRAPH = 26;
const MODE_ADD_SUBMITTED_GRAPH_RATING = 27;
const MODE_GET_RANDOM_SUBMITTED_GRAPH = 28;
const MODE_GET_ALL_COMMITTED_GRAPHS_SUMMARY = 29;
const MODE_DELETE_COMMITTED_GRAPH = 30;

function arrowXY(x1, y1, x2, y2, t) {
    var dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (x1 === x2) {
        if (t === 1) return {
            x: x2 - 4,
            y: y2
        };
        else return {
            x: x2 + 4,
            y: y2
        }
    }
    if (y1 === y2) {
        if (t === 1) return {
            x: x2,
            y: y2 - 4
        };
        else return {
            x: x2,
            y: y2 + 4
        }
    }
    var m1 = (y2 - y1) / (x2 - x1);
    var c1 = y1 - m1 * x1;
    var m2 = -1 / m1;
    var c2 = y2 - m2 * x2;
    var d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var v = 4;
    d = d * d + v * v;
    var D = d;
    var z1 = c2 - y1;
    var a = 1 + m2 * m2;
    var b = 2 * m2 * z1 - 2 * x1;
    var c = x1 * x1 + z1 * z1 - D;
    var delta = b * b - 4 * a * c;
    delta = Math.sqrt(delta);
    var x_1 = (-b + delta) / (2 * a);
    var y_1 = m2 * x_1 + c2;
    var x_2 = (-b - delta) / (2 * a);
    var y_2 = m2 * x_2 + c2;
    if (t === 2) return {
        x: x_1,
        y: y_1
    };
    else return {
        x: x_2,
        y: y_2
    }
}

function weightXY(x1, y1, x2, y2, t, curve) {
    var dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var x2 = (x1 + x2) / 2;
    var y2 = (y1 + y2) / 2;
    if (x1 === x2) {
        if (t === 2) return {
            x: x2 + 16,
            y: y2
        };
        else return {
            x: x2 - 16,
            y: y2
        }
    }
    if (y1 === y2) {
        if (t === 2) return {
            x: x2,
            y: y2 + 16
        };
        else return {
            x: x2,
            y: y2 - 16
        }
    }
    var m1 = (y2 - y1) / (x2 - x1);
    var c1 = y1 - m1 * x1;
    var m2 = -1 / m1;
    var c2 = y2 - m2 * x2;
    var d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var v = 16;
    if (curve === 1) v = 50;
    if (curve === 2) v = 18;
    d = d * d + v * v;
    var D = d;
    var z1 = c2 - y1;
    var a = 1 + m2 * m2;
    var b = 2 * m2 * z1 - 2 * x1;
    var c = x1 * x1 + z1 * z1 - D;
    var delta = b * b - 4 * a * c;
    delta = Math.sqrt(delta);
    var x_1 = (-b + delta) / (2 * a);
    var y_1 = m2 * x_1 + c2;
    var x_2 = (-b - delta) / (2 * a);
    var y_2 = m2 * x_2 + c2;
    if (t === 2) return {
        x: x_1,
        y: y_1
    };
    else return {
        x: x_2,
        y: y_2
    }
}

function representationConvert(iVL, iEL, weightedVertex = false) {
    var newiVL = [];
    var newiEL = [];
    for (var key in iVL) {
        var vertex = iVL[key];
        if (!weightedVertex) {
            newiVL.push({
                id: parseInt(key),
                x: vertex["x"],
                y: vertex["y"]
            })
        } else {
            newiVL.push({
                id: parseInt(key),
                x: vertex["x"],
                y: vertex["y"],
                weight: vertex["w"]
            })
        }
    }
    for (var key in iEL) {
        var edge = iEL[key];
        var u = edge["u"];
        var v = edge["v"];
        var weight = edge["w"].toString();
        newiEL.push({
            source: newiVL[u],
            target: newiVL[v],
            weight: weight
        })
    }
    return [newiVL, newiEL]
}
var GraphVisu = function(arg1, arg2, arg3, initNodes, initLinks, vertexUnweighted, isGraphDs = false, maxVertex = 100) {
    const NODE_RADIUS = 16;
    var menu = (arg1 === false ? 1 : 0) * 2 + (arg2 === false ? 1 : 0) + 1;
    var UNDIRECTED = arg1,
        UNWEIGHTED = arg2,
        VERTEX_UNWEIGHTED = vertexUnweighted;
    var nodes;
    var links;
    var maxNodeId = -1;
    var adjMat = [];
    this.amountVertex = function() {
        return nodes.length
    };
    this.amountEdge = function() {
        return links.length
    };
    var maxNumberVertex = maxVertex,
        grid = 20,
        width = 640,
        height = 360,
        colors = d3.scale.category10();
    var selector = "#drawgraph #viz";
    d3.select(selector).selectAll("svg").remove();
    var svg = d3.select(selector).append("svg").attr("width", width).attr("height", height);
    var countNodeId = new Array(maxNumberVertex);
    for (var i = countNodeId.length; i >= 0; i--) countNodeId[i] = 0;
    var lastNodeId;
    if (VERTEX_UNWEIGHTED === true) {
        nodes = [{
            id: 0,
            x: 100,
            y: 100
        }, {
            id: 1,
            x: 200,
            y: 200
        }, {
            id: 2,
            x: 300,
            y: 300
        }];
        lastNodeId = 3
    } else {
        nodes = [{
            id: 0,
            x: 100,
            y: 100,
            w: 3
        }, {
            id: 1,
            x: 200,
            y: 200,
            w: 5
        }, {
            id: 2,
            x: 300,
            y: 300,
            w: 7
        }];
        lastNodeId = 3
    }
    if (UNWEIGHTED === true) {
        links = [{
            source: nodes[0],
            target: nodes[1]
        }, {
            source: nodes[1],
            target: nodes[2]
        }]
    } else {
        links = [{
            source: nodes[0],
            target: nodes[1],
            weight: 2
        }, {
            source: nodes[1],
            target: nodes[2],
            weight: 2
        }]
    }
    if (initNodes == undefined || initLinks == undefined) {
        links = [];
        nodes = []
    } else {
        nodes = initNodes;
        links = initLinks
    }
    lastNodeId = 0;
    lastNodeId = nodes.length;
    for (var i = 0; i < nodes.length; i++) countNodeId[nodes[i].id]++;
    for (var i = 0; i < links.length; i++)
        for (var j = 0; j < nodes.length; j++) {
            if (nodes[j].id === links[i].source.id) links[i].source = nodes[j];
            if (nodes[j].id === links[i].target.id) links[i].target = nodes[j]
        }
    svg.append("svg:defs").append("svg:marker").attr("id", "end-arrow").attr("viewBox", "0 -5 10 10").attr("refX", 6).attr("markerWidth", 3).attr("markerHeight", 3).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5").attr("fill", "#000");
    var drag_line = svg.append("svg:path").attr("class", "link dragline hidden").attr("d", "M0,0L0,0");
    var path;
    var circle;
    var weight;
    var selected_node = null,
        selected_link = null,
        mousedown_link = null,
        mousedown_node = null,
        mouseup_node = null;

    function resetMouseVars() {
        mousedown_node = null;
        mouseup_node = null;
        mousedown_link = null
    }

    function restart() {
        svg.selectAll("g").remove();
        path = svg.append("svg:g").selectAll("path");
        circle = svg.append("svg:g").selectAll("g");
        weight = svg.append("svg:g").selectAll("text");
        circle = circle.data(nodes, function(d) {
            return d.id
        });
        circle.selectAll("circle").style("fill", function(d) {
            return d === selected_node ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id)
        });
        var g = circle.enter().append("svg:g");
        g.append("svg:circle").attr("class", "node").attr("r", NODE_RADIUS).attr("cx", function(d) {
            return d.x
        }).attr("cy", function(d) {
            return d.y
        }).style("fill", function(d) {
            return d === selected_node ? d3.rgb(255, 138, 39) : d3.rgb(238, 238, 238)
        }).on("mousedown", function(d) {
            if (d3.event.ctrlKey) return;
            mousedown_node = d;
            if (mousedown_node === selected_node) selected_node = null;
            else selected_node = mousedown_node;
            selected_link = null;
            drag_line.style("marker-end", "url(#end-arrow)").classed("hidden", false).attr("d", "M" + mousedown_node.x + "," + mousedown_node.y + "L" + mousedown_node.x + "," + mousedown_node.y);
            restart()
        }).on("mouseup", function(d) {
            if (!mousedown_node) return;
            drag_line.classed("hidden", true).style("marker-end", "");
            mouseup_node = d;
            if (mouseup_node === mousedown_node) {
                resetMouseVars();
                return
            }
            var source, target, direction;
            source = mousedown_node;
            target = mouseup_node;
            var link;
            if (UNDIRECTED === false) {
                link = links.filter(function(l) {
                    return l.source === source && l.target === target
                })[0]
            } else {
                link = links.filter(function(l) {
                    return l.source === source && l.target === target || l.source === target && l.target === source
                })[0]
            }
            if (!link) {
                if (UNWEIGHTED === false) {
                    var dist = parseInt(Math.sqrt(Math.pow(source.x - target.x, 2) + Math.pow(source.y - target.y, 2)) / 100 + 1);
                    link = {
                        source: source,
                        target: target,
                        weight: dist
                    };
                    links.push(link)
                } else {
                    link = {
                        source: source,
                        target: target
                    };
                    links.push(link)
                }
            }
            selected_link = link;
            selected_node = null;
            restart()
        });
        g.append("svg:text").attr("x", function(d) {
            return d.x
        }).attr("y", function(d) {
            return d.y + 16 / 3
        }).attr("class", "id").text(function(d) {
            return d.id
        });
        path = path.data(links);
        path.classed("selected", function(d) {
            return d === selected_link
        });
        path.enter().append("svg:path").attr("class", "link").classed("selected", function(d) {
            return d === selected_link
        }).style("marker-end", function(d) {
            if (UNDIRECTED === false) return "url(#end-arrow)"
        }).attr("d", function(d) {
            var deltaX = d.target.x - d.source.x,
                deltaY = d.target.y - d.source.y,
                dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                normX = deltaX / dist,
                normY = deltaY / dist,
                sourcePadding = 12,
                targetPadding = 17;
            if (UNDIRECTED === true) targetPadding = 12;
            var sourceX = d.source.x + sourcePadding * normX,
                sourceY = d.source.y + sourcePadding * normY,
                targetX = d.target.x - targetPadding * normX,
                targetY = d.target.y - targetPadding * normY;
            if (UNDIRECTED === true) return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY;
            var link;
            link = links.filter(function(l) {
                return l.source === d.target && l.target === d.source
            })[0];
            if (link) {
                var type;
                if (d.source.id < d.target.id) type = 1;
                else type = 2;
                var finalX = arrowXY(sourceX, sourceY, targetX, targetY, type).x;
                var finalY = arrowXY(sourceX, sourceY, targetX, targetY, type).y;
                var beginX = arrowXY(targetX, targetY, sourceX, sourceY, type).x;
                var beginY = arrowXY(targetX, targetY, sourceX, sourceY, type).y;
                return "M" + beginX + "," + beginY + "L" + finalX + "," + finalY
            } else {
                return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY
            }
        }).on("mousedown", function(d) {
            if (d3.event.ctrlKey) return;
            mousedown_link = d;
            if (mousedown_link === selected_link) selected_link = null;
            else selected_link = mousedown_link;
            selected_node = null;
            restart()
        });
        if (UNWEIGHTED === false) {
            weight = svg.append("svg:g").selectAll("text");
            weight = weight.data(links);
            weight.enter().append("svg:text").attr("class", "weight").attr("x", function(d) {
                var type;
                if (d.source.id < d.target.id) type = 1;
                else type = 2;
                var link;
                link = links.filter(function(l) {
                    return l.source === d.target && l.target === d.source
                })[0];
                var curve = 0;
                if (link) curve = 2;
                var x = weightXY(d.source.x, d.source.y, d.target.x, d.target.y, type, curve).x;
                return x
            }).attr("y", function(d) {
                var type;
                if (d.source.id < d.target.id) type = 1;
                else type = 2;
                var link;
                link = links.filter(function(l) {
                    return l.source === d.target && l.target === d.source
                })[0];
                var curve = 0;
                if (link) curve = 2;
                var y = weightXY(d.source.x, d.source.y, d.target.x, d.target.y, type, curve).y;
                return y
            }).text(function(d) {
                return d.weight
            })
        }
        if (VERTEX_UNWEIGHTED === false) {
            weight = svg.append("svg:g").selectAll("text");
            weight = weight.data(nodes);
            weight.enter().append("svg:text").attr("class", "weight").attr("x", function(d) {
                return d.x
            }).attr("y", function(d) {
                return d.y + 30
            }).text(function(d) {
                return d.weight
            })
        }
        maxNodeId = -1;
        var countNode = nodes.length;
        var countEdge = links.length;
        adjMat = [];
        for (var i = 0; i < nodes.length; i++)
            if (nodes[i].id > maxNodeId) maxNodeId = nodes[i].id;
        maxNodeId++;
        var validNode = new Array(maxNodeId);
        for (var i = 0; i < maxNodeId; i++) validNode[i] = false;
        for (var i = 0; i < nodes.length; i++) validNode[nodes[i].id] = true;
        for (var i = 0; i < maxNodeId; i++) {
            adjMat[i] = [];
            for (var j = 0; j < maxNodeId; j++)
                if (validNode[i] === true && validNode[j] === true) adjMat[i][j] = "0";
                else adjMat[i][j] = "x"
        }
        if (UNDIRECTED === true) {
            if (UNWEIGHTED === true) {
                for (var i = 0; i < links.length; i++) {
                    adjMat[links[i].source.id][links[i].target.id] = "1";
                    adjMat[links[i].target.id][links[i].source.id] = "1"
                }
            } else {
                for (var i = 0; i < links.length; i++) {
                    adjMat[links[i].source.id][links[i].target.id] = links[i].weight.toString();
                    adjMat[links[i].target.id][links[i].source.id] = links[i].weight.toString()
                }
            }
        } else {
            if (UNWEIGHTED === true) {
                for (var i = 0; i < links.length; i++) adjMat[links[i].source.id][links[i].target.id] = "1"
            } else {
                for (var i = 0; i < links.length; i++) adjMat[links[i].source.id][links[i].target.id] = links[i].weight.toString()
            }
        }
        var json = '{"vl":{';
        for (var i = 0; i < nodes.length; i++) {
            var first = '"' + i + '":';
            var obj = new Object;
            obj.x = nodes[i].x;
            obj.y = nodes[i].y;
            if (VERTEX_UNWEIGHTED === false) {
                obj.w = nodes[i].weight
            }
            var second = JSON.stringify(obj);
            json += first + second;
            if (i !== nodes.length - 1) json += ","
        }
        var add = '},"el":{';
        json = json.concat(add);
        for (var i = 0; i < links.length; i++) {
            var first = '"' + i + '":';
            var obj = new Object;
            for (var j = 0; j < nodes.length; j++) {
                if (nodes[j].id == links[i].source.id) obj.u = j;
                if (nodes[j].id == links[i].target.id) obj.v = j
            }
            obj.w = 1;
            if (UNWEIGHTED === false) obj.w = links[i].weight;
            var second = JSON.stringify(obj);
            json += first + second;
            if (i !== links.length - 1) json += ","
        }
        add = "}}";
        json = json.concat(add);
        JSONresult = json
    }

    function mousedown() {
        svg.classed("active", true);
        if (d3.event.ctrlKey || mousedown_node || mousedown_link) return;
        var point = d3.mouse(this);
        for (var node_id in nodes) {
            var dx = nodes[node_id]["x"] - point[0];
            var dy = nodes[node_id]["y"] - point[1];
            var dist = Math.sqrt(dx * dx + dy * dy);
            console;
            if (dist < grid * 2) {
                console.log("bad point!");
                return
            }
        }
        var node = {
            id: lastNodeId
        };
        countNodeId[lastNodeId]++;
        for (var i = 0; i < maxNumberVertex; i++)
            if (countNodeId[i] === 0) {
                lastNodeId = i;
                break
            }
        node.x = point[0];
        node.y = point[1];
        if (VERTEX_UNWEIGHTED === false) node.weight = 1;
        node.x = parseInt(node.x) - parseInt(node.x) % grid;
        node.y = parseInt(node.y) - parseInt(node.y) % grid;
        nodes.push(node);
        restart()
    }

    function mousemove() {
        if (!mousedown_node) return;
        drag_line.attr("d", "M" + mousedown_node.x + "," + mousedown_node.y + "L" + d3.mouse(this)[0] + "," + d3.mouse(this)[1]);
        restart()
    }

    function mouseup() {
        if (mousedown_node) drag_line.classed("hidden", true);
        svg.classed("active", false);
        resetMouseVars()
    }

    function spliceLinksForNode(node) {
        var toSplice = links.filter(function(l) {
            return l.source === node || l.target === node
        });
        toSplice.map(function(l) {
            links.splice(links.indexOf(l), 1)
        })
    }
    var lastKeyDown = -1;
    var drag = d3.behavior.drag().on("drag", function(d) {
        var dragTarget = d3.select(this).select("circle");
        var new_cx, new_cy;
        dragTarget.attr("cx", function() {
            new_cx = d3.mouse($("#drawgraph svg")[0])[0];
            return new_cx
        }).attr("cy", function() {
            new_cy = d3.mouse($("#drawgraph svg")[0])[1];
            return new_cy
        });
        d.x = new_cx;
        d.y = new_cy;
        d.x = parseInt(d.x) - parseInt(d.x) % grid;
        d.y = parseInt(d.y) - parseInt(d.y) % grid;
        restart()
    });

    function keydown() {
        lastKeyDown = d3.event.keyCode;
        if (d3.event.keyCode === 17) {
            circle.call(drag);
            svg.classed("ctrl", true)
        }
        if (!selected_node && !selected_link) return;
        switch (d3.event.keyCode) {
            case 46:
                if (selected_node) {
                    nodes.splice(nodes.indexOf(selected_node), 1);
                    spliceLinksForNode(selected_node);
                    countNodeId[selected_node.id] = 0;
                    for (var i = 0; i < maxNumberVertex; i++)
                        if (countNodeId[i] === 0) {
                            lastNodeId = i;
                            break
                        }
                } else if (selected_link) links.splice(links.indexOf(selected_link), 1);
                selected_link = null;
                selected_node = null;
                restart();
                break;
            case 13:
                if (selected_link && UNWEIGHTED === false) {
                    while (true) {
                        var newWeight = prompt("Enter new weight: (<= 99)");
                        if (newWeight <= 99) break
                    }
                    var idx = links.indexOf(selected_link);
                    links[idx].weight = newWeight
                } else if (selected_node && VERTEX_UNWEIGHTED === false) {
                    while (true) {
                        var newWeight = prompt("Enter new weight: (<= 99)");
                        if (newWeight <= 99) break
                    }
                    var idx = nodes.indexOf(selected_node);
                    nodes[idx].weight = newWeight
                }
                restart();
                break
        }
    }

    function keyup() {
        lastKeyDown = -1;
        if (d3.event.keyCode === 17) {
            circle.on("mousedown.drag", null).on("touchstart.drag", null);
            svg.classed("ctrl", false)
        }
    }
    svg.on("mousedown", mousedown).on("mousemove", mousemove).on("mouseup", mouseup);
    d3.select(window).on("keydown", keydown).on("keyup", keyup);
    restart()
};

function parseCurrentJSONresult() {
    if (JSONresult == null) return [null, null];
    graph = JSON.parse(JSONresult);
    return [graph["vl"], graph["el"]]
}
var currentGraphVisu;
var JSONresult;

function clearGraphVisu(bool1, bool2, bool3) {
    currentGraphVisu = new GraphVisu(bool1, bool2, null, null, null, bool3)
}

function showHelp() {
    var helpPopup = document.getElementById("help-popup");
    helpPopup.style.display = "block";
    window.onclick = function(event) {
        if (event.target == helpPopup) {
            helpPopup.style.display = "none"
        }
    }
}

function write(bool1, bool2, bool3) {
    if (bool3 === undefined) {
        bool3 = "true"
    }
    var toWrite = '    <div id="main">      <div id="draw-status"><p>Status</p></div>      <div id="draw-warn"><p>No Warning</p></div>      <div id="draw-err"><p>No Error</p></div>      <div id="viz">    </div>    <div id="drawgraph-actions">      <button class="button cancel-button" onclick=drawCancel()>Cancel</button>      <button class="button clear-button" onclick=clearGraphVisu(' + bool1 + "," + bool2 + "," + bool3 + ')>Clear</button>      <button class="button done-button" onclick=drawDone()>Done</button>      <button id="help" class="button help-button" onclick=showHelp()>Help</button>      <div id="help-popup" class="help-popup-modal-background">        <div class="help-popup-content">          <ul>          <li>Click on empty spaces to add vertex</li>          <li>Drag from vertex to vertex to add edge</li>          <li>Select + Delete to delete vertex/edge</li>          <li>Select Edge + Enter to change edge\'s weight</li>          <li>For Mac users, use Fn + Del for deletion</li>          </ul>        </div>      </div>      <form id="drawgraph-form">        \x3c!--<input type="checkbox" id="submit" name="submit" value="submit" checked="checked">Submit drawn graph to database for random graph and online quiz purposes        <br>--\x3e<input type="checkbox" id="copy" name="submit" value="submit" checked="checked">Copy JSON text to clipboard      </form>    </div>  ';
    $("#drawgraph").html(toWrite);
    $("#copy").removeAttr("checked")
}
var GraphEdgeWidget = function(graphVertexA, graphVertexB, edgeIdNumber, type, weight) {
    resetSVGMarkers();
    if (weight == null || isNaN(weight)) weight = 1;
    var self = this;
    var defaultAnimationDuration = 250;
    var line, clickableArea;
    var weightText, weightTextPath, weightTextSpan;
    var vertexAId = graphVertexA.getId();
    var vertexBId = graphVertexB.getId();
    var edgeGenerator = d3.svg.line().x(function(d) {
        return d.x
    }).y(function(d) {
        return d.y
    }).interpolate("linear");
    var lineCommand = edgeGenerator(calculatePath());
    var initCommand = edgeGenerator([calculatePath()[0], calculatePath()[0]]);
    var attributeList = {
        path: {
            id: null,
            class: null,
            d: null,
            stroke: null,
            "stroke-width": null
        },
        weight: {
            id: null,
            startOffset: null,
            dy: null,
            fill: null,
            "font-family": null,
            "font-weight": null,
            "font-size": null,
            "text-anchor": null,
            text: null
        }
    };
    var mainSvg = mainSvg;
    updatePath();
    init();
    this.redraw = function(duration) {
        draw(duration)
    };
    this.animateHighlighted = function(duration) {
        if (duration == null || isNaN(duration)) duration = defaultAnimationDuration;
        if (duration <= 0) duration = 1;
        edgeSvg.append("path").attr("id", "tempEdge" + line.attr("id")).attr("stroke", graphEdgeProperties["animateHighlightedPath"]["stroke"]).attr("stroke-width", graphEdgeProperties["animateHighlightedPath"]["stroke-width"]).transition().duration(duration).each("start", function() {
            edgeSvg.select("#tempEdge" + line.attr("id")).attr("d", initCommand)
        }).attr("d", lineCommand).each("end", function() {
            line.attr("stroke", graphEdgeProperties["path"]["highlighted"]["stroke"]).attr("stroke-width", graphEdgeProperties["path"]["stroke-width"]);
            edgeSvg.select("#tempEdge" + line.attr("id")).remove();
            draw(0)
        })
    };
    this.showEdge = function() {
        attributeList["path"]["d"] = lineCommand;
        attributeList["path"]["stroke-width"] = graphEdgeProperties["path"]["stroke-width"]
    };
    this.hideEdge = function() {
        attributeList["path"]["d"] = initCommand
    };
    this.showWeight = function() {
        attributeList["weight"]["font-size"] = graphEdgeProperties["weight"]["font-size"]
    };
    this.hideWeight = function() {
        attributeList["weight"]["font-size"] = 0
    };
    this.stateEdge = function(stateName) {
        var key;
        for (key in graphEdgeProperties["path"][stateName]) attributeList["path"][key] = graphEdgeProperties["path"][stateName][key];
        for (key in graphEdgeProperties["weight"][stateName]) attributeList["weight"][key] = graphEdgeProperties["weight"][stateName][key]
    };
    this.removeEdge = function() {
        graphVertexA.removeEdge(self);
        graphVertexB.removeEdge(self);
        line.remove();
        weightText.remove()
    };
    this.refreshPath = function() {
        var tempInit = initCommand;
        updatePath();
        if (attributeList["path"]["d"] == tempInit) attributeList["path"]["d"] = initCommand;
        else attributeList["path"]["d"] = lineCommand
    };
    this.changeVertexA = function(newGraphVertexA) {
        var edgeDrawn = false;
        if (attributeList["path"]["d"] == lineCommand) edgeDrawn = true;
        graphVertexA.removeEdge(self);
        graphVertexA = newGraphVertexA;
        updatePath();
        lineCommand = edgeGenerator(calculatePath());
        initCommand = edgeGenerator([calculatePath()[0]]);
        attributeList["path"]["d"] = initCommand;
        graphVertexA.addEdge(self);
        if (edgeDrawn) attributeList["path"]["d"] = lineCommand
    };
    this.changeVertexB = function(newGraphVertexB) {
        var edgeDrawn = false;
        if (attributeList["path"]["d"] == lineCommand) edgeDrawn = true;
        graphVertexB.removeEdge(self);
        graphVertexB = newGraphVertexB;
        updatePath();
        lineCommand = edgeGenerator(calculatePath());
        initCommand = edgeGenerator([calculatePath()[0]]);
        attributeList["path"]["d"] = initCommand;
        graphVertexB.addEdge(self);
        if (edgeDrawn) attributeList["path"]["d"] = lineCommand
    };
    this.changeType = function(newType) {
        type = newType;
        updatePath();
        switch (type) {
            case EDGE_TYPE_UDE:
                attributeList["path"]["class"] = "ude";
                break;
            case EDGE_TYPE_DE:
                attributeList["path"]["class"] = "de";
                break;
            case EDGE_TYPE_BDE:
                attributeList["path"]["class"] = "bde";
                break;
            default:
                break
        }
    };
    this.changeWeight = function(newWeight) {
        weight = newWeight;
        attributeList["weight"]["text"] = weight
    };
    this.getVertex = function() {
        return [graphVertexA, graphVertexB]
    };
    this.getAttributes = function() {
        return deepCopy(attributeList["path"])
    };
    this.getType = function() {
        return type
    };

    function resetSVGMarkers() {
        if (markerSvg.select("#arrow").empty()) {
            markerSvg.append("marker").attr("id", "arrow").attr("viewBox", "0 -5 10 10").attr("refX", ARROW_REFX).attr("markerWidth", ARROW_MARKER_WIDTH).attr("markerHeight", ARROW_MARKER_HEIGHT).attr("orient", "auto").append("path").attr("d", "M0,-5 L10,0 L0,5").attr("fill", ARROW_FILL)
        }
        if (markerSvg.select("#backwardArrow").empty()) {
            markerSvg.append("marker").attr("id", "backwardArrow").attr("viewBox", "-10 -5 10 10").attr("refX", -1 * ARROW_REFX).attr("markerWidth", ARROW_MARKER_WIDTH).attr("markerHeight", ARROW_MARKER_HEIGHT).attr("orient", "auto").append("path").attr("d", "M0,-5 L-10,0 L0,5").attr("fill", ARROW_FILL)
        }
    }

    function init() {
        attributeList["path"]["id"] = "e" + edgeIdNumber;
        attributeList["path"]["d"] = initCommand;
        attributeList["path"]["stroke"] = graphEdgeProperties["path"]["default"]["stroke"];
        attributeList["path"]["stroke-width"] = graphEdgeProperties["path"]["default"]["stroke-width"];
        switch (type) {
            case EDGE_TYPE_UDE:
                attributeList["path"]["class"] = "ude";
                break;
            case EDGE_TYPE_DE:
                attributeList["path"]["class"] = "de";
                break;
            case EDGE_TYPE_BDE:
                attributeList["path"]["class"] = "bde";
                break;
            default:
                break
        }
        attributeList["weight"]["id"] = "ew" + edgeIdNumber;
        attributeList["weight"]["startOffset"] = graphEdgeProperties["weight"]["default"]["startOffset"];
        attributeList["weight"]["dy"] = graphEdgeProperties["weight"]["default"]["dy"];
        attributeList["weight"]["fill"] = graphEdgeProperties["weight"]["default"]["fill"];
        attributeList["weight"]["font-family"] = graphEdgeProperties["weight"]["default"]["font-family"];
        attributeList["weight"]["font-size"] = 0;
        attributeList["weight"]["font-weight"] = graphEdgeProperties["weight"]["default"]["font-weight"];
        attributeList["weight"]["text-anchor"] = graphEdgeProperties["weight"]["default"]["text-anchor"];
        attributeList["weight"]["text"] = weight;
        line = edgeSvg.append("path");
        line.attr("id", attributeList["path"]["id"]).attr("class", attributeList["path"]["class"]);
        try {
            if (attributeList["path"]["d"] != "MNaN,NaNLNaN,NaN") line.attr("d", attributeList["path"]["d"]).attr("stroke", attributeList["path"]["stroke"]).attr("stroke-width", attributeList["path"]["stroke-width"])
        } catch (err) {}
        weightText = edgeWeightSvg.append("text");
        weightText.attr("id", attributeList["weight"]["id"]);
        weightText.attr("fill", attributeList["weight"]["fill"]).attr("font-family", attributeList["weight"]["font-family"]).attr("font-size", attributeList["weight"]["font-size"]).attr("font-weight", attributeList["weight"]["font-weight"]).attr("text-anchor", attributeList["weight"]["text-anchor"]);
        weightTextPath = weightText.append("textPath").attr("xlink:href", function() {
            return "#" + attributeList["path"]["id"]
        }).attr("startOffset", attributeList["weight"]["startOffset"]);
        weightTextSpan = weightTextPath.append("tspan").attr("dy", attributeList["weight"]["dy"]).text(function() {
            return attributeList["weight"]["text"]
        })
    }

    function cxA() {
        if (graphVertexA) return parseFloat(graphVertexA.getAttributes()["outerVertex"]["cx"])
    }

    function cyA() {
        if (graphVertexA) return parseFloat(graphVertexA.getAttributes()["outerVertex"]["cy"])
    }

    function rA() {
        if (graphVertexA) return parseFloat(graphVertexA.getAttributes()["outerVertex"]["r"])
    }

    function cxB() {
        if (graphVertexA) return parseFloat(graphVertexB.getAttributes()["outerVertex"]["cx"])
    }

    function cyB() {
        if (graphVertexA) return parseFloat(graphVertexB.getAttributes()["outerVertex"]["cy"])
    }

    function rB() {
        if (graphVertexA) return parseFloat(graphVertexB.getAttributes()["outerVertex"]["r"])
    }

    function calculatePath() {
        var x1, x2, y1, y2;
        var dx = cxB() - cxA();
        var dy = cyB() - cyA();
        var offsetX = dy / Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        var offsetY = -dx / Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (type == EDGE_TYPE_BDE) {
            x1 = cxA() + offsetX * rA() / 4;
            y1 = cyA() + offsetY * rA() / 4;
            x2 = cxB() + offsetX * rA() / 4;
            y2 = cyB() + offsetY * rB() / 4
        } else {
            x1 = cxA();
            y1 = cyA();
            x2 = cxB();
            y2 = cyB()
        }
        var pts = getVertexLineIntersectionPoint(x1, y1, x2, y2, rA(), x1, y1);
        var pts2 = getVertexLineIntersectionPoint(x1, y1, x2, y2, rB(), x2, y2);
        var min = 5e3;
        var save1 = 0,
            save2 = 0;
        for (var i = 1; i <= 3; i += 2)
            for (var j = 1; j <= 3; j += 2) {
                var d = Math.sqrt((pts[i - 1] - pts2[j - 1]) * (pts[i - 1] - pts2[j - 1]) + (pts[i] - pts2[j]) * (pts[i] - pts2[j]));
                if (d < min) {
                    min = d;
                    save1 = i;
                    save2 = j
                }
            }
        var beginPoint = {
            x: pts[save1 - 1],
            y: pts[save1]
        };
        var endPoint = {
            x: pts2[save2 - 1],
            y: pts2[save2]
        };
        return [beginPoint, endPoint]
    }

    function getVertexLineIntersectionPoint(x1, y1, x2, y2, r, cx, cy) {
        var baX = x2 - x1;
        var baY = y2 - y1;
        var caX = cx - x1;
        var caY = cy - y1;
        var a = baX * baX + baY * baY;
        var bBy2 = baX * caX + baY * caY;
        var c = caX * caX + caY * caY - r * r;
        var pBy2 = bBy2 / a;
        var q = c / a;
        var disc = pBy2 * pBy2 - q;
        var tmpSqrt = Math.sqrt(disc);
        var abScalingFactor1 = -pBy2 + tmpSqrt;
        var abScalingFactor2 = -pBy2 - tmpSqrt;
        var r_x1 = x1 - baX * abScalingFactor1;
        var r_y1 = y1 - baY * abScalingFactor1;
        var r_x2 = x1 - baX * abScalingFactor2;
        var r_y2 = y1 - baY * abScalingFactor2;
        var res = new Array;
        res[0] = r_x1;
        res[1] = r_y1;
        res[2] = r_x2;
        res[3] = r_y2;
        return res
    }

    function draw(dur) {
        if (dur == null || isNaN(dur)) dur = defaultAnimationDuration;
        if (dur <= 0) dur = 1;
        line.attr("class", attributeList["path"]["class"]);
        line.transition().duration(dur).attr("d", attributeList["path"]["d"]).attr("stroke", attributeList["path"]["stroke"]).attr("stroke-width", attributeList["path"]["stroke-width"]).style("marker-start", function() {
            return null
        }).style("marker-end", function() {
            if (attributeList["path"]["d"] == initCommand) return null;
            if (attributeList["path"]["class"] == "de" || attributeList["path"]["class"] == "bde") return "url(#arrow)";
            return null
        });
        weightText.transition().duration(dur).attr("fill", attributeList["weight"]["fill"]).attr("font-family", attributeList["weight"]["font-family"]).attr("font-size", attributeList["weight"]["font-size"]).attr("font-weight", attributeList["weight"]["font-weight"]).attr("text-anchor", attributeList["weight"]["text-anchor"]).attr("transform", function(d) {
            function toDecimal(percent) {
                return parseFloat(percent) / 100
            }
            console.log("inside transform func");
            var weightDy = attributeList["weight"]["dy"];
            var weightfontsize = attributeList["weight"]["font-size"];
            var actualdyoffset = weightDy - weightfontsize / 2;
            var offsetstart = toDecimal(attributeList["weight"]["startOffset"]);
            var dx = cxB() - cxA();
            var dy = cyB() - cyA();
            var length = Math.sqrt(dx * dx + dy * dy);
            var actuallength = length - rA() - rB();
            var actualoffsetlength = actuallength * offsetstart + rA();
            var normdx = dx / length;
            var normdy = dy / length;
            var actualposX = normdx * actualoffsetlength + cxA();
            var actualposY = normdy * actualoffsetlength + cyA();
            var perpenX = actualdyoffset * -normdy;
            var perpenY = actualdyoffset * normdx;
            var xRot = actualposX + perpenX;
            var yRot = actualposY + perpenY;
            var angle = -Math.atan2(dy, dx) * 180 / Math.PI;
            return `rotate(${angle}, ${xRot}, ${yRot})`
        });
        weightTextSpan.transition().duration(dur).text(function() {
            return attributeList["weight"]["text"]
        })
    }

    function updatePath() {
        lineCommand = edgeGenerator(calculatePath());
        initCommand = edgeGenerator([calculatePath()[0], calculatePath()[0]])
    }
};
var GraphPolygonWidget = function(polygonId, pointList) {
    console.log("Graph Polygon Widget called!");
    var self = this;
    var defaultAnimationDuration = 250;
    var polygon = null;
    var state = null;
    var attributeList = {
        polygon: {
            class: null,
            points: null,
            fill: null,
            "stroke-width": null,
            opacity: null
        }
    };
    init();
    this.redraw = function(duration) {
        draw(duration)
    };
    this.showPolygon = function() {
        if (state == null || state == undefined) {
            state = POLYGON_DEFAULT
        }
        attributeList["polygon"]["class"] = graphPolygonProperties["polygon"]["class"];
        attributeList["polygon"]["stroke-width"] = graphPolygonProperties["polygon"]["stroke-width"];
        attributeList["polygon"]["fill"] = graphPolygonProperties["polygon"][state]["fill"];
        attributeList["polygon"]["opacity"] = graphPolygonProperties["polygon"][state]["opacity"]
    };
    this.hidePolygon = function() {
        attributeList["polygon"]["opacity"] = 0
    };
    this.removePolygon = function() {
        polygon.remove()
    };
    this.statePolygon = function(stateName) {
        state = stateName;
        var key;
        for (key in graphPolygonProperties["polygon"][state]) attributeList["polygon"][key] = graphPolygonProperties["polygon"][state][key]
    };
    this.getAttributes = function() {
        return deepCopy(attributeList)
    };
    this.getClassNumber = function() {
        return polygonId
    };

    function init() {
        polygon = polygonSvg.append("polygon");
        attributeList["polygon"]["class"] = "p" + polygonId;
        var pointListText = "";
        for (key in pointList) {
            pointListText = pointListText + pointList[key].x + "," + pointList[key].y + " "
        }
        attributeList["polygon"]["points"] = pointListText;
        attributeList["polygon"]["fill"] = graphPolygonProperties["polygon"]["default"]["fill"];
        attributeList["polygon"]["stroke-width"] = 0;
        attributeList["polygon"]["opacity"] = 1;
        polygon.attr("class", attributeList["polygon"]["class"]).attr("points", attributeList["polygon"]["points"]).attr("fill", attributeList["polygon"]["fill"]).attr("stroke-width", attributeList["polygon"]["stroke-width"]).attr("opacity", attributeList["polygon"]["opacity"])
    }

    function draw(dur) {
        if (dur == null || isNaN(dur)) dur = defaultAnimationDuration;
        if (dur <= 0) dur = 1;
        polygon.transition().duration(dur).attr("points", attributeList["polygon"]["points"]).attr("fill", attributeList["polygon"]["fill"]).attr("stroke-width", attributeList["polygon"]["stroke-width"]).attr("opacity", attributeList["polygon"]["opacity"])
    }
};
var GraphVertexWidget = function(cx, cy, vertexShape, vertexText, vertexClassNumber) {
    console.log("Graph Vertex Widget called!");
    var self = this;
    var defaultAnimationDuration = 250;
    var innerVertex;
    var outerVertex;
    var text;
    var extratext;
    var vertexExtraText;
    var id = vertexClassNumber;
    var cx = cx;
    var cy = cy;
    this.getId = function() {
        return id
    };
    this.getCx = function() {
        return cx
    };
    this.getCy = function() {
        return cy
    };
    var textYaxisOffset = getAppropriateFontSize(vertexText) / 3;
    var attributeList = {
        innerVertex: {
            class: null,
            cx: null,
            cy: null,
            x: null,
            y: null,
            fill: null,
            r: null,
            width: null,
            height: null,
            stroke: null,
            "stroke-width": null
        },
        outerVertex: {
            class: null,
            cx: null,
            cy: null,
            x: null,
            y: null,
            fill: null,
            r: null,
            width: null,
            height: null,
            stroke: null,
            "stroke-width": null
        },
        text: {
            class: null,
            x: null,
            y: null,
            fill: null,
            "font-family": null,
            "font-weight": null,
            "font-size": null,
            "text-anchor": null,
            text: null
        },
        extratext: {
            class: null,
            x: null,
            y: null,
            fill: null,
            "font-family": null,
            "font-weight": null,
            "font-size": null,
            "text-anchor": null,
            text: null
        }
    };

    function getAppropriateFontSize(text) {
        var textLength = text.toString().length;
        if (textLength >= 6) {
            textLength = 6
        }
        if (textLength === 0) {
            textLength = 1
        }
        return graphVertexProperties["text"]["font-sizes"][textLength - 1]
    }
    var edgeList = {};
    init();
    this.redraw = function(duration) {
        draw(duration)
    };
    this.showVertex = function() {
        attributeList["outerVertex"]["r"] = graphVertexProperties["outerVertex"]["r"];
        attributeList["outerVertex"]["width"] = graphVertexProperties["outerVertex"]["width"];
        attributeList["outerVertex"]["height"] = graphVertexProperties["outerVertex"]["height"];
        attributeList["outerVertex"]["stroke-width"] = graphVertexProperties["outerVertex"]["stroke-width"];
        attributeList["innerVertex"]["r"] = graphVertexProperties["innerVertex"]["r"];
        attributeList["innerVertex"]["width"] = graphVertexProperties["innerVertex"]["width"];
        attributeList["innerVertex"]["height"] = graphVertexProperties["innerVertex"]["height"];
        attributeList["innerVertex"]["stroke-width"] = graphVertexProperties["innerVertex"]["stroke-width"];
        attributeList["text"]["font-size"] = getAppropriateFontSize(vertexText);
        attributeList["extratext"]["font-size"] = graphVertexProperties["text"]["font-size"];
        if (vertexShape == "rect_long") {
            attributeList["outerVertex"]["width"] = 200;
            attributeList["innerVertex"]["width"] = 198
        } else if (vertexShape == "rect") {
            attributeList["outerVertex"]["width"] = 80;
            attributeList["innerVertex"]["width"] = 78
        }
    };
    this.hideVertex = function() {
        attributeList["outerVertex"]["r"] = 0;
        attributeList["outerVertex"]["width"] = 0;
        attributeList["outerVertex"]["height"] = 0;
        attributeList["outerVertex"]["stroke-width"] = 0;
        attributeList["innerVertex"]["r"] = 0;
        attributeList["innerVertex"]["width"] = 0;
        attributeList["innerVertex"]["height"] = 0;
        attributeList["innerVertex"]["stroke-width"] = 0;
        attributeList["text"]["font-size"] = 0;
        attributeList["extratext"]["font-size"] = 0
    };
    this.moveVertex = function(cx, cy) {
        attributeList["outerVertex"]["cx"] = cx;
        attributeList["outerVertex"]["cy"] = cy;
        attributeList["outerVertex"]["x"] = cx - graphVertexProperties["outerVertex"]["width"] / 2;
        attributeList["outerVertex"]["y"] = cy - graphVertexProperties["outerVertex"]["height"] / 2;
        attributeList["innerVertex"]["cx"] = cx;
        attributeList["innerVertex"]["cy"] = cy;
        attributeList["innerVertex"]["x"] = cx - graphVertexProperties["innerVertex"]["width"] / 2;
        attributeList["innerVertex"]["y"] = cy - graphVertexProperties["innerVertex"]["height"] / 2;
        attributeList["text"]["x"] = cx;
        attributeList["text"]["y"] = cy + textYaxisOffset;
        attributeList["extratext"]["x"] = cx;
        attributeList["extratext"]["y"] = cy + textYaxisOffset + 26;
        var key;
        for (key in edgeList) edgeList[key].refreshPath()
    };
    this.changeText = function(newVertexText) {
        vertexText = newVertexText;
        attributeList["text"]["text"] = newVertexText;
        attributeList["text"]["font-size"] = getAppropriateFontSize(newVertexText)
    };
    this.changeExtraText = function(newVertexExtraText) {
        vertexExtraText = newVertexExtraText;
        attributeList["extratext"]["text"] = newVertexExtraText
    };
    this.changeTextFontSize = function(newFontSize) {
        if (newTextSize == null || isNaN(newTextSize)) return;
        attributeList["text"]["font-size"] = newTextSize;
        attributeList["extratext"]["font-size"] = newTextSize
    };
    this.changeRadius = function(newRadiusInner, newRadiusOuter) {
        if (newRadiusInner == null || isNaN(newRadiusInner)) return;
        attributeList["innerVertex"]["r"] = newRadiusInner;
        if (newRadiusOuter == null || isNaN(newRadiusOuter)) return;
        attributeList["outerVertex"]["r"] = newRadiusOuter
    };
    this.changeWidth = function(newWidthInner, newWidthOuter) {
        if (newWidthInner == null || isNaN(newWidthInner)) return;
        attributeList["innerVertex"]["width"] = newWidthInner;
        if (newWidthOuter == null || isNaN(newWidthOuter)) return;
        attributeList["outerVertex"]["width"] = newWidthOuter
    };
    this.changeHeight = function(newHeightInner, newHeightOuter) {
        if (newHeightInner == null || isNaN(newHeightInner)) return;
        attributeList["innerVertex"]["height"] = newHeightInner;
        if (newHeightOuter == null || isNaN(newHeightOuter)) return;
        attributeList["outerVertex"]["height"] = newHeightOuter
    };
    this.changeStrokeWidth = function(newStrokeWidthInner, newStrokeWidthOuter) {
        if (newStrokeWidthInner == null || isNaN(newStrokeWidthInner)) return;
        attributeList["innerVertex"]["stroke-width"] = newStrokeWidthInner;
        if (newStrokeWidthOuter == null || isNaN(newStrokeWidthOuter)) return;
        attributeList["outerVertex"]["stroke-width"] = newStrokeWidthOuter
    };
    this.removeVertex = function() {
        outerVertex.remove();
        innerVertex.remove();
        text.remove();
        extratext.remove()
    };
    this.stateVertex = function(stateName) {
        var key;
        for (key in graphVertexProperties["innerVertex"][stateName]) attributeList["innerVertex"][key] = graphVertexProperties["innerVertex"][stateName][key];
        for (key in graphVertexProperties["outerVertex"][stateName]) attributeList["outerVertex"][key] = graphVertexProperties["outerVertex"][stateName][key];
        for (key in graphVertexProperties["text"][stateName]) attributeList["text"][key] = graphVertexProperties["text"][stateName][key]
    };
    this.getAttributes = function() {
        return deepCopy(attributeList)
    };
    this.getClassNumber = function() {
        return vertexClassNumber
    };
    this.addEdge = function(graphEdge) {
        edgeList[graphEdge.getAttributes()["id"]] = graphEdge
    };
    this.removeEdge = function(graphEdge) {
        if (edgeList[graphEdge.getAttributes()["id"]] == null || edgeList[graphEdge.getAttributes()["id"]] == undefined) return;
        delete edgeList[graphEdge.getAttributes()["id"]]
    };
    this.getEdge = function() {
        var reply = [];
        var key;
        for (key in edgeList) reply.push(edgeList[key]);
        return reply
    };

    function init() {
        var tmp_vertexShape = vertexShape;
        if (vertexShape == "rect_long") tmp_vertexShape = "rect";
        outerVertex = vertexSvg.append(tmp_vertexShape);
        innerVertex = vertexSvg.append(tmp_vertexShape);
        text = vertexTextSvg.append("text");
        extratext = vertexTextSvg.append("text");
        attributeList["innerVertex"]["class"] = "v" + vertexClassNumber;
        attributeList["innerVertex"]["cx"] = cx;
        attributeList["innerVertex"]["cy"] = cy;
        attributeList["innerVertex"]["x"] = cx - graphVertexProperties["innerVertex"]["width"] / 2;
        attributeList["innerVertex"]["y"] = cy - graphVertexProperties["innerVertex"]["height"] / 2;
        attributeList["innerVertex"]["fill"] = graphVertexProperties["innerVertex"]["default"]["fill"];
        attributeList["innerVertex"]["r"] = 0;
        attributeList["innerVertex"]["width"] = 0;
        attributeList["innerVertex"]["height"] = 0;
        attributeList["innerVertex"]["stroke"] = graphVertexProperties["innerVertex"]["default"]["stroke"];
        attributeList["innerVertex"]["stroke-width"] = 0;
        attributeList["outerVertex"]["class"] = "v" + vertexClassNumber;
        attributeList["outerVertex"]["cx"] = cx;
        attributeList["outerVertex"]["cy"] = cy;
        attributeList["outerVertex"]["x"] = cx - graphVertexProperties["outerVertex"]["width"] / 2;
        attributeList["outerVertex"]["y"] = cy - graphVertexProperties["outerVertex"]["height"] / 2;
        attributeList["outerVertex"]["fill"] = graphVertexProperties["outerVertex"]["default"]["fill"];
        attributeList["outerVertex"]["r"] = 0;
        attributeList["innerVertex"]["width"] = 0;
        attributeList["innerVertex"]["height"] = 0;
        attributeList["outerVertex"]["stroke"] = graphVertexProperties["outerVertex"]["default"]["stroke"];
        attributeList["outerVertex"]["stroke-width"] = 0;
        attributeList["text"]["class"] = "v" + vertexClassNumber;
        attributeList["text"]["x"] = cx;
        attributeList["text"]["y"] = cy + textYaxisOffset;
        attributeList["text"]["fill"] = graphVertexProperties["text"]["default"]["fill"];
        attributeList["text"]["font-family"] = graphVertexProperties["text"]["default"]["font-family"];
        attributeList["text"]["font-size"] = 0;
        attributeList["text"]["font-weight"] = graphVertexProperties["text"]["default"]["font-weight"];
        attributeList["text"]["text-anchor"] = graphVertexProperties["text"]["default"]["text-anchor"];
        if (vertexShape == "rect_long") attributeList["text"]["text-anchor"] = "left";
        attributeList["text"]["text"] = vertexText;
        attributeList["extratext"]["class"] = "v" + vertexClassNumber;
        attributeList["extratext"]["x"] = cx;
        attributeList["extratext"]["y"] = cy + textYaxisOffset + 26;
        attributeList["extratext"]["fill"] = "red";
        attributeList["extratext"]["font-family"] = graphVertexProperties["text"]["default"]["font-family"];
        attributeList["extratext"]["font-size"] = 0;
        attributeList["extratext"]["font-weight"] = graphVertexProperties["text"]["default"]["font-weight"];
        attributeList["extratext"]["text-anchor"] = graphVertexProperties["text"]["default"]["text-anchor"];
        if (vertexShape == "rect_long") attributeList["extratext"]["text-anchor"] = "left";
        attributeList["extratext"]["text"] = "";
        innerVertex.attr("class", attributeList["innerVertex"]["class"]);
        outerVertex.attr("class", attributeList["outerVertex"]["class"]);
        text.attr("class", attributeList["text"]["class"]);
        extratext.attr("class", attributeList["extratext"]["class"]);
        innerVertex.attr("cx", attributeList["innerVertex"]["cx"]).attr("cy", attributeList["innerVertex"]["cy"]).attr("x", attributeList["innerVertex"]["x"]).attr("y", attributeList["innerVertex"]["y"]).attr("fill", attributeList["innerVertex"]["fill"]).attr("r", attributeList["innerVertex"]["r"]).attr("width", attributeList["innerVertex"]["width"]).attr("height", attributeList["innerVertex"]["height"]).attr("stroke", attributeList["innerVertex"]["stroke"]).attr("stroke-width", attributeList["innerVertex"]["stroke-width"]);
        outerVertex.attr("cx", attributeList["outerVertex"]["cx"]).attr("cy", attributeList["outerVertex"]["cy"]).attr("x", attributeList["outerVertex"]["x"]).attr("y", attributeList["outerVertex"]["y"]).attr("fill", attributeList["outerVertex"]["fill"]).attr("r", attributeList["outerVertex"]["r"]).attr("width", attributeList["outerVertex"]["width"]).attr("height", attributeList["outerVertex"]["height"]).attr("stroke", attributeList["outerVertex"]["stroke"]).attr("stroke-width", attributeList["outerVertex"]["stroke-width"]);
        text.attr("x", attributeList["text"]["x"]).attr("y", attributeList["text"]["y"]).attr("fill", attributeList["text"]["fill"]).attr("font-family", attributeList["text"]["font-family"]).attr("font-size", attributeList["text"]["font-size"]).attr("font-weight", attributeList["text"]["font-weight"]).attr("text-anchor", attributeList["text"]["text-anchor"]).text(function() {
            return attributeList["text"]["text"]
        });
        extratext.attr("x", attributeList["extratext"]["x"]).attr("y", attributeList["extratext"]["y"]).attr("fill", attributeList["extratext"]["fill"]).attr("font-family", attributeList["extratext"]["font-family"]).attr("font-size", attributeList["extratext"]["font-size"]).attr("font-weight", attributeList["extratext"]["font-weight"]).attr("text-anchor", attributeList["extratext"]["text-anchor"]).text(function() {
            return attributeList["extratext"]["text"]
        })
    }

    function draw(dur) {
        if (dur == null || isNaN(dur)) dur = defaultAnimationDuration;
        if (dur <= 0) dur = 1;
        innerVertex.transition().duration(dur).attr("cx", attributeList["innerVertex"]["cx"]).attr("cy", attributeList["innerVertex"]["cy"]).attr("x", attributeList["innerVertex"]["x"]).attr("y", attributeList["innerVertex"]["y"]).attr("fill", attributeList["innerVertex"]["fill"]).attr("r", attributeList["innerVertex"]["r"]).attr("width", attributeList["innerVertex"]["width"]).attr("height", attributeList["innerVertex"]["height"]).attr("stroke", attributeList["innerVertex"]["stroke"]).attr("stroke-width", attributeList["innerVertex"]["stroke-width"]);
        outerVertex.transition().duration(dur).attr("cx", attributeList["outerVertex"]["cx"]).attr("cy", attributeList["outerVertex"]["cy"]).attr("x", attributeList["outerVertex"]["x"]).attr("y", attributeList["outerVertex"]["y"]).attr("fill", attributeList["outerVertex"]["fill"]).attr("r", attributeList["outerVertex"]["r"]).attr("width", attributeList["outerVertex"]["width"]).attr("height", attributeList["outerVertex"]["height"]).attr("stroke", attributeList["outerVertex"]["stroke"]).attr("stroke-width", attributeList["outerVertex"]["stroke-width"]);
        text.transition().duration(dur).attr("x", attributeList["text"]["x"]).attr("y", attributeList["text"]["y"]).attr("fill", attributeList["text"]["fill"]).attr("font-family", attributeList["text"]["font-family"]).attr("font-size", attributeList["text"]["font-size"]).attr("font-weight", attributeList["text"]["font-weight"]).attr("text-anchor", attributeList["text"]["text-anchor"]).text(function() {
            return attributeList["text"]["text"]
        });
        extratext.transition().duration(dur).attr("x", attributeList["extratext"]["x"]).attr("y", attributeList["extratext"]["y"]).attr("fill", attributeList["extratext"]["fill"]).attr("font-family", attributeList["extratext"]["font-family"]).attr("font-size", attributeList["extratext"]["font-size"]).attr("font-weight", attributeList["extratext"]["font-weight"]).attr("text-anchor", attributeList["extratext"]["text-anchor"]).text(function() {
            return attributeList["extratext"]["text"]
        })
    }
};
var GraphWidget = function() {
    var self = this;
    console.log("Graph Widget called2");
    var vertexList = {};
    var edgeList = {};
    var polygonList = {};
    console.log(edgeList);
    var vertexUpdateList = {};
    var edgeUpdateList = {};
    var polygonUpdateList = {};
    var currentIteration = NO_ITERATION;
    var animationStateList = NO_STATELIST;
    var animationStatus = ANIMATION_STOP;
    var animationDuration = 500;
    this.clearAll = function() {
        if (mainSvg.select("#polygon").empty()) {
            polygonSvg = mainSvg.append("g").attr("id", "polygon2")
        }
        if (mainSvg.select("#edge").empty()) {
            edgeSvg = mainSvg.append("g").attr("id", "edge")
        }
        if (mainSvg.select("#vertex").empty()) vertexSvg = mainSvg.append("g").attr("id", "vertex");
        if (mainSvg.select("#vertexText").empty()) vertexTextSvg = mainSvg.append("g").attr("id", "vertexText");
        if (mainSvg.select("#edgeWeight").empty()) edgeWeightSvg = mainSvg.append("g").attr("id", "edgeWeight");
        if (mainSvg.select("#edgeWeightPath").empty()) edgeWeightPathSvg = mainSvg.append("g").attr("id", "edgeWeightPath");
        if (mainSvg.select("#marker").empty()) markerSvg = mainSvg.append("g").attr("id", "marker")
    };
    self.clearAll();
    this.addVertex = function(cx, cy, vertexText, vertexClassNumber, show, extraText) {
        if (show != false) show = true;
        var newVertex = new GraphVertexWidget(cx, cy, VERTEX_SHAPE_CIRCLE, vertexText, vertexClassNumber);
        if (extraText != "") newVertex.changeExtraText(extraText);
        vertexList[vertexClassNumber] = newVertex;
        vertexUpdateList[vertexClassNumber] = false;
        if (show == true) {
            vertexList[vertexClassNumber].showVertex();
            vertexList[vertexClassNumber].redraw()
        }
    };
    this.addRectVertex = function(rx, ry, vertexText, vertexClassNumber, show, rect_type) {
        if (show != false) show = true;
        if (typeof rect_type == "undefined") rect_type = VERTEX_SHAPE_RECT;
        var newVertex = new GraphVertexWidget(rx, ry, rect_type, vertexText, vertexClassNumber);
        vertexList[vertexClassNumber] = newVertex;
        vertexUpdateList[vertexClassNumber] = false;
        if (show == true) {
            vertexList[vertexClassNumber].showVertex();
            vertexList[vertexClassNumber].redraw()
        }
    };
    this.addEdge = function(vertexClassA, vertexClassB, edgeIdNumber, type, weight, show, showWeight) {
        console.log("adding edge! of type ", type, "from ", vertexClassA, "to ", vertexClassB);
        try {
            if (show != false) show = true;
            if (showWeight != true) showWeight = false;
            if (type == null || isNaN(type)) type = EDGE_TYPE_UDE;
            if (weight == null || isNaN(weight)) weight = 1;
            var vertexA = vertexList[vertexClassA];
            var vertexB = vertexList[vertexClassB];
            if (type == EDGE_TYPE_DE) {
                console.log(vertexB.getEdge())
            }
            var newEdge = new GraphEdgeWidget(vertexA, vertexB, edgeIdNumber, type, weight);
            edgeList[edgeIdNumber] = newEdge;
            edgeUpdateList[edgeIdNumber] = false;
            vertexList[vertexClassA].addEdge(newEdge);
            vertexList[vertexClassB].addEdge(newEdge);
            if (show == true) {
                edgeList[edgeIdNumber].showEdge();
                if (showWeight == true) edgeList[edgeIdNumber].showWeight();
                edgeList[edgeIdNumber].redraw()
            }
        } catch (err) {}
    };
    this.removeEdge = function(edgeIdNumber) {
        if (edgeList[edgeIdNumber] == null || edgeList[edgeIdNumber] == undefined) return;
        edgeList[edgeIdNumber].removeEdge();
        delete edgeList[edgeIdNumber];
        delete edgeUpdateList[edgeIdNumber]
    };
    this.removeVertex = function(vertexClassNumber) {
        if (vertexList[vertexClassNumber] == null || vertexUpdateList[vertexClassNumber] == undefined) return;
        vertexList[vertexClassNumber].removeVertex();
        delete vertexList[vertexClassNumber];
        delete vertexUpdateList[vertexClassNumber]
    };
    this.addPolygon = function(polygonId, pointList, show) {
        if (show != false) show = true;
        var newPolygon = new GraphPolygonWidget(polygonId, pointList);
        polygonList[polygonId] = newPolygon;
        polygonUpdateList[polygonId] = false;
        if (show == true) {
            polygonList[polygonId].showPolygon();
            polygonList[polygonId].redraw()
        }
    };
    this.removePolygon = function(polygonId) {
        if (polygonList[polygonId] == null || polygonUpdateList[polygonId] == undefined) return;
        polygonList[polygonId].removePolygon();
        delete polygonList[polygonId];
        delete polygonUpdateList[polygonId]
    };
    this.updateGraph = function(graphState, duration) {
        if (duration == null || isNaN(duration)) duration = animationDuration;
        updateDisplay(graphState, duration)
    };
    this.startAnimation = function(stateList, callback) {
        if (stateList != null) animationStateList = stateList;
        currentIteration = 0;
        self.play(callback)
    };
    this.animate = function(callback) {
        if (currentIteration >= animationStateList.length && animationStatus != ANIMATION_STOP) animationStatus = ANIMATION_PAUSE;
        if (currentIteration == animationStateList.length - 1) {
            if (typeof callback === "function") callback()
        }
        if (animationStatus == ANIMATION_PAUSE || animationStatus == ANIMATION_STOP) return;
        self.next(animationDuration);
        setTimeout(function() {
            self.animate(callback)
        }, animationDuration)
    };
    this.play = function(callback) {
        if (currentIteration < 0) currentIteration = 0;
        if (animationStatus == ANIMATION_STOP) {
            animationStatus = ANIMATION_PLAY;
            updateDisplay(animationStateList[currentIteration], animationDuration);
            setTimeout(function() {
                self.animate(callback)
            }, animationDuration)
        } else {
            animationStatus = ANIMATION_PLAY;
            self.animate(callback)
        }
    };
    this.pause = function() {
        animationStatus = ANIMATION_PAUSE
    };
    this.stop = function() {
        self.jumpToIteration(animationStateList.length - 1, 0);
        currentIteration = animationStateList.length - 1;
        animationStatus = ANIMATION_STOP;
        var currentVertexState = animationStateList[currentIteration]["vl"];
        var currentEdgeState = animationStateList[currentIteration]["el"];
        var key;
        for (key in currentEdgeState) edgeUpdateList[key] = true;
        for (key in edgeUpdateList)
            if (edgeUpdateList[key] == false) self.removeEdge(key);
        for (key in currentVertexState) vertexUpdateList[key] = true;
        for (key in vertexUpdateList)
            if (vertexUpdateList[key] == false) self.removeVertex(key);
        for (key in edgeUpdateList) edgeUpdateList[key] = false;
        for (key in vertexUpdateList) vertexUpdateList[key] = false;
        animationStateList = NO_STATELIST;
        currentIteration = NO_ITERATION
    };
    this.next = function(duration) {
        if (currentIteration < 0) currentIteration = 0;
        currentIteration++;
        if (currentIteration >= animationStateList.length) {
            currentIteration = animationStateList.length - 1;
            return
        }
        updateDisplay(animationStateList[currentIteration], duration)
    };
    this.previous = function(duration) {
        if (currentIteration >= animationStateList.length) currentIteration = animationStateList.length - 1;
        currentIteration--;
        if (currentIteration < 0) return;
        updateDisplay(animationStateList[currentIteration], duration)
    };
    this.forceNext = function(duration) {
        self.pause();
        self.next(duration)
    };
    this.forcePrevious = function(duration) {
        self.pause();
        self.previous(duration)
    };
    this.jumpToIteration = function(iteration, duration) {
        currentIteration = iteration;
        if (currentIteration >= animationStateList.length) currentIteration = animationStateList.length - 1;
        if (currentIteration < 0) currentIteration = 0;
        updateDisplay(animationStateList[currentIteration], duration)
    };
    this.replay = function() {
        self.jumpToIteration(0, 0);
        setTimeout(function() {
            self.play()
        }, 500)
    };
    this.getCurrentIteration = function() {
        return currentIteration
    };
    this.getTotalIteration = function() {
        return Object.keys(animationStateList).length
    };
    this.getAnimationDuration = function() {
        return animationDuration
    };
    this.getCurrentState = function() {
        return animationStateList[currentIteration]
    };
    this.setAnimationDuration = function(duration) {
        animationDuration = duration
    };
    this.removeAll = function() {
        var key;
        for (key in edgeList) edgeList[key].removeEdge();
        for (key in vertexList) vertexList[key].removeVertex();
        for (key in polygonList) polygonList[key].removePolygon();
        edgeList = {};
        vertexList = {};
        polygonList = {};
        vertexUpdateList = {};
        edgeUpdateList = {};
        polygonUpdateList = {}
    };

    function updateDisplayForVertices(currentVertexState, duration) {
        var key;
        for (key in currentVertexState) {
            if (vertexList[key] == null || vertexList[key] == undefined) {
                self.addVertex(currentVertexState[key]["cx"], currentVertexState[key]["cy"], currentVertexState[key]["text"], key, false)
            }
            var currentVertex = vertexList[key];
            currentVertex.showVertex();
            if (currentVertexState[key]["state"] == OBJ_HIDDEN) currentVertex.hideVertex();
            else if (currentVertexState[key]["state"] != null) currentVertex.stateVertex(currentVertexState[key]["state"]);
            else currentVertex.stateVertex(VERTEX_DEFAULT);
            currentVertex.moveVertex(currentVertexState[key]["cx"], currentVertexState[key]["cy"]);
            currentVertex.changeText(currentVertexState[key]["text"]);
            if (currentVertexState[key]["text-font-size"] != null) currentVertex.changeTextFontSize(currentVertexState[key]["text-font-size"]);
            if (currentVertexState[key]["inner-r"] != null && currentVertexState[key]["outer-r"] != null) currentVertex.changeRadius(currentVertexState[key]["inner-r"], currentVertexState[key]["outer-r"]);
            if (currentVertexState[key]["inner-w"] != null && currentVertexState[key]["outer-w"] != null) currentVertex.changeWidth(currentVertexState[key]["inner-w"], currentVertexState[key]["outer-w"]);
            if (currentVertexState[key]["inner-h"] != null && currentVertexState[key]["outer-h"] != null) currentVertex.changeHeight(currentVertexState[key]["inner-h"], currentVertexState[key]["outer-h"]);
            if (currentVertexState[key]["inner-stroke-width"] != null && currentVertexState[key]["outer-stroke-width"] != null) currentVertex.changeStrokeWidth(currentVertexState[key]["inner-stroke-width"], currentVertexState[key]["outer-stroke-width"]);
            if (currentVertexState[key]["extratext"] == null) currentVertex.changeExtraText("");
            else currentVertex.changeExtraText(currentVertexState[key]["extratext"]);
            currentVertex.redraw(duration);
            vertexUpdateList[key] = true
        }
        for (key in vertexUpdateList) {
            if (vertexUpdateList[key] == false) {
                vertexList[key].hideVertex();
                vertexList[key].redraw(duration);
                vertexUpdateList[key] = true
            }
        }
        for (key in vertexUpdateList) vertexUpdateList[key] = false
    }

    function updateDisplayForEdges(currentEdgeState, duration) {
        var key;
        try {
            for (key in currentEdgeState) {
                if (edgeList[key] == null || edgeList[key] == undefined) self.addEdge(currentEdgeState[key]["vertexA"], currentEdgeState[key]["vertexB"], key, currentEdgeState[key]["type"], currentEdgeState[key]["weight"], false);
                var currentEdge = edgeList[key];
                currentEdge.showEdge();
                if (currentEdgeState[key]["state"] == OBJ_HIDDEN) currentEdge.hideEdge();
                else if (currentEdgeState[key]["state"] != null) currentEdge.stateEdge(currentEdgeState[key]["state"]);
                else currentEdge.stateEdge(EDGE_DEFAULT);
                currentEdge.hideWeight();
                if (currentEdgeState[key]["state"] != OBJ_HIDDEN && currentEdgeState[key]["displayWeight"] != null && currentEdgeState[key]["displayWeight"]) currentEdge.showWeight();
                currentEdge.changeVertexA(vertexList[currentEdgeState[key]["vertexA"]]);
                currentEdge.changeVertexB(vertexList[currentEdgeState[key]["vertexB"]]);
                if (currentEdgeState[key]["type"] == null) currentEdgeState[key]["type"] = EDGE_TYPE_UDE;
                currentEdge.changeType(currentEdgeState[key]["type"]);
                if (currentEdgeState[key]["weight"] != null) currentEdge.changeWeight(currentEdgeState[key]["weight"]);
                currentEdge.refreshPath();
                if (currentEdgeState[key]["animateHighlighted"] == null || !currentEdgeState[key]["animateHighlighted"]) currentEdge.redraw(duration);
                else currentEdge.animateHighlighted(duration * .9);
                edgeUpdateList[key] = true
            }
            for (key in edgeUpdateList) {
                if (edgeUpdateList[key] == false) {
                    edgeList[key].hideWeight();
                    edgeList[key].hideEdge();
                    edgeList[key].redraw(duration);
                    edgeUpdateList[key] = true
                }
            }
            for (key in edgeUpdateList) edgeUpdateList[key] = false
        } catch (err) {}
    }

    function updateDisplayForPolygons(currentPolygonState, duration) {
        var key;
        for (key in currentPolygonState) {
            if (polygonList[key] == null || polygonList[key] == undefined) {
                self.addPolygon(key, currentPolygonState[key]["points"], false)
            }
            var currentPolygon = polygonList[key];
            currentPolygon.showPolygon();
            if (currentPolygonState[key]["state"] != null) currentPolygon.statePolygon(currentPolygonState[key]["state"]);
            else currentPolygon.statePolygon(POLYGON_DEFAULT);
            currentPolygon.redraw(duration);
            polygonUpdateList[key] = true
        }
        for (key in polygonUpdateList) {
            if (polygonUpdateList[key] == false) {
                polygonList[key].hidePolygon();
                polygonList[key].redraw(duration);
                polygonUpdateList[key] = true
            }
        }
        for (key in polygonUpdateList) polygonUpdateList[key] = false
    }

    function updateStatus(statusText) {
        $("#status-subtitles p").html(statusText);
        $("#status p").html(statusText)
    }

    function updateDisplay(graphState, duration, checkBDE = true) {
        if (checkBDE) {
            var directed_edges = new Set;
            for (e_key in graphState["el"]) {
                if (graphState["el"][e_key]["type"] != 1) continue;
                var u = graphState["el"][e_key]["vertexA"];
                var v = graphState["el"][e_key]["vertexB"];
                directed_edges.add(`${u}_${v}`)
            }
            for (e_key in graphState["el"]) {
                if (graphState["el"][e_key]["type"] != 1) continue;
                var u = graphState["el"][e_key]["vertexA"];
                var v = graphState["el"][e_key]["vertexB"];
                if (directed_edges.has(`${v}_${u}`)) {
                    graphState["el"][e_key]["type"] = 2
                }
            }
        }
        var lastIteration = Object.keys(animationStateList).length - 1;
        try {
            $("#progress-bar").slider("value", currentIteration);
            updateStatus(animationStateList[currentIteration]["status"]);
            highlightLine(animationStateList[currentIteration]["lineNo"]);
            if (currentIteration == lastIteration) {
                pause();
                var imgUrl = $("#play img").attr("src");
                if (imgUrl) {
                    $("#play img").attr("src", imgUrl.replace("/play.png", "/replay.png").replace("/pause.png", "/replay.png"));
                    $("#mobile-playback-play img").attr("src", imgUrl.replace("/play.png", "/replay.png").replace("/pause.png", "/replay.png"))
                }
                $("#play img").attr("alt", "replay").attr("title", "replay");
                $("#mobile-playback-play img").attr("alt", "replay").attr("title", "replay")
            } else {
                var imgUrl = $("#play img").attr("src");
                if (imgUrl) {
                    $("#play img").attr("src", imgUrl.replace("/replay.png", "/play.png").replace("/pause.png", "/play.png"));
                    $("#mobile-playback-play img").attr("src", imgUrl.replace("/replay.png", "/play.png").replace("/pause.png", "/play.png"))
                }
                $("#play img").attr("alt", "play").attr("title", "play");
                $("#mobile-playback-play img").attr("alt", "play").attr("title", "play")
            }
        } catch (error) {}
        updateDisplayForVertices(graphState["vl"], duration);
        updateDisplayForEdges(graphState["el"], duration);
        updateDisplayForPolygons(graphState["pl"], duration)
    }
};
var ObjectPair = function(objectOne, objectTwo) {
    this.getFirst = function() {
        return objectOne
    };
    this.getSecond = function() {
        return objectTwo
    };
    this.setFirst = function(newObjectOne) {
        objectOne = newObjectOne
    };
    this.setSecond = function(newObjectTwo) {
        objectTwo = newObjectTwo
    }
};
ObjectPair.compare = function(objPairOne, objPairTwo) {
    if (objPairOne.getFirst() > objPairTwo.getFirst()) return 1;
    else if (objPairOne.getFirst() < objPairTwo.getFirst()) return -1;
    else {
        if (objPairOne.getSecond() > objPairTwo.getSecond()) return 1;
        if (objPairOne.getSecond() < objPairTwo.getSecond()) return -1;
        else return 0
    }
};
var ObjectTriple = function(objectOne, objectTwo, objectThree) {
    this.getFirst = function() {
        return objectOne
    };
    this.getSecond = function() {
        return objectTwo
    };
    this.getThird = function() {
        return objectThree
    };
    this.setFirst = function(newObjectOne) {
        objectOne = newObjectOne
    };
    this.setSecond = function(newObjectTwo) {
        objectTwo = newObjectTwo
    };
    this.setThird = function(newObjectThree) {
        objectThree = newObjectThree
    }
};
ObjectTriple.compare = function(objTripleOne, objTripleTwo) {
    if (objTripleOne.getFirst() > objTripleTwo.getFirst()) return 1;
    else if (objTripleOne.getFirst() < objTripleTwo.getFirst()) return -1;
    else {
        if (objTripleOne.getSecond() > objTripleTwo.getSecond()) return 1;
        if (objTripleOne.getSecond() < objTripleTwo.getSecond()) return -1;
        else {
            if (objTripleOne.getThird() > objTripleTwo.getThird()) return 1;
            if (objTripleOne.getThird() < objTripleTwo.getThird()) return -1;
            else return 0
        }
    }
};
var UfdsHelper = function() {
    var self = this;
    var internalUfds = {};
    this.insert = function(insertedKey) {
        if (internalUfds[insertedKey] != null) return false;
        var newElement = {};
        newElement["parent"] = insertedKey;
        newElement["rank"] = 0;
        internalUfds[insertedKey] = newElement
    };
    this.findSet = function(key) {
        if (internalUfds[key] == null) return false;
        var currentParent = internalUfds[key]["parent"];
        var currentElement = key;
        while (currentParent != currentElement) {
            currentElement = currentParent;
            currentParent = internalUfds[currentElement]["parent"]
        }
        internalUfds[key]["parent"] = currentParent;
        return currentParent
    };
    this.unionSet = function(firstKey, secondKey) {
        if (internalUfds[firstKey] == null || internalUfds[secondKey] == null) return false;
        if (self.isSameSet(firstKey, secondKey)) return true;
        var firstSet = self.findSet(firstKey);
        var secondSet = self.findSet(secondKey);
        if (internalUfds[firstSet]["rank"] > internalUfds[secondSet]["rank"]) {
            internalUfds[firstSet]["parent"] = secondSet;
            internalUfds[secondSet]["rank"]++
        } else {
            internalUfds[secondSet]["parent"] = firstSet;
            internalUfds[firstSet]["rank"]++
        }
    };
    this.isSameSet = function(firstKey, secondKey) {
        if (internalUfds[firstKey] == null || internalUfds[secondKey] == null) return false;
        return self.findSet(firstKey) == self.findSet(secondKey)
    }
};

function IsUndirected(iVL, iEL) {
    if (iVL.length == 0) return true;
    var M = [];
    for (var i in iVL) {
        M[i] = [];
        for (var j in iVL) M[i][j] = 0
    }
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"],
            w = iEL[key]["w"];
        M[u][v] = w
    }
    for (var i in iVL)
        for (var j in iVL)
            if (M[i][j] != M[j][i]) return false;
    return true
}

function IsConstantWeighted(iVL, iEL) {
    if (iVL.length == 0) return true;
    var ref = iEL[0]["w"];
    for (var key in iEL)
        if (iEL[key]["w"] != ref) return false;
    return true
}

function HasNegativeWeight(iVL, iEL) {
    if (iVL.length == 0) return false;
    for (var key in iEL)
        if (parseInt(iEL[key]["w"]) < 0) return true;
    return false
}

function IsTree(iVL, iEL) {
    if (iVL.length == 0) return true;
    if (!IsUndirected(iVL, iEL)) return false;

    function dfs(u) {
        visited[u] = true;
        for (var key in iEL)
            if (iEL[key]["u"] === u && visited[iEL[key]["v"]] === false) dfs(iEL[key]["v"])
    }
    var V = 0,
        E = 0,
        visited = [];
    for (var key in iVL) {
        V++;
        visited[key] = false
    }
    for (var key in iEL) E++;
    if (E / 2 != V - 1) return false;
    dfs(0);
    for (var key in iVL)
        if (visited[key] === false) return false;
    return true
}

function IsDAG(iVL, iEL) {
    console.log("I am in dag");
    if (iVL.length == 0) return true;
    if (IsUndirected(iVL, iEL)) return false;
    var V = 0;
    for (var key in iVL) V++;
    var M = [];
    for (var i in iVL) {
        M[i] = [];
        for (var j in iVL) M[i][j] = 0
    }
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"];
        M[u][v] = 1
    }
    for (var k = 0; k < V; k++)
        for (var i = 0; i < V; i++)
            for (var j = 0; j < V; j++)
                if (M[i][k] == 1 && M[k][j] == 1) M[i][j] = 1;
    for (var i = 0; i < V; i++)
        if (M[i][i] == 1) return false;
    return true
}

function TopoSort(iVL, iEL) {
    if (iVL.length == 0) return {};
    if (!IsDAG(iVL, iEL)) return {};

    function dfs2(u) {
        visited[u] = true;
        for (var key in iEL)
            if (iEL[key]["u"] === u && visited[iEL[key]["v"]] === false) dfs2(iEL[key]["v"]);
        order.unshift(u)
    }
    var visited = [],
        order = [];
    for (var key in iVL) visited[key] = false;
    for (var key in iVL)
        if (!visited[key]) dfs2(parseInt(key));
    return order
}

function RunBellmanFord(iVL, iEL, sourceVertex) {
    if (iVL.length == 0) return {};
    var V = 0,
        E = 0,
        d = {},
        virus = [];
    for (var key in iVL) {
        V++;
        d[key] = 999;
        virus[key] = false
    }
    d[parseInt(sourceVertex)] = 0;
    for (var key in iEL) E++;
    for (var i = 1; i < V; i++)
        for (var key in iEL) {
            var u = iEL[key]["u"],
                v = iEL[key]["v"],
                w = iEL[key]["w"];
            if (d[u] != 999 && w != 999 && d[u] + w < d[v]) d[v] = d[u] + w
        }

    function dfs(u) {
        virus[u] = true;
        for (var key in iEL)
            if (iEL[key]["u"] === u && virus[iEL[key]["v"]] === false) dfs(iEL[key]["v"])
    }
    var hasNegativeCycle = false;
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"],
            w = iEL[key]["w"];
        if (d[u] != 999 && d[u] + w < d[v]) {
            dfs(u);
            hasNegativeCycle = true
        }
    }
    if (hasNegativeCycle)
        for (var key in iVL)
            if (virus[key]) d[key] = "??";
    return d
}

function HasNegativeWeightCycle(iVL, iEL, sourceVertex) {
    if (iVL.length == 0) return false;
    var V = 0,
        E = 0,
        d = {};
    for (var key in iVL) {
        V++;
        d[key] = 999
    }
    d[parseInt(sourceVertex)] = 0;
    for (var key in iEL) E++;
    for (var i = 1; i < V; i++)
        for (var key in iEL) {
            var u = iEL[key]["u"],
                v = iEL[key]["v"],
                w = iEL[key]["w"];
            if (d[u] != 999 && w != 999 && d[u] + w < d[v]) d[v] = d[u] + w
        }
    var hasNegativeCycle = false;
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"],
            w = iEL[key]["w"];
        if (d[u] != 999 && d[u] + w < d[v]) hasNegativeCycle = true
    }
    return hasNegativeCycle
}

function getAdjacencyMatrix(iEL, isUndirected, isUnweighted, numVertex) {
    console.log("inside amtrix");
    console.log(numVertex);
    var arr = [];
    for (var i = 0; i < numVertex; i++) {
        arr.push([]);
        for (var j = 0; j < numVertex; j++) {
            arr[i].push("0")
        }
    }
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"],
            w = iEL[key]["w"];
        arr[u][v] = isUnweighted ? "1" : w;
        if (isUndirected) {
            arr[v][u] = isUnweighted ? "1" : w
        }
    }
    return arr
}

function getAdjacencyList(iVL, iEL, isUndirected) {
    adjlist = {};
    for (var key in iVL) {
        adjlist[key] = []
    }
    for (var key in iEL) {
        var u = iEL[key]["u"],
            v = iEL[key]["v"],
            w = iEL[key]["w"];
        adjlist[u].push([v, w]);
        if (isUndirected) {
            adjlist[v].push([u, w])
        }
    }
    return adjlist
}

function IsBipartite(iVL, iEL, isUndirected = true) {
    if (iVL.length == 0) return false;
    var color = {};
    for (var key in iVL) {
        color[key] = -1
    }
    var adjlist = getAdjacencyList(iVL, iEL, isUndirected);
    for (var key in iVL) {
        if (color[key] != -1) continue;
        var q = [];
        q.push(key);
        color[key] = 0;
        while (q.length > 0) {
            var u = q.shift();
            for (let [v, w] of adjlist[u]) {
                if (color[v] == -1) {
                    color[v] = 1 - color[u];
                    q.push(v)
                }
                if (color[u] == color[v]) return false
            }
        }
    }
    return true
}
var VL = 0;
var EL = 1;
var CP3_4_1 = 0;
var CP3_4_3 = 1;
var CP3_4_4 = 2;
var CP3_4_9 = 3;
var CP3_4_10 = 4;
var CP3_4_14 = 5;
var CP3_4_17 = 6;
var CP3_4_18 = 7;
var CP3_4_19 = 8;
var CP3_4_24 = 9;
var CP3_4_26_1 = 10;
var CP3_4_26_2 = 11;
var CP3_4_26_3 = 12;
var CP3_4_40 = 13;
var K5 = 14;
var RAIL = 15;
var TESSELLATION = 16;
var BELLMANFORD_KILLER = 17;
var DIJKSTRA_KILLER = 18;
var DAG = 19;
var FORDFULKERSON_KILLER = 20;
var DINIC_SHOWCASE = 21;
var MVC_U_TWO_APPROX_KILLER = 22;
var EXAMPLE_VERTEX_WEIGHTED_TREE = 23;
var MVC_W_TWO_APPROX_KILLER = 24;
var INTERESTING_BIPARTITE = 25;
var LINEAR_CHAIN = 26;
var CS4234_SAMPLE = 27;
var K4 = 28;
var K8 = 29;
var CS4234_TUTORIAL_THREE = 30;
var WHEEL = 31;
var HOUSE_OF_CARDS = 32;
var FMOD = 33;
var GREEDY_AUGMENTING_PATH_KILLER = 34;
var K55 = 35;
var K55_ALMOST = 36;
var CP4_2_7 = 37;
var CP4_4_3 = 38;
var CP4_4_7 = 39;
var CP4_4_8_C = 40;
var CP4_4_8_D = 41;
var CP4_4_9 = 42;
var CP4_4_12 = 43;
var CP4_4_13 = 44;
var CP4_4_16 = 45;
var CP4_4_23 = 46;
var CP4_4_28_A = 47;
var CP4_4_29 = 48;
var CP4_4_36 = 49;
var CP4_8_17_B = 50;
var BIPARTITE = 51;
var TREE = 52;
var B_TREE = 53;
var CYCLIC = 54;
var TOURNAMENT = 55;
var SSSP = 56;
var CP4_2_7_DISJOINT = 57;
var WHEEL_DS = 58;
var STAR = 59;

function getExampleGraph(id, mode) {
    if (id == CP3_4_1) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 400,
                y: 125
            },
            3: {
                x: 500,
                y: 25
            },
            4: {
                x: 600,
                y: 25
            },
            5: {
                x: 700,
                y: 25
            },
            6: {
                x: 600,
                y: 125
            },
            7: {
                x: 500,
                y: 125
            },
            8: {
                x: 700,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 0,
                w: 1
            },
            2: {
                u: 1,
                v: 2,
                w: 1
            },
            3: {
                u: 1,
                v: 3,
                w: 1
            },
            4: {
                u: 2,
                v: 1,
                w: 1
            },
            5: {
                u: 2,
                v: 3,
                w: 1
            },
            6: {
                u: 3,
                v: 1,
                w: 1
            },
            7: {
                u: 3,
                v: 2,
                w: 1
            },
            8: {
                u: 3,
                v: 4,
                w: 1
            },
            9: {
                u: 4,
                v: 3,
                w: 1
            },
            10: {
                u: 6,
                v: 7,
                w: 1
            },
            11: {
                u: 6,
                v: 8,
                w: 1
            },
            12: {
                u: 7,
                v: 6,
                w: 1
            },
            13: {
                u: 8,
                v: 6,
                w: 1
            }
        }
    } else if (id == CP3_4_3) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 500,
                y: 25
            },
            3: {
                x: 600,
                y: 25
            },
            4: {
                x: 300,
                y: 125
            },
            5: {
                x: 400,
                y: 125
            },
            6: {
                x: 500,
                y: 125
            },
            7: {
                x: 600,
                y: 125
            },
            8: {
                x: 300,
                y: 225
            },
            9: {
                x: 300,
                y: 325
            },
            10: {
                x: 400,
                y: 325
            },
            11: {
                x: 500,
                y: 325
            },
            12: {
                x: 600,
                y: 325
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 4,
                w: 1
            },
            2: {
                u: 1,
                v: 0,
                w: 1
            },
            3: {
                u: 1,
                v: 2,
                w: 1
            },
            4: {
                u: 1,
                v: 5,
                w: 1
            },
            5: {
                u: 2,
                v: 1,
                w: 1
            },
            6: {
                u: 2,
                v: 3,
                w: 1
            },
            7: {
                u: 2,
                v: 6,
                w: 1
            },
            8: {
                u: 3,
                v: 2,
                w: 1
            },
            9: {
                u: 3,
                v: 7,
                w: 1
            },
            10: {
                u: 4,
                v: 0,
                w: 1
            },
            11: {
                u: 4,
                v: 8,
                w: 1
            },
            12: {
                u: 5,
                v: 1,
                w: 1
            },
            13: {
                u: 5,
                v: 6,
                w: 1
            },
            14: {
                u: 5,
                v: 10,
                w: 1
            },
            15: {
                u: 6,
                v: 2,
                w: 1
            },
            16: {
                u: 6,
                v: 5,
                w: 1
            },
            17: {
                u: 6,
                v: 11,
                w: 1
            },
            18: {
                u: 7,
                v: 3,
                w: 1
            },
            19: {
                u: 7,
                v: 12,
                w: 1
            },
            20: {
                u: 8,
                v: 4,
                w: 1
            },
            21: {
                u: 8,
                v: 9,
                w: 1
            },
            22: {
                u: 9,
                v: 8,
                w: 1
            },
            23: {
                u: 9,
                v: 10,
                w: 1
            },
            24: {
                u: 10,
                v: 5,
                w: 1
            },
            25: {
                u: 10,
                v: 9,
                w: 1
            },
            26: {
                u: 10,
                v: 11,
                w: 1
            },
            27: {
                u: 11,
                v: 6,
                w: 1
            },
            28: {
                u: 11,
                v: 10,
                w: 1
            },
            29: {
                u: 11,
                v: 12,
                w: 1
            },
            30: {
                u: 12,
                v: 7,
                w: 1
            },
            31: {
                u: 12,
                v: 11,
                w: 1
            }
        }
    } else if (id == CP3_4_4) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 400,
                y: 125
            },
            3: {
                x: 500,
                y: 25
            },
            4: {
                x: 600,
                y: 25
            },
            5: {
                x: 700,
                y: 25
            },
            6: {
                x: 500,
                y: 125
            },
            7: {
                x: 600,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 2,
                w: 1
            },
            2: {
                u: 1,
                v: 2,
                w: 1
            },
            3: {
                u: 1,
                v: 3,
                w: 1
            },
            4: {
                u: 2,
                v: 3,
                w: 1
            },
            5: {
                u: 2,
                v: 5,
                w: 1
            },
            6: {
                u: 3,
                v: 4,
                w: 1
            },
            7: {
                u: 7,
                v: 6,
                w: 1
            }
        }
    } else if (id == CP3_4_9) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 400,
                y: 125
            },
            3: {
                x: 500,
                y: 25
            },
            4: {
                x: 600,
                y: 25
            },
            5: {
                x: 700,
                y: 25
            },
            6: {
                x: 600,
                y: 125
            },
            7: {
                x: 700,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 3,
                w: 1
            },
            2: {
                u: 3,
                v: 2,
                w: 1
            },
            3: {
                u: 2,
                v: 1,
                w: 1
            },
            4: {
                u: 3,
                v: 4,
                w: 1
            },
            5: {
                u: 4,
                v: 5,
                w: 1
            },
            6: {
                u: 5,
                v: 7,
                w: 1
            },
            7: {
                u: 7,
                v: 6,
                w: 1
            },
            8: {
                u: 6,
                v: 4,
                w: 1
            }
        }
    } else if (id == CP3_4_10) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 500,
                y: 125
            },
            3: {
                x: 400,
                y: 225
            },
            4: {
                x: 300,
                y: 325
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 4
            },
            1: {
                u: 2,
                v: 0,
                w: 4
            },
            2: {
                u: 0,
                v: 3,
                w: 6
            },
            3: {
                u: 0,
                v: 4,
                w: 6
            },
            4: {
                u: 1,
                v: 2,
                w: 2
            },
            5: {
                u: 2,
                v: 3,
                w: 8
            },
            6: {
                u: 3,
                v: 4,
                w: 9
            }
        }
    } else if (id == CP3_4_14) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 450,
                y: 175
            },
            2: {
                x: 450,
                y: 25
            },
            3: {
                x: 600,
                y: 175
            },
            4: {
                x: 450,
                y: 325
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 9
            },
            1: {
                u: 0,
                v: 2,
                w: 75
            },
            2: {
                u: 1,
                v: 2,
                w: 95
            },
            3: {
                u: 3,
                v: 1,
                w: 19
            },
            4: {
                u: 1,
                v: 4,
                w: 42
            },
            5: {
                u: 2,
                v: 3,
                w: 51
            },
            6: {
                u: 4,
                v: 3,
                w: 31
            }
        }
    } else if (id == CP3_4_17) {
        if (mode == VL) return {
            0: {
                x: 415,
                y: 105
            },
            1: {
                x: 300,
                y: 25
            },
            2: {
                x: 455,
                y: 180
            },
            3: {
                x: 590,
                y: 25
            },
            4: {
                x: 470,
                y: 275
            }
        };
        else if (mode == EL) return {
            0: {
                u: 1,
                v: 4,
                w: 6
            },
            1: {
                u: 1,
                v: 3,
                w: 3
            },
            2: {
                u: 0,
                v: 1,
                w: 2
            },
            3: {
                u: 2,
                v: 4,
                w: 1
            },
            4: {
                u: 0,
                v: 2,
                w: 6
            },
            5: {
                u: 3,
                v: 4,
                w: 5
            },
            6: {
                u: 0,
                v: 3,
                w: 7
            }
        }
    } else if (id == CP3_4_18) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 100
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 400,
                y: 175
            },
            3: {
                x: 500,
                y: 100
            },
            4: {
                x: 600,
                y: 100
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 3,
                w: 2
            },
            2: {
                u: 3,
                v: 4,
                w: 3
            },
            3: {
                u: 0,
                v: 2,
                w: 10
            },
            4: {
                u: 2,
                v: 3,
                w: -10
            }
        }
    } else if (id == CP3_4_19) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 500,
                y: 25
            },
            3: {
                x: 600,
                y: 25
            },
            4: {
                x: 400,
                y: 100
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 99
            },
            1: {
                u: 1,
                v: 2,
                w: 15
            },
            2: {
                u: 2,
                v: 1,
                w: -42
            },
            3: {
                u: 2,
                v: 3,
                w: 10
            },
            4: {
                u: 0,
                v: 4,
                w: -99
            }
        }
    } else if (id == CP3_4_24) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 400,
                y: 225
            },
            3: {
                x: 500,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 4
            },
            1: {
                u: 1,
                v: 3,
                w: 8
            },
            2: {
                u: 0,
                v: 2,
                w: 8
            },
            3: {
                u: 2,
                v: 3,
                w: 3
            },
            4: {
                u: 2,
                v: 1,
                w: 1
            },
            5: {
                u: 1,
                v: 2,
                w: 1
            }
        }
    } else if (id == CP3_4_26_1) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 500,
                y: 225
            },
            2: {
                x: 400,
                y: 25
            },
            3: {
                x: 400,
                y: 225
            },
            4: {
                x: 600,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 2,
                w: 5
            },
            1: {
                u: 0,
                v: 3,
                w: 3
            },
            2: {
                u: 2,
                v: 3,
                w: 3
            },
            3: {
                u: 3,
                v: 1,
                w: 5
            },
            4: {
                u: 2,
                v: 1,
                w: 3
            },
            5: {
                u: 2,
                v: 4,
                w: 3
            },
            6: {
                u: 1,
                v: 4,
                w: 7
            }
        }
    } else if (id == CP3_4_26_2) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 500,
                y: 225
            },
            2: {
                x: 400,
                y: 25
            },
            3: {
                x: 400,
                y: 225
            },
            4: {
                x: 600,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 2,
                w: 5
            },
            1: {
                u: 0,
                v: 3,
                w: 3
            },
            2: {
                u: 2,
                v: 3,
                w: 3
            },
            3: {
                u: 3,
                v: 1,
                w: 5
            },
            4: {
                u: 2,
                v: 1,
                w: 3
            },
            5: {
                u: 2,
                v: 4,
                w: 3
            },
            6: {
                u: 1,
                v: 4,
                w: 4
            }
        }
    } else if (id == CP3_4_26_3) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 500,
                y: 225
            },
            2: {
                x: 400,
                y: 25
            },
            3: {
                x: 400,
                y: 225
            },
            4: {
                x: 600,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 2,
                w: 5
            },
            1: {
                u: 0,
                v: 3,
                w: 3
            },
            2: {
                u: 3,
                v: 1,
                w: 5
            },
            3: {
                u: 2,
                v: 1,
                w: 2
            },
            4: {
                u: 2,
                v: 4,
                w: 2
            },
            5: {
                u: 1,
                v: 4,
                w: 7
            }
        }
    } else if (id == CP3_4_40) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 25
            },
            1: {
                x: 500,
                y: 100
            },
            2: {
                x: 500,
                y: 250
            },
            3: {
                x: 400,
                y: 175
            },
            4: {
                x: 300,
                y: 250
            },
            5: {
                x: 300,
                y: 100
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 2
            },
            1: {
                u: 0,
                v: 5,
                w: 4
            },
            2: {
                u: 1,
                v: 0,
                w: 2
            },
            3: {
                u: 1,
                v: 3,
                w: 9
            },
            4: {
                u: 2,
                v: 3,
                w: 5
            },
            5: {
                u: 3,
                v: 1,
                w: 9
            },
            6: {
                u: 3,
                v: 2,
                w: 5
            },
            7: {
                u: 3,
                v: 4,
                w: 1
            },
            8: {
                u: 4,
                v: 3,
                w: 1
            },
            9: {
                u: 5,
                v: 0,
                w: 4
            }
        }
    } else if (id == K5) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 640,
                y: 125
            },
            2: {
                x: 370,
                y: 315
            },
            3: {
                x: 470,
                y: 25
            },
            4: {
                x: 570,
                y: 315
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 24
            },
            1: {
                u: 0,
                v: 2,
                w: 13
            },
            2: {
                u: 0,
                v: 3,
                w: 13
            },
            3: {
                u: 0,
                v: 4,
                w: 22
            },
            4: {
                u: 1,
                v: 2,
                w: 22
            },
            5: {
                u: 1,
                v: 3,
                w: 13
            },
            6: {
                u: 1,
                v: 4,
                w: 13
            },
            7: {
                u: 2,
                v: 3,
                w: 19
            },
            8: {
                u: 2,
                v: 4,
                w: 14
            },
            9: {
                u: 3,
                v: 4,
                w: 19
            }
        }
    } else if (id == RAIL) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 400,
                y: 25
            },
            2: {
                x: 500,
                y: 25
            },
            3: {
                x: 600,
                y: 25
            },
            4: {
                x: 700,
                y: 25
            },
            5: {
                x: 300,
                y: 125
            },
            6: {
                x: 400,
                y: 125
            },
            7: {
                x: 500,
                y: 125
            },
            8: {
                x: 600,
                y: 125
            },
            9: {
                x: 700,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 10
            },
            1: {
                u: 1,
                v: 2,
                w: 10
            },
            2: {
                u: 1,
                v: 6,
                w: 8
            },
            3: {
                u: 1,
                v: 7,
                w: 13
            },
            4: {
                u: 2,
                v: 3,
                w: 10
            },
            5: {
                u: 2,
                v: 7,
                w: 8
            },
            6: {
                u: 2,
                v: 8,
                w: 13
            },
            7: {
                u: 3,
                v: 4,
                w: 10
            },
            8: {
                u: 3,
                v: 8,
                w: 8
            },
            9: {
                u: 5,
                v: 6,
                w: 10
            },
            10: {
                u: 6,
                v: 7,
                w: 10
            },
            11: {
                u: 7,
                v: 8,
                w: 10
            },
            12: {
                u: 8,
                v: 9,
                w: 10
            }
        }
    } else if (id == TESSELLATION) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 300,
                y: 145
            },
            2: {
                x: 450,
                y: 85
            },
            3: {
                x: 600,
                y: 145
            },
            4: {
                x: 375,
                y: 265
            },
            5: {
                x: 600,
                y: 265
            },
            6: {
                x: 700,
                y: 25
            },
            7: {
                x: 740,
                y: 215
            },
            8: {
                x: 800,
                y: 95
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 8
            },
            1: {
                u: 0,
                v: 2,
                w: 12
            },
            2: {
                u: 1,
                v: 2,
                w: 13
            },
            3: {
                u: 1,
                v: 3,
                w: 25
            },
            4: {
                u: 4,
                v: 1,
                w: 9
            },
            5: {
                u: 2,
                v: 3,
                w: 14
            },
            6: {
                u: 2,
                v: 6,
                w: 21
            },
            7: {
                u: 3,
                v: 4,
                w: 20
            },
            8: {
                u: 3,
                v: 5,
                w: 8
            },
            9: {
                u: 3,
                v: 6,
                w: 12
            },
            10: {
                u: 3,
                v: 7,
                w: 12
            },
            11: {
                u: 3,
                v: 8,
                w: 16
            },
            12: {
                u: 4,
                v: 5,
                w: 19
            },
            13: {
                u: 5,
                v: 7,
                w: 11
            },
            14: {
                u: 6,
                v: 8,
                w: 11
            },
            15: {
                u: 7,
                v: 8,
                w: 9
            }
        }
    } else if (id == BELLMANFORD_KILLER) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25
            },
            1: {
                x: 375,
                y: 25
            },
            2: {
                x: 450,
                y: 25
            },
            3: {
                x: 525,
                y: 25
            },
            4: {
                x: 600,
                y: 25
            },
            5: {
                x: 675,
                y: 25
            },
            6: {
                x: 750,
                y: 25
            }
        };
        else if (mode == EL) return {
            0: {
                u: 5,
                v: 6,
                w: 1
            },
            1: {
                u: 4,
                v: 5,
                w: 2
            },
            2: {
                u: 3,
                v: 4,
                w: 3
            },
            3: {
                u: 2,
                v: 3,
                w: 4
            },
            4: {
                u: 1,
                v: 2,
                w: 5
            },
            5: {
                u: 0,
                v: 1,
                w: 6
            }
        }
    } else if (id == DIJKSTRA_KILLER) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 350,
                y: 25
            },
            2: {
                x: 400,
                y: 125
            },
            3: {
                x: 450,
                y: 25
            },
            4: {
                x: 500,
                y: 125
            },
            5: {
                x: 550,
                y: 25
            },
            6: {
                x: 600,
                y: 125
            },
            7: {
                x: 650,
                y: 25
            },
            8: {
                x: 700,
                y: 125
            },
            9: {
                x: 750,
                y: 25
            },
            10: {
                x: 800,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 1,
                v: 2,
                w: -32
            },
            1: {
                u: 3,
                v: 4,
                w: -16
            },
            2: {
                u: 5,
                v: 6,
                w: -8
            },
            3: {
                u: 7,
                v: 8,
                w: -4
            },
            4: {
                u: 9,
                v: 10,
                w: -2
            },
            5: {
                u: 0,
                v: 2,
                w: 0
            },
            6: {
                u: 2,
                v: 4,
                w: 0
            },
            7: {
                u: 4,
                v: 6,
                w: 0
            },
            8: {
                u: 6,
                v: 8,
                w: 0
            },
            9: {
                u: 8,
                v: 10,
                w: 0
            },
            10: {
                u: 8,
                v: 9,
                w: 1
            },
            11: {
                u: 6,
                v: 7,
                w: 2
            },
            12: {
                u: 4,
                v: 5,
                w: 4
            },
            13: {
                u: 2,
                v: 3,
                w: 8
            },
            14: {
                u: 0,
                v: 1,
                w: 16
            }
        }
    } else if (id == DAG) {
        if (mode == VL) return {
            0: {
                x: 380,
                y: 95
            },
            1: {
                x: 500,
                y: 25
            },
            2: {
                x: 300,
                y: 225
            },
            3: {
                x: 600,
                y: 95
            },
            4: {
                x: 600,
                y: 225
            },
            5: {
                x: 700,
                y: 25
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 2,
                w: 7
            },
            2: {
                u: 1,
                v: 3,
                w: 9
            },
            3: {
                u: 1,
                v: 5,
                w: 15
            },
            4: {
                u: 2,
                v: 4,
                w: 4
            },
            5: {
                u: 3,
                v: 4,
                w: 10
            },
            6: {
                u: 3,
                v: 5,
                w: 5
            },
            7: {
                u: 4,
                v: 5,
                w: 3
            }
        }
    } else if (id == FORDFULKERSON_KILLER) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 400,
                y: 225
            },
            2: {
                x: 400,
                y: 25
            },
            3: {
                x: 500,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 8
            },
            1: {
                u: 0,
                v: 2,
                w: 8
            },
            2: {
                u: 1,
                v: 3,
                w: 8
            },
            3: {
                u: 2,
                v: 3,
                w: 8
            },
            4: {
                u: 2,
                v: 1,
                w: 1
            }
        }
    } else if (id == DINIC_SHOWCASE) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 125
            },
            1: {
                x: 500,
                y: 25
            },
            2: {
                x: 500,
                y: 75
            },
            3: {
                x: 450,
                y: 175
            },
            4: {
                x: 450,
                y: 225
            },
            5: {
                x: 450,
                y: 275
            },
            6: {
                x: 550,
                y: 175
            },
            7: {
                x: 550,
                y: 225
            },
            8: {
                x: 550,
                y: 275
            },
            9: {
                x: 700,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 9,
                w: 7
            },
            1: {
                u: 0,
                v: 1,
                w: 5
            },
            2: {
                u: 1,
                v: 9,
                w: 4
            },
            3: {
                u: 0,
                v: 2,
                w: 8
            },
            4: {
                u: 2,
                v: 9,
                w: 9
            },
            5: {
                u: 0,
                v: 3,
                w: 3
            },
            6: {
                u: 3,
                v: 6,
                w: 1
            },
            7: {
                u: 6,
                v: 9,
                w: 1
            },
            8: {
                u: 0,
                v: 4,
                w: 5
            },
            9: {
                u: 4,
                v: 7,
                w: 4
            },
            10: {
                u: 7,
                v: 9,
                w: 6
            },
            11: {
                u: 0,
                v: 5,
                w: 7
            },
            12: {
                u: 5,
                v: 8,
                w: 6
            },
            13: {
                u: 8,
                v: 9,
                w: 5
            },
            14: {
                u: 5,
                v: 7,
                w: 2
            },
            15: {
                u: 5,
                v: 6,
                w: 1
            }
        }
    } else if (id == MVC_U_TWO_APPROX_KILLER) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 125,
                w: 3
            },
            2: {
                x: 300,
                y: 225,
                w: 4
            },
            3: {
                x: 300,
                y: 325,
                w: 7
            },
            4: {
                x: 400,
                y: 25,
                w: 1
            },
            5: {
                x: 400,
                y: 125,
                w: 5
            },
            6: {
                x: 400,
                y: 225,
                w: 6
            },
            7: {
                x: 400,
                y: 325,
                w: 9
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 4,
                w: 1
            },
            1: {
                u: 1,
                v: 5,
                w: 1
            },
            2: {
                u: 2,
                v: 6,
                w: 1
            },
            3: {
                u: 3,
                v: 7,
                w: 1
            }
        }
    } else if (id == EXAMPLE_VERTEX_WEIGHTED_TREE) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 100,
                w: 9
            },
            2: {
                x: 350,
                y: 100,
                w: 9
            },
            3: {
                x: 450,
                y: 100,
                w: 9
            },
            4: {
                x: 300,
                y: 175,
                w: 1
            },
            5: {
                x: 350,
                y: 175,
                w: 1
            },
            6: {
                x: 400,
                y: 175,
                w: 1
            },
            7: {
                x: 500,
                y: 175,
                w: 1
            },
            8: {
                x: 450,
                y: 250,
                w: 3
            },
            9: {
                x: 500,
                y: 250,
                w: 2
            },
            10: {
                x: 550,
                y: 250,
                w: 4
            },
            11: {
                x: 500,
                y: 325,
                w: 5
            },
            12: {
                x: 600,
                y: 325,
                w: 1
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1
            },
            1: {
                u: 0,
                v: 2
            },
            2: {
                u: 0,
                v: 3
            },
            3: {
                u: 1,
                v: 4
            },
            4: {
                u: 2,
                v: 5
            },
            5: {
                u: 3,
                v: 6
            },
            6: {
                u: 3,
                v: 7
            },
            7: {
                u: 7,
                v: 8
            },
            8: {
                u: 7,
                v: 9
            },
            9: {
                u: 7,
                v: 10
            },
            10: {
                u: 10,
                v: 11
            },
            11: {
                u: 10,
                v: 12
            }
        }
    } else if (id == MVC_W_TWO_APPROX_KILLER) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 25,
                w: 5
            },
            1: {
                x: 300,
                y: 125,
                w: 1
            },
            2: {
                x: 350,
                y: 125,
                w: 2
            },
            3: {
                x: 400,
                y: 125,
                w: 2
            },
            4: {
                x: 450,
                y: 125,
                w: 3
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1
            },
            1: {
                u: 0,
                v: 2
            },
            2: {
                u: 0,
                v: 3
            },
            3: {
                u: 0,
                v: 4
            }
        }
    } else if (id == INTERESTING_BIPARTITE) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 125,
                w: 3
            },
            2: {
                x: 300,
                y: 225,
                w: 4
            },
            3: {
                x: 400,
                y: 25,
                w: 7
            },
            4: {
                x: 400,
                y: 125,
                w: 1
            },
            5: {
                x: 400,
                y: 225,
                w: 5
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 3,
                w: 1
            },
            1: {
                u: 0,
                v: 4,
                w: 1
            },
            2: {
                u: 2,
                v: 5,
                w: 1
            },
            3: {
                u: 1,
                v: 5,
                w: 1
            },
            4: {
                u: 0,
                v: 5,
                w: 1
            }
        }
    } else if (id == LINEAR_CHAIN) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 3
            },
            1: {
                x: 375,
                y: 25,
                w: 1
            },
            2: {
                x: 450,
                y: 25,
                w: 4
            },
            3: {
                x: 525,
                y: 25,
                w: 2
            },
            4: {
                x: 600,
                y: 25,
                w: 9
            },
            5: {
                x: 675,
                y: 25,
                w: 1
            },
            6: {
                x: 750,
                y: 25,
                w: 2
            },
            7: {
                x: 825,
                y: 25,
                w: 9
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 3
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 2,
                v: 3,
                w: 2
            },
            3: {
                u: 3,
                v: 4,
                w: 4
            },
            4: {
                u: 4,
                v: 5,
                w: 5
            },
            5: {
                u: 5,
                v: 6,
                w: 9
            },
            6: {
                u: 6,
                v: 7,
                w: 8
            }
        }
    } else if (id == CS4234_SAMPLE) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 1
            },
            1: {
                x: 400,
                y: 25,
                w: 1
            },
            2: {
                x: 500,
                y: 25,
                w: 1
            },
            3: {
                x: 600,
                y: 25,
                w: 1
            },
            4: {
                x: 400,
                y: 125,
                w: 1
            },
            5: {
                x: 500,
                y: 125,
                w: 1
            },
            6: {
                x: 600,
                y: 125,
                w: 1
            },
            7: {
                x: 600,
                y: 225,
                w: 1
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 1,
                v: 4,
                w: 1
            },
            3: {
                u: 2,
                v: 3,
                w: 1
            },
            4: {
                u: 2,
                v: 5,
                w: 1
            },
            5: {
                u: 3,
                v: 6,
                w: 1
            },
            6: {
                u: 4,
                v: 5,
                w: 1
            },
            7: {
                u: 5,
                v: 6,
                w: 1
            },
            8: {
                u: 6,
                v: 7,
                w: 1
            }
        }
    } else if (id == K8) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 25
            },
            1: {
                x: 600,
                y: 25
            },
            2: {
                x: 700,
                y: 175
            },
            3: {
                x: 700,
                y: 325
            },
            4: {
                x: 600,
                y: 475
            },
            5: {
                x: 400,
                y: 475
            },
            6: {
                x: 300,
                y: 325
            },
            7: {
                x: 300,
                y: 175
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 13
            },
            1: {
                u: 0,
                v: 2,
                w: 13
            },
            2: {
                u: 0,
                v: 3,
                w: 12
            },
            3: {
                u: 0,
                v: 4,
                w: 12
            },
            4: {
                u: 0,
                v: 5,
                w: 13
            },
            5: {
                u: 0,
                v: 6,
                w: 14
            },
            6: {
                u: 0,
                v: 7,
                w: 12
            },
            7: {
                u: 1,
                v: 2,
                w: 14
            },
            8: {
                u: 1,
                v: 3,
                w: 14
            },
            9: {
                u: 1,
                v: 4,
                w: 13
            },
            10: {
                u: 1,
                v: 5,
                w: 14
            },
            11: {
                u: 1,
                v: 6,
                w: 13
            },
            12: {
                u: 1,
                v: 7,
                w: 12
            },
            13: {
                u: 2,
                v: 3,
                w: 13
            },
            14: {
                u: 2,
                v: 4,
                w: 13
            },
            15: {
                u: 2,
                v: 5,
                w: 12
            },
            16: {
                u: 2,
                v: 6,
                w: 12
            },
            17: {
                u: 2,
                v: 7,
                w: 12
            },
            18: {
                u: 3,
                v: 4,
                w: 13
            },
            19: {
                u: 3,
                v: 5,
                w: 13
            },
            20: {
                u: 3,
                v: 6,
                w: 13
            },
            21: {
                u: 3,
                v: 7,
                w: 13
            },
            22: {
                u: 4,
                v: 5,
                w: 13
            },
            23: {
                u: 4,
                v: 6,
                w: 12
            },
            24: {
                u: 4,
                v: 7,
                w: 13
            },
            25: {
                u: 5,
                v: 6,
                w: 12
            },
            26: {
                u: 5,
                v: 7,
                w: 12
            },
            27: {
                u: 6,
                v: 7,
                w: 12
            }
        }
    } else if (id == CS4234_TUTORIAL_THREE) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 325
            },
            1: {
                x: 580,
                y: 325
            },
            2: {
                x: 580,
                y: 145
            },
            3: {
                x: 480,
                y: 85
            },
            4: {
                x: 360,
                y: 85
            },
            5: {
                x: 600,
                y: 25
            }
        };
        else if (mode == EL) return {
            0: {
                u: 1,
                v: 0,
                w: 28
            },
            1: {
                u: 2,
                v: 0,
                w: 33
            },
            2: {
                u: 3,
                v: 0,
                w: 30
            },
            3: {
                u: 4,
                v: 0,
                w: 25
            },
            4: {
                u: 0,
                v: 5,
                w: 42
            },
            5: {
                u: 2,
                v: 1,
                w: 18
            },
            6: {
                u: 3,
                v: 1,
                w: 26
            },
            7: {
                u: 4,
                v: 1,
                w: 33
            },
            8: {
                u: 5,
                v: 1,
                w: 30
            },
            9: {
                u: 3,
                v: 2,
                w: 12
            },
            10: {
                u: 4,
                v: 2,
                w: 23
            },
            11: {
                u: 5,
                v: 2,
                w: 12
            },
            12: {
                u: 4,
                v: 3,
                w: 12
            },
            13: {
                u: 5,
                v: 3,
                w: 13
            },
            14: {
                u: 5,
                v: 4,
                w: 25
            }
        }
    } else if (id == WHEEL) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 125
            },
            1: {
                x: 400,
                y: 225
            },
            2: {
                x: 300,
                y: 125
            },
            3: {
                x: 400,
                y: 25
            },
            4: {
                x: 500,
                y: 125
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 13
            },
            1: {
                u: 0,
                v: 2,
                w: 13
            },
            2: {
                u: 0,
                v: 3,
                w: 13
            },
            3: {
                u: 0,
                v: 4,
                w: 13
            },
            4: {
                u: 1,
                v: 2,
                w: 13
            },
            5: {
                u: 2,
                v: 3,
                w: 13
            },
            6: {
                u: 3,
                v: 4,
                w: 13
            },
            7: {
                u: 4,
                v: 1,
                w: 13
            }
        }
    } else if (id == K4) {
        if (mode == VL) return {
            0: {
                x: 400,
                y: 25
            },
            1: {
                x: 300,
                y: 225
            },
            2: {
                x: 500,
                y: 225
            },
            3: {
                x: 400,
                y: 165
            }
        };
        else if (mode == EL) return {
            0: {
                u: 1,
                v: 2,
                w: 25
            },
            1: {
                u: 1,
                v: 3,
                w: 13
            },
            2: {
                u: 1,
                v: 0,
                w: 25
            },
            3: {
                u: 2,
                v: 3,
                w: 13
            },
            4: {
                u: 2,
                v: 0,
                w: 25
            },
            5: {
                u: 3,
                v: 0,
                w: 13
            }
        }
    } else if (id == HOUSE_OF_CARDS) {
        if (mode == VL) return {
            0: {
                x: 450,
                y: 25
            },
            1: {
                x: 400,
                y: 105
            },
            2: {
                x: 500,
                y: 105
            },
            3: {
                x: 350,
                y: 175
            },
            4: {
                x: 450,
                y: 175
            },
            5: {
                x: 550,
                y: 175
            },
            6: {
                x: 300,
                y: 265
            },
            7: {
                x: 400,
                y: 265
            },
            8: {
                x: 500,
                y: 265
            },
            9: {
                x: 600,
                y: 265
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 3,
                w: 1
            },
            2: {
                u: 3,
                v: 6,
                w: 1
            },
            3: {
                u: 6,
                v: 7,
                w: 1
            },
            4: {
                u: 7,
                v: 8,
                w: 1
            },
            5: {
                u: 8,
                v: 9,
                w: 1
            },
            6: {
                v: 5,
                u: 9,
                w: 1
            },
            7: {
                v: 4,
                u: 5,
                w: 1
            },
            8: {
                v: 3,
                u: 4,
                w: 1
            },
            9: {
                v: 2,
                u: 4,
                w: 1
            },
            10: {
                v: 1,
                u: 2,
                w: 1
            },
            11: {
                u: 0,
                v: 2,
                w: 1
            },
            12: {
                u: 2,
                v: 5,
                w: 1
            },
            13: {
                u: 1,
                v: 4,
                w: 1
            },
            14: {
                u: 4,
                v: 7,
                w: 1
            },
            15: {
                u: 4,
                v: 8,
                w: 1
            },
            16: {
                u: 3,
                v: 7,
                w: 1
            },
            17: {
                u: 5,
                v: 8,
                w: 1
            }
        }
    } else if (id == FMOD) {
        if (mode == VL) return {
            7: {
                x: 300,
                y: 25
            },
            0: {
                x: 420,
                y: 25
            },
            1: {
                x: 540,
                y: 25
            },
            6: {
                x: 420,
                y: 125
            },
            2: {
                x: 540,
                y: 125
            },
            3: {
                x: 660,
                y: 125
            },
            4: {
                x: 540,
                y: 225
            },
            5: {
                x: 660,
                y: 225
            }
        };
        else if (mode == EL) return {
            0: {
                v: 7,
                u: 0,
                w: 1
            },
            1: {
                v: 0,
                u: 1,
                w: 1
            },
            2: {
                v: 1,
                u: 3,
                w: 1
            },
            3: {
                v: 3,
                u: 2,
                w: 1
            },
            4: {
                u: 3,
                v: 5,
                w: 1
            },
            5: {
                u: 2,
                v: 1,
                w: 1
            },
            6: {
                u: 2,
                v: 4,
                w: 1
            },
            7: {
                v: 4,
                u: 5,
                w: 1
            },
            8: {
                u: 4,
                v: 6,
                w: 1
            },
            9: {
                v: 6,
                u: 0,
                w: 1
            }
        }
    } else if (id == GREEDY_AUGMENTING_PATH_KILLER) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 75,
                w: 3
            },
            2: {
                x: 300,
                y: 125,
                w: 4
            },
            3: {
                x: 300,
                y: 175,
                w: 2
            },
            4: {
                x: 300,
                y: 225,
                w: 3
            },
            5: {
                x: 300,
                y: 275,
                w: 4
            },
            6: {
                x: 400,
                y: 25,
                w: 7
            },
            7: {
                x: 400,
                y: 75,
                w: 1
            },
            8: {
                x: 400,
                y: 125,
                w: 5
            },
            9: {
                x: 400,
                y: 175,
                w: 5
            },
            10: {
                x: 400,
                y: 225,
                w: 5
            },
            11: {
                x: 400,
                y: 275,
                w: 5
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 6,
                w: 1
            },
            1: {
                u: 0,
                v: 7,
                w: 1
            },
            2: {
                u: 1,
                v: 6,
                w: 1
            },
            3: {
                u: 2,
                v: 8,
                w: 1
            },
            4: {
                u: 2,
                v: 9,
                w: 1
            },
            5: {
                u: 3,
                v: 8,
                w: 1
            },
            6: {
                u: 4,
                v: 10,
                w: 1
            },
            7: {
                u: 4,
                v: 11,
                w: 1
            },
            8: {
                u: 5,
                v: 10,
                w: 1
            }
        }
    } else if (id == K55) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 100,
                w: 3
            },
            2: {
                x: 300,
                y: 175,
                w: 4
            },
            3: {
                x: 300,
                y: 250,
                w: 2
            },
            4: {
                x: 300,
                y: 325,
                w: 3
            },
            5: {
                x: 400,
                y: 25,
                w: 7
            },
            6: {
                x: 400,
                y: 100,
                w: 1
            },
            7: {
                x: 400,
                y: 175,
                w: 5
            },
            8: {
                x: 400,
                y: 250,
                w: 5
            },
            9: {
                x: 400,
                y: 325,
                w: 5
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 5,
                w: 1
            },
            1: {
                u: 0,
                v: 6,
                w: 1
            },
            2: {
                u: 0,
                v: 7,
                w: 1
            },
            3: {
                u: 0,
                v: 8,
                w: 1
            },
            4: {
                u: 0,
                v: 9,
                w: 1
            },
            5: {
                u: 1,
                v: 5,
                w: 1
            },
            6: {
                u: 1,
                v: 6,
                w: 1
            },
            7: {
                u: 1,
                v: 7,
                w: 1
            },
            8: {
                u: 1,
                v: 8,
                w: 1
            },
            9: {
                u: 1,
                v: 9,
                w: 1
            },
            10: {
                u: 2,
                v: 5,
                w: 1
            },
            11: {
                u: 2,
                v: 6,
                w: 1
            },
            12: {
                u: 2,
                v: 7,
                w: 1
            },
            13: {
                u: 2,
                v: 8,
                w: 1
            },
            14: {
                u: 2,
                v: 9,
                w: 1
            },
            15: {
                u: 3,
                v: 5,
                w: 1
            },
            16: {
                u: 3,
                v: 6,
                w: 1
            },
            17: {
                u: 3,
                v: 7,
                w: 1
            },
            18: {
                u: 3,
                v: 8,
                w: 1
            },
            19: {
                u: 3,
                v: 9,
                w: 1
            },
            20: {
                u: 4,
                v: 5,
                w: 1
            },
            21: {
                u: 4,
                v: 6,
                w: 1
            },
            22: {
                u: 4,
                v: 7,
                w: 1
            },
            23: {
                u: 4,
                v: 8,
                w: 1
            },
            24: {
                u: 4,
                v: 9,
                w: 1
            }
        }
    } else if (id == K55_ALMOST) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 25,
                w: 2
            },
            1: {
                x: 300,
                y: 100,
                w: 3
            },
            2: {
                x: 300,
                y: 175,
                w: 4
            },
            3: {
                x: 300,
                y: 250,
                w: 2
            },
            4: {
                x: 300,
                y: 325,
                w: 3
            },
            5: {
                x: 400,
                y: 25,
                w: 7
            },
            6: {
                x: 400,
                y: 100,
                w: 1
            },
            7: {
                x: 400,
                y: 175,
                w: 5
            },
            8: {
                x: 400,
                y: 250,
                w: 5
            },
            9: {
                x: 400,
                y: 325,
                w: 5
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 5,
                w: 1
            },
            1: {
                u: 0,
                v: 6,
                w: 1
            },
            2: {
                u: 0,
                v: 8,
                w: 1
            },
            3: {
                u: 0,
                v: 9,
                w: 1
            },
            4: {
                u: 1,
                v: 6,
                w: 1
            },
            5: {
                u: 1,
                v: 7,
                w: 1
            },
            6: {
                u: 1,
                v: 8,
                w: 1
            },
            7: {
                u: 2,
                v: 5,
                w: 1
            },
            8: {
                u: 2,
                v: 6,
                w: 1
            },
            9: {
                u: 2,
                v: 7,
                w: 1
            },
            10: {
                u: 2,
                v: 8,
                w: 1
            },
            11: {
                u: 2,
                v: 9,
                w: 1
            },
            12: {
                u: 3,
                v: 5,
                w: 1
            },
            13: {
                u: 3,
                v: 7,
                w: 1
            },
            14: {
                u: 3,
                v: 8,
                w: 1
            },
            15: {
                u: 3,
                v: 9,
                w: 1
            },
            16: {
                u: 4,
                v: 5,
                w: 1
            }
        }
    } else if (id == CP4_2_7) {
        if (mode == VL) return {
            0: {
                x: 220,
                y: 270
            },
            1: {
                x: 120,
                y: 180
            },
            2: {
                x: 320,
                y: 180
            },
            3: {
                x: 120,
                y: 90
            },
            4: {
                x: 320,
                y: 90
            },
            5: {
                x: 520,
                y: 90
            },
            6: {
                x: 520,
                y: 180
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 3,
                v: 1,
                w: 1
            },
            3: {
                u: 3,
                v: 4,
                w: 1
            },
            4: {
                u: 4,
                v: 2,
                w: 1
            },
            5: {
                u: 4,
                v: 5,
                w: 1
            },
            6: {
                u: 5,
                v: 6,
                w: 1
            },
            7: {
                u: 2,
                v: 0,
                w: 1
            }
        }
    } else if (id == CP4_4_3) {
        if (mode == VL) return {
            0: {
                x: 100,
                y: 100
            },
            1: {
                x: 210,
                y: 100
            },
            2: {
                x: 210,
                y: 210
            },
            3: {
                x: 320,
                y: 100
            },
            4: {
                x: 430,
                y: 100
            },
            5: {
                x: 540,
                y: 100
            },
            6: {
                x: 430,
                y: 210
            },
            7: {
                x: 540,
                y: 210
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 2,
                w: 1
            },
            2: {
                u: 1,
                v: 2,
                w: 1
            },
            3: {
                u: 7,
                v: 6,
                w: 1
            },
            4: {
                u: 2,
                v: 5,
                w: 1
            },
            5: {
                u: 3,
                v: 4,
                w: 1
            },
            6: {
                u: 1,
                v: 3,
                w: 1
            },
            7: {
                u: 2,
                v: 3,
                w: 1
            }
        }
    } else if (id == CP4_4_7) {
        if (mode == VL) return {
            0: {
                x: 100,
                y: 100
            },
            1: {
                x: 210,
                y: 100
            },
            2: {
                x: 210,
                y: 210
            },
            3: {
                x: 320,
                y: 100
            },
            4: {
                x: 430,
                y: 100
            },
            5: {
                x: 540,
                y: 100
            },
            6: {
                x: 430,
                y: 210
            },
            7: {
                x: 540,
                y: 210
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 3,
                w: 1
            },
            2: {
                u: 3,
                v: 2,
                w: 1
            },
            3: {
                u: 2,
                v: 1,
                w: 1
            },
            4: {
                u: 3,
                v: 4,
                w: 1
            },
            5: {
                u: 4,
                v: 5,
                w: 1
            },
            6: {
                u: 5,
                v: 7,
                w: 1
            },
            7: {
                u: 7,
                v: 6,
                w: 1
            },
            8: {
                u: 6,
                v: 4,
                w: 1
            }
        }
    } else if (id == CP4_4_8_C) {
        if (mode == VL) return {
            0: {
                x: 100,
                y: 75
            },
            1: {
                x: 100,
                y: 175
            },
            2: {
                x: 100,
                y: 275
            },
            3: {
                x: 250,
                y: 75
            },
            4: {
                x: 250,
                y: 175
            },
            5: {
                x: 250,
                y: 275
            },
            6: {
                x: 400,
                y: 75
            },
            7: {
                x: 400,
                y: 175
            },
            8: {
                x: 400,
                y: 275
            },
            9: {
                x: 550,
                y: 75
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 5,
                w: 1
            },
            1: {
                u: 0,
                v: 7,
                w: 1
            },
            2: {
                u: 1,
                v: 6,
                w: 1
            },
            3: {
                u: 1,
                v: 8,
                w: 1
            },
            4: {
                u: 2,
                v: 3,
                w: 1
            },
            5: {
                u: 2,
                v: 7,
                w: 1
            },
            6: {
                u: 3,
                v: 8,
                w: 1
            },
            7: {
                u: 4,
                v: 9,
                w: 1
            },
            8: {
                u: 5,
                v: 6,
                w: 1
            },
            9: {
                u: 8,
                v: 9,
                w: 1
            }
        }
    } else if (id == CP4_4_8_D) {
        if (mode == VL) return {
            0: {
                x: 200,
                y: 50
            },
            1: {
                x: 200,
                y: 125
            },
            2: {
                x: 400,
                y: 50
            },
            3: {
                x: 200,
                y: 200
            },
            4: {
                x: 400,
                y: 275
            },
            5: {
                x: 200,
                y: 275
            }
        };
        else if (mode == EL) return {
            0: {
                u: 1,
                v: 2,
                w: 1
            },
            1: {
                u: 1,
                v: 4,
                w: 1
            },
            2: {
                u: 2,
                v: 3,
                w: 1
            },
            3: {
                u: 2,
                v: 5,
                w: 1
            },
            4: {
                u: 3,
                v: 4,
                w: 1
            }
        }
    } else if (id == CP4_4_9) {
        if (mode == VL) return {
            0: {
                x: 220,
                y: 130
            },
            1: {
                x: 320,
                y: 30
            },
            2: {
                x: 420,
                y: 130
            },
            3: {
                x: 320,
                y: 230
            },
            4: {
                x: 220,
                y: 330
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 2,
                v: 3,
                w: 1
            },
            3: {
                u: 3,
                v: 0,
                w: 1
            },
            4: {
                u: 0,
                v: 2,
                w: 1
            },
            5: {
                u: 3,
                v: 4,
                w: 1
            },
            6: {
                u: 4,
                v: 0,
                w: 1
            }
        }
    } else if (id == CP4_4_12) {
        if (mode == VL) return {
            0: {
                x: 220,
                y: 75
            },
            1: {
                x: 420,
                y: 75
            },
            2: {
                x: 420,
                y: 275
            },
            3: {
                x: 220,
                y: 275
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 25
            },
            1: {
                u: 1,
                v: 2,
                w: 13
            },
            2: {
                u: 2,
                v: 3,
                w: 17
            },
            3: {
                u: 3,
                v: 0,
                w: 10
            }
        }
    } else if (id == CP4_4_13) {
        if (mode == VL) return {
            0: {
                x: 100,
                y: 175
            },
            1: {
                x: 200,
                y: 75
            },
            2: {
                x: 200,
                y: 275
            },
            3: {
                x: 300,
                y: 175
            },
            4: {
                x: 400,
                y: 75
            },
            5: {
                x: 400,
                y: 275
            },
            6: {
                x: 500,
                y: 175
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 50
            },
            1: {
                u: 0,
                v: 2,
                w: 60
            },
            2: {
                u: 2,
                v: 5,
                w: 50
            },
            3: {
                u: 1,
                v: 3,
                w: 120
            },
            4: {
                u: 1,
                v: 4,
                w: 90
            },
            5: {
                u: 3,
                v: 5,
                w: 80
            },
            6: {
                u: 3,
                v: 6,
                w: 70
            },
            7: {
                u: 4,
                v: 6,
                w: 40
            },
            8: {
                u: 5,
                v: 6,
                w: 140
            }
        }
    } else if (id == CP4_4_16) {
        if (mode == VL) return {
            0: {
                x: 260,
                y: 140
            },
            1: {
                x: 160,
                y: 75
            },
            2: {
                x: 290,
                y: 210
            },
            3: {
                x: 420,
                y: 75
            },
            4: {
                x: 295,
                y: 290
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 2
            },
            1: {
                u: 0,
                v: 2,
                w: 6
            },
            2: {
                u: 0,
                v: 3,
                w: 7
            },
            3: {
                u: 1,
                v: 3,
                w: 3
            },
            4: {
                u: 1,
                v: 4,
                w: 6
            },
            5: {
                u: 3,
                v: 4,
                w: 5
            },
            6: {
                u: 2,
                v: 4,
                w: 1
            }
        }
    } else if (id == CP4_4_23) {
        if (mode == VL) return {
            0: {
                x: 160,
                y: 130
            },
            1: {
                x: 320,
                y: 50
            },
            2: {
                x: 220,
                y: 290
            },
            3: {
                x: 480,
                y: 130
            },
            4: {
                x: 420,
                y: 290
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 2
            },
            1: {
                u: 0,
                v: 2,
                w: 1
            },
            2: {
                u: 0,
                v: 4,
                w: 3
            },
            3: {
                u: 1,
                v: 3,
                w: 4
            },
            4: {
                u: 2,
                v: 1,
                w: 1
            },
            5: {
                u: 2,
                v: 4,
                w: 1
            },
            6: {
                u: 3,
                v: 0,
                w: 1
            },
            7: {
                u: 3,
                v: 2,
                w: 3
            },
            8: {
                u: 3,
                v: 4,
                w: 5
            }
        }
    } else if (id == CP4_4_28_A) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 80
            },
            1: {
                x: 360,
                y: 140
            },
            2: {
                x: 360,
                y: 260
            },
            3: {
                x: 300,
                y: 200
            },
            4: {
                x: 240,
                y: 260
            },
            5: {
                x: 240,
                y: 140
            }
        };
        else if (mode == EL) return {
            0: {
                u: 5,
                v: 0,
                w: 1
            },
            1: {
                u: 0,
                v: 1,
                w: 1
            },
            2: {
                u: 3,
                v: 1,
                w: 1
            },
            3: {
                u: 3,
                v: 2,
                w: 1
            },
            4: {
                u: 3,
                v: 4,
                w: 1
            },
            5: {
                u: 4,
                v: 2,
                w: 1
            }
        }
    } else if (id == CP4_4_29) {
        if (mode == VL) return {
            0: {
                x: 170,
                y: 220
            },
            1: {
                x: 270,
                y: 100
            },
            2: {
                x: 370,
                y: 100
            },
            3: {
                x: 300,
                y: 220
            },
            4: {
                x: 430,
                y: 220
            },
            5: {
                x: 490,
                y: 100
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 3,
                w: 1
            },
            2: {
                u: 1,
                v: 2,
                w: 1
            },
            3: {
                u: 2,
                v: 4,
                w: 1
            },
            4: {
                u: 2,
                v: 5,
                w: 1
            },
            5: {
                u: 3,
                v: 4,
                w: 1
            },
            6: {
                u: 4,
                v: 5,
                w: 1
            }
        }
    } else if (id == CP4_4_36) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 80
            },
            1: {
                x: 360,
                y: 140
            },
            2: {
                x: 360,
                y: 260
            },
            3: {
                x: 300,
                y: 200
            },
            4: {
                x: 240,
                y: 260
            },
            5: {
                x: 240,
                y: 140
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 2
            },
            1: {
                u: 0,
                v: 5,
                w: 4
            },
            2: {
                u: 1,
                v: 3,
                w: 9
            },
            3: {
                u: 3,
                v: 4,
                w: 1
            },
            4: {
                u: 3,
                v: 2,
                w: 5
            }
        }
    } else if (id == CP4_8_17_B) {
        if (mode == VL) return {
            0: {
                x: 95,
                y: 180
            },
            1: {
                x: 245,
                y: 100
            },
            2: {
                x: 245,
                y: 260
            },
            3: {
                x: 395,
                y: 260
            },
            4: {
                x: 545,
                y: 180
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 100
            },
            1: {
                u: 0,
                v: 2,
                w: 50
            },
            2: {
                u: 1,
                v: 2,
                w: 50
            },
            3: {
                u: 1,
                v: 3,
                w: 50
            },
            4: {
                u: 1,
                v: 4,
                w: 50
            },
            5: {
                u: 2,
                v: 3,
                w: 100
            },
            6: {
                u: 3,
                v: 4,
                w: 75
            }
        }
    } else if (id == BIPARTITE) {
        if (mode == VL) return {
            0: {
                x: 200,
                y: 50
            },
            1: {
                x: 200,
                y: 110
            },
            2: {
                x: 200,
                y: 170
            },
            3: {
                x: 200,
                y: 230
            },
            4: {
                x: 200,
                y: 290
            },
            5: {
                x: 400,
                y: 50
            },
            6: {
                x: 400,
                y: 110
            },
            7: {
                x: 400,
                y: 170
            },
            8: {
                x: 400,
                y: 230
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 5,
                w: 1
            },
            1: {
                u: 0,
                v: 6,
                w: 1
            },
            2: {
                u: 1,
                v: 5,
                w: 1
            },
            3: {
                u: 1,
                v: 6,
                w: 1
            },
            4: {
                u: 2,
                v: 7,
                w: 1
            },
            5: {
                u: 3,
                v: 7,
                w: 1
            },
            6: {
                u: 4,
                v: 7,
                w: 1
            }
        }
    } else if (id == TREE) {
        if (mode == VL) return {
            0: {
                x: 320,
                y: 50
            },
            1: {
                x: 160,
                y: 125
            },
            2: {
                x: 70,
                y: 200
            },
            3: {
                x: 130,
                y: 200
            },
            4: {
                x: 110,
                y: 275
            },
            5: {
                x: 150,
                y: 275
            },
            6: {
                x: 190,
                y: 200
            },
            7: {
                x: 250,
                y: 200
            },
            8: {
                x: 480,
                y: 125
            },
            9: {
                x: 480,
                y: 200
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 1,
                v: 3,
                w: 1
            },
            3: {
                u: 3,
                v: 4,
                w: 1
            },
            4: {
                u: 3,
                v: 5,
                w: 1
            },
            5: {
                u: 1,
                v: 6,
                w: 1
            },
            6: {
                u: 1,
                v: 7,
                w: 1
            },
            7: {
                u: 0,
                v: 8,
                w: 1
            },
            8: {
                u: 8,
                v: 9,
                w: 1
            }
        }
    } else if (id == B_TREE) {
        if (mode == VL) return {
            0: {
                x: 320,
                y: 50
            },
            1: {
                x: 160,
                y: 125
            },
            2: {
                x: 100,
                y: 200
            },
            3: {
                x: 560,
                y: 200
            },
            4: {
                x: 200,
                y: 275
            },
            5: {
                x: 240,
                y: 275
            },
            6: {
                x: 220,
                y: 200
            },
            7: {
                x: 480,
                y: 125
            },
            8: {
                x: 400,
                y: 200
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 7,
                w: 1
            },
            2: {
                u: 1,
                v: 2,
                w: 1
            },
            3: {
                u: 1,
                v: 6,
                w: 1
            },
            4: {
                u: 6,
                v: 4,
                w: 1
            },
            5: {
                u: 6,
                v: 5,
                w: 1
            },
            6: {
                u: 7,
                v: 8,
                w: 1
            },
            7: {
                u: 7,
                v: 3,
                w: 1
            }
        }
    } else if (id == CYCLIC) {
        if (mode == VL) return {
            0: {
                x: 120,
                y: 250
            },
            1: {
                x: 320,
                y: 100
            },
            2: {
                x: 520,
                y: 250
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 2,
                v: 0,
                w: 1
            }
        }
    } else if (id == TOURNAMENT) {
        if (mode == VL) return {
            0: {
                x: 220,
                y: 75
            },
            1: {
                x: 420,
                y: 75
            },
            2: {
                x: 220,
                y: 275
            },
            3: {
                x: 420,
                y: 275
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 0,
                v: 3,
                w: 1
            },
            2: {
                u: 1,
                v: 3,
                w: 1
            },
            3: {
                u: 3,
                v: 2,
                w: 1
            },
            4: {
                u: 2,
                v: 0,
                w: 1
            },
            5: {
                u: 2,
                v: 1,
                w: 1
            }
        }
    } else if (id == SSSP) {
        if (mode == VL) return {
            0: {
                x: 120,
                y: 250
            },
            1: {
                x: 220,
                y: 100
            },
            2: {
                x: 320,
                y: 250
            },
            3: {
                x: 420,
                y: 100
            },
            4: {
                x: 520,
                y: 250
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 2
            },
            1: {
                u: 0,
                v: 2,
                w: 7
            },
            2: {
                u: 1,
                v: 2,
                w: 4
            },
            3: {
                u: 2,
                v: 3,
                w: 1
            },
            4: {
                u: 2,
                v: 4,
                w: 4
            },
            5: {
                u: 3,
                v: 4,
                w: 2
            }
        }
    } else if (id == CP4_2_7_DISJOINT) {
        if (mode == VL) return {
            0: {
                x: 220,
                y: 270
            },
            1: {
                x: 120,
                y: 180
            },
            2: {
                x: 320,
                y: 180
            },
            3: {
                x: 120,
                y: 90
            },
            4: {
                x: 320,
                y: 90
            },
            5: {
                x: 520,
                y: 90
            },
            6: {
                x: 520,
                y: 180
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 3,
                v: 1,
                w: 1
            },
            3: {
                u: 3,
                v: 4,
                w: 1
            },
            4: {
                u: 4,
                v: 2,
                w: 1
            },
            5: {
                u: 5,
                v: 6,
                w: 1
            },
            6: {
                u: 2,
                v: 0,
                w: 1
            }
        }
    } else if (id == WHEEL_DS) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 60
            },
            1: {
                x: 380,
                y: 120
            },
            2: {
                x: 340,
                y: 240
            },
            3: {
                x: 260,
                y: 240
            },
            4: {
                x: 220,
                y: 120
            }
        };
        else if (mode == EL) return {
            0: {
                u: 0,
                v: 1,
                w: 1
            },
            1: {
                u: 1,
                v: 2,
                w: 1
            },
            2: {
                u: 2,
                v: 3,
                w: 7
            },
            3: {
                u: 3,
                v: 4,
                w: 8
            },
            4: {
                u: 4,
                v: 0,
                w: 5
            }
        }
    } else if (id == STAR) {
        if (mode == VL) return {
            0: {
                x: 300,
                y: 60
            },
            1: {
                x: 380,
                y: 120
            },
            2: {
                x: 340,
                y: 240
            },
            3: {
                x: 260,
                y: 240
            },
            4: {
                x: 220,
                y: 120
            },
            5: {
                x: 300,
                y: 160
            }
        };
        else if (mode == EL) return {
            0: {
                u: 5,
                v: 0,
                w: 1
            },
            1: {
                u: 5,
                v: 1,
                w: 7
            },
            2: {
                u: 5,
                v: 2,
                w: 8
            },
            3: {
                u: 5,
                v: 3,
                w: 5
            },
            4: {
                u: 5,
                v: 4,
                w: 3
            }
        }
    }
    if (mode == VL) return {};
    if (mode == EL) return {}
}

function deepCopy(obj) {
    var newObj;
    if (obj instanceof Array) {
        var i;
        newObj = [];
        for (i = 0; i < obj.length; i++) {
            newObj.push(deepCopy(obj[i]))
        }
    } else if (obj instanceof Object) {
        newObj = {};
        for (keys in obj) {
            newObj[keys] = deepCopy(obj[keys])
        }
    } else {
        newObj = obj
    }
    return newObj
}
const MAIN_SVG_WIDTH = 1e3;
const MAIN_SVG_HEIGHT = 600;
const PSEUDOCODE_SVG_WIDTH = 300;
const PSEUDOCODE_SVG_HEIGHT = 400;
const graphVertexProperties = {
    innerVertex: {
        r: 14,
        width: 30,
        height: 30,
        "stroke-width": 0,
        default: {
            fill: "#eee",
            stroke: "#fff"
        },
        "leaf-default": {
            fill: "#ff0",
            stroke: "#fff"
        },
        lazy: {
            fill: "#eee",
            stroke: "#fff"
        },
        "leaf-lazy": {
            fill: "#ff0",
            stroke: "#fff"
        },
        normal_blue: {
            fill: "#2ebbd1",
            stroke: "#fff"
        },
        highlighted: {
            fill: "#ff8a27",
            stroke: "#fff"
        },
        highlighted_rect: {
            fill: "#ff8a27",
            stroke: "#fff"
        },
        traversed: {
            fill: "#eee",
            stroke: "#fff"
        },
        result: {
            fill: "#f7e81e",
            stroke: "#fff"
        },
        rect: {
            fill: "#eee",
            stroke: "#fff"
        },
        result_rect: {
            fill: "#52bc69",
            stroke: "#fff"
        },
        greenFill: {
            fill: "#52bc69",
            stroke: "#fff"
        },
        greenOutline: {
            fill: "#eee",
            stroke: "#fff"
        },
        pinkFill: {
            fill: "#ed5a7d",
            stroke: "#fff"
        },
        pinkOutline: {
            fill: "#eee",
            stroke: "#fff"
        },
        blueFill: {
            fill: "#2ebbd1",
            stroke: "#fff"
        },
        blueOutline: {
            fill: "#eee",
            stroke: "#fff"
        },
        redFill: {
            fill: "#d9513c",
            stroke: "#fff"
        },
        redOutline: {
            fill: "#eee",
            stroke: "#fff"
        },
        greyFill: {
            fill: "#cccccc",
            stroke: "#fff"
        },
        greyOutline: {
            fill: "#eee",
            stroke: "#fff"
        }
    },
    outerVertex: {
        r: 16,
        width: 32,
        height: 32,
        "stroke-width": 2,
        default: {
            fill: "#333",
            stroke: "#333"
        },
        "leaf-default": {
            fill: "#333",
            stroke: "#333"
        },
        lazy: {
            fill: "#8b00ff",
            stroke: "#8b00ff"
        },
        "leaf-lazy": {
            fill: "#8b00ff",
            stroke: "#8b00ff"
        },
        normal_blue: {
            fill: "#2ebbd1",
            stroke: "#333"
        },
        highlighted: {
            fill: "#ff8a27",
            stroke: "#ff8a27"
        },
        highlighted_rect: {
            fill: "#ff8a27",
            stroke: "#333"
        },
        traversed: {
            fill: "#ff8a27",
            stroke: "#ff8a27"
        },
        result: {
            fill: "#f7e81e",
            stroke: "#f7e81e"
        },
        rect: {
            fill: "#333",
            stroke: "#333"
        },
        result_rect: {
            fill: "#52bc69",
            stroke: "#333"
        },
        greenFill: {
            fill: "#52bc69",
            stroke: "#52bc69"
        },
        greenOutline: {
            fill: "#52bc69",
            stroke: "#52bc69"
        },
        pinkFill: {
            fill: "#ed5a7d",
            stroke: "#ed5a7d"
        },
        pinkOutline: {
            fill: "#ed5a7d",
            stroke: "#ed5a7d"
        },
        blueFill: {
            fill: "#2ebbd1",
            stroke: "#2ebbd1"
        },
        blueOutline: {
            fill: "#2ebbd1",
            stroke: "#2ebbd1"
        },
        redFill: {
            fill: "#d9513c",
            stroke: "#d9513c"
        },
        redOutline: {
            fill: "#d9513c",
            stroke: "#d9513c"
        },
        greyFill: {
            fill: "#cccccc",
            stroke: "#cccccc"
        },
        greyOutline: {
            fill: "#cccccc",
            stroke: "#cccccc"
        }
    },
    text: {
        "font-size": 16,
        "font-sizes": [16, 16, 15, 13, 9, 9],
        default: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        "leaf-default": {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        lazy: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        "leaf-lazy": {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        normal_blue: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        highlighted: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        highlighted_rect: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        traversed: {
            fill: "#ff8a27",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        result: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        rect: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        result_rect: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        greenFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greenOutline: {
            fill: "#52bc69",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        pinkFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        pinkOutline: {
            fill: "#ed5a7d",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        blueFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        blueOutline: {
            fill: "#2ebbd1",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        redFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        redOutline: {
            fill: "#d9513c",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greyFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greyOutline: {
            fill: "#cccccc",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        }
    },
    label: {
        "font-size": 16,
        default: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        lazy: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        normal_blue: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        highlighted: {
            fill: "#ff8a27",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        highlighted_rect: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        traversed: {
            fill: "#ff8a27",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        result: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        rect: {
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        result_rect: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "left"
        },
        greenFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greenOutline: {
            fill: "#52bc69",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        pinkFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        pinkOutline: {
            fill: "#ed5a7d",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        blueFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        blueOutline: {
            fill: "#2ebbd1",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        redFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        redOutline: {
            fill: "#d9513c",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greyFill: {
            fill: "#fff",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        greyOutline: {
            fill: "#cccccc",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        }
    }
};
const offsets = 5;
const startOffset = "75%";
const graphEdgeProperties = {
    animateHighlightedPath: {
        stroke: "#ff8a27",
        "stroke-width": 10
    },
    path: {
        "stroke-width": 3,
        default: {
            stroke: "#333"
        },
        highlighted: {
            stroke: "#ff8a27"
        },
        traversed: {
            stroke: "#ff8a27"
        },
        green: {
            stroke: "#52bc69"
        },
        pink: {
            stroke: "#ed5a7d"
        },
        blue: {
            stroke: "#2ebbd1"
        },
        red: {
            stroke: "#d9513c"
        },
        grey: {
            stroke: "#cccccc"
        }
    },
    weight: {
        "font-size": 16,
        default: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#333",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        highlighted: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#ff8a27",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        traversed: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#ff8a27",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        green: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#52bc69",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        pink: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#ed5a7d",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        blue: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#2ebbd1",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        red: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#d9513c",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        },
        grey: {
            startOffset: startOffset,
            dy: -offsets,
            fill: "#cccccc",
            "font-family": "'PT Sans', sans-serif",
            "font-weight": "bold",
            "text-anchor": "middle"
        }
    }
};
const graphPolygonProperties = {
    polygon: {
        "stroke-width": 0,
        default: {
            fill: "#eee",
            opacity: 1
        },
        hidden: {
            fill: "#fff",
            opacity: 0
        },
        greenFill: {
            fill: "#52bc69",
            opacity: 1
        },
        greenTransparent: {
            fill: "#52bc69",
            opacity: .5
        },
        pinkFill: {
            fill: "#ed5a7d",
            opacity: 1
        },
        pinkTransparent: {
            fill: "#ed5a7d",
            opacity: .5
        },
        blueFill: {
            fill: "#2ebbd1",
            opacity: 1
        },
        blueTransparent: {
            fill: "#2ebbd1",
            opacity: .5
        },
        redFill: {
            fill: "#d9513c",
            opacity: 1
        },
        redTransparent: {
            fill: "#d9513c",
            opacity: .5
        },
        greyFill: {
            fill: "#cccccc",
            opacity: 1
        },
        greyTransparent: {
            fill: "#cccccc",
            opacity: .5
        }
    }
};
const ARROW_MARKER_WIDTH = 3;
const ARROW_MARKER_HEIGHT = 3;
const ARROW_REFX = 9;
const ARROW_FILL = "#333";
var mainSvg = d3.select("#viz").append("svg").attr("width", MAIN_SVG_WIDTH).attr("height", MAIN_SVG_HEIGHT).attr("id", "maingraph");
var pseudocodeSvg = d3.select("#pseudocode").append("svg").attr("width", PSEUDOCODE_SVG_WIDTH).attr("height", PSEUDOCODE_SVG_HEIGHT);