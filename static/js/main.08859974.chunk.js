(this["webpackJsonpmy-sudoku"]=this["webpackJsonpmy-sudoku"]||[]).push([[0],{29:function(e,t,s){"use strict";s.r(t),s.d(t,"problemList",(function(){return i}));var i=["test01.json","sample01.json","sample02.json","sample03.json"]},46:function(e){e.exports=JSON.parse('{"name":"sample01","author":"ntuee-webprogramming","updateTime":"","content":[["5","3","9","1","2","7","4","6","8"],["8","1","4","5","6","3","2","7","9"],["7","2","6","4","8","9","1","3","5"],["3","4","8","2","1","6","5","9","7"],["1","9","5","3","0","4","6","8","2"],["2","6","7","9","0","8","3","1","4"],["9","7","3","6","4","5","8","2","1"],["6","5","1","8","9","2","7","4","3"],["4","8","2","7","3","1","9","5","6"]],"log":null}')},47:function(e){e.exports=JSON.parse('{"name":"sample02","author":"ntuee-webprogramming","updateTime":"","content":[["5","3","9","1","0","7","0","0","8"],["8","1","4","5","0","3","2","7","9"],["0","2","6","0","8","9","0","3","5"],["3","4","8","2","0","6","5","0","0"],["1","9","5","3","0","4","6","8","2"],["0","0","7","9","0","8","3","1","4"],["9","7","0","6","4","0","8","2","0"],["6","5","1","8","0","2","7","4","3"],["4","0","0","7","0","1","9","5","6"]],"log":null}')},48:function(e){e.exports=JSON.parse('{"name":"sample03","author":"ntuee-webprogramming","updateTime":"","content":[["5","3","0","0","7","0","0","0","0"],["6","0","0","1","9","5","0","0","0"],["0","9","8","0","0","0","0","6","0"],["8","0","0","0","6","0","0","0","3"],["4","0","0","8","0","3","0","0","1"],["7","0","0","0","2","0","0","0","6"],["0","6","0","0","0","0","2","8","0"],["0","0","0","4","1","9","0","0","5"],["0","0","0","0","8","0","0","7","9"]],"log":null}')},49:function(e){e.exports=JSON.parse('{"name":"test01","author":"ntuee-webprogramming","updateTime":"","content":[["00","01","02","03","04","05","06","07","08"],["10","11","12","13","14","15","16","17","18"],["20","21","22","23","24","25","26","27","28"],["30","31","32","33","34","35","36","37","38"],["40","41","42","43","44","45","46","47","48"],["50","51","52","53","54","55","56","57","58"],["60","61","62","63","64","65","66","67","68"],["70","71","72","73","74","75","76","77","78"],["80","81","82","83","84","85","86","87","88"]],"log":null}')},67:function(e,t,s){},68:function(e,t,s){},81:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){var i={"./":29,"./index":29,"./index.js":29,"./sample01":46,"./sample01.json":46,"./sample02":47,"./sample02.json":47,"./sample03":48,"./sample03.json":48,"./test01":49,"./test01.json":49};function r(e){var t=o(e);return s(t)}function o(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=88},89:function(e,t,s){"use strict";s.r(t);var i=s(3),r=s(0),o=s.n(r),c=s(8),l=s.n(c),n=(s(67),s.p,s(68),s(41)),a=s(43),d=s.n(a),h=s(50),f=s(34),p=s(35),u=s(40),x=s(39),_=s(51),m=s.n(_),g=s(52),b=(s(81),s(54)),j=s(121),v=s(129),w=s(128),k=s(125),O=s(127),y=s(126),G=Object(j.a)((function(e){return{headerHolder:{fontSize:"5vh",margin:"3vh",color:"#666"},title:{fontSize:"6vh"},buttonHolder:{display:"flex",justifyContent:"space-around"},formControl:{margin:e.spacing(1),minWidth:100},button:{margin:e.spacing(1),maxWidth:"30vw"}}}));function C(e){var t=G(),s=o.a.useState(""),r=Object(b.a)(s,2),c=r[0],l=r[1],n=e.problemList.map((function(e){return Object(i.jsx)(w.a,{value:e,children:e})}));return Object(i.jsxs)("div",{className:t.headerHolder,children:[Object(i.jsx)("div",{className:t.title,children:Object(i.jsx)("b",{children:"My Sudoku"})}),Object(i.jsxs)("div",{className:t.buttonHolder,children:[Object(i.jsxs)(k.a,{variant:"outlined",className:t.formControl,children:[Object(i.jsx)(v.a,{id:"demo-simple-select-outlined-label",children:"problem"}),Object(i.jsxs)(O.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c,onChange:function(t){l(t.target.value),e.loadProblem(String(t.target.value))},label:"problem",autoWidth:!0,children:[Object(i.jsx)(w.a,{value:"",children:Object(i.jsx)("em",{children:"None"})}),n]})]}),Object(i.jsx)(y.a,{className:t.button,variant:"contained",size:"small",onClick:e.handleAutoComplete,children:"Auto Complete"}),Object(i.jsx)(y.a,{className:t.button,variant:"contained",size:"small",onClick:e.handleResetGame,children:"Reset Game"})]})]})}s(87);function V(e){var t={color:e.selectedGrid.row_index===e.row_index&&e.selectedGrid.col_index===e.col_index||e.conflicted?"#FFF":e.fixed?"#666":"#6CC",backgroundColor:e.selectedGrid.row_index===e.row_index&&e.selectedGrid.col_index===e.col_index?"#333":e.conflicted?"#E77":"#FFF",borderLeft:e.col_index%3===0?"1.5px solid transparent":"1.5px solid #999",borderRight:e.col_index%3===2?"1.5px solid transparent":"1.5px solid #999",borderTop:e.row_index%3===0?"1.5px solid transparent":"1.5px solid #999",borderBottom:e.row_index%3===2?"1.5px solid transparent":"1.5px solid #999"};return Object(i.jsx)("div",{className:"grid_1x1",id:"grid-".concat(e.row_index,"*").concat(e.col_index),tabindex:"1",style:t,onClick:function(){return e.handle_grid_1x1_click(e.row_index,e.col_index)},children:"0"===e.value?"":e.value})}var S=function(e){Object(u.a)(s,e);var t=Object(x.a)(s);function s(e){var i;return Object(f.a)(this,s),(i=t.call(this,e)).checkConflicted=function(e,t,s){return void 0!==e.find((function(e){return e.row_index===t+0&&e.col_index===s+0}))},i}return Object(p.a)(s,[{key:"render",value:function(){var e={borderLeft:0===this.props.col_offset?"":"4px solid #666",borderRight:6===this.props.col_offset?"":"4px solid #666",borderTop:0===this.props.row_offset?"":"4px solid #666",borderBottom:6===this.props.row_offset?"":"4px solid #666",backgroundColor:"#999"};return Object(i.jsxs)("div",{className:"grid_9x9",style:e,children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(V,{value:this.props.value[0],fixed:"0"!==this.props.fixedValue[0],row_index:this.props.row_offset+0,col_index:this.props.col_offset+0,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+0,this.props.col_offset+0)}),Object(i.jsx)(V,{value:this.props.value[1],fixed:"0"!==this.props.fixedValue[1],row_index:this.props.row_offset+0,col_index:this.props.col_offset+1,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+0,this.props.col_offset+1)}),Object(i.jsx)(V,{value:this.props.value[2],fixed:"0"!==this.props.fixedValue[2],row_index:this.props.row_offset+0,col_index:this.props.col_offset+2,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+0,this.props.col_offset+2)})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(V,{value:this.props.value[3],fixed:"0"!==this.props.fixedValue[3],row_index:this.props.row_offset+1,col_index:this.props.col_offset+0,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+1,this.props.col_offset+0)}),Object(i.jsx)(V,{value:this.props.value[4],fixed:"0"!==this.props.fixedValue[4],row_index:this.props.row_offset+1,col_index:this.props.col_offset+1,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+1,this.props.col_offset+1)}),Object(i.jsx)(V,{value:this.props.value[5],fixed:"0"!==this.props.fixedValue[5],row_index:this.props.row_offset+1,col_index:this.props.col_offset+2,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+1,this.props.col_offset+2)})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(V,{value:this.props.value[6],fixed:"0"!==this.props.fixedValue[6],row_index:this.props.row_offset+2,col_index:this.props.col_offset+0,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+2,this.props.col_offset+0)}),Object(i.jsx)(V,{value:this.props.value[7],fixed:"0"!==this.props.fixedValue[7],row_index:this.props.row_offset+2,col_index:this.props.col_offset+1,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+2,this.props.col_offset+1)}),Object(i.jsx)(V,{value:this.props.value[8],fixed:"0"!==this.props.fixedValue[8],row_index:this.props.row_offset+2,col_index:this.props.col_offset+2,handle_grid_1x1_click:this.props.handle_grid_1x1_click,selectedGrid:this.props.selectedGrid,conflicted:this.checkConflicted(this.props.conflicts,this.props.row_offset+2,this.props.col_offset+2)})]})]})}}]),s}(r.Component),A=s(55),N=Object(j.a)((function(e){return{inputKeyboard:{display:"flex",flexDirection:"row",margin:"2vh",border:"4px solid #999"},grid:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"6vh",height:"6vh",maxWidth:"8vw",maxHeight:"8vw",border:"2px solid #999",fontSize:"min(6vh, 6vw)",color:"#666","&:hover":{backgroundColor:"#999",color:"#fff"}}}}));function F(e){var t=N(),s=Object(A.a)(Array(10).keys());return Object(i.jsx)("div",{className:t.inputKeyboard,children:s.map((function(s){return Object(i.jsx)("div",{id:"keyboard-input-".concat(s),className:t.grid,onClick:function(){return e.handleScreenKeyboardInput(s)},children:0===s?"":s})}))})}var B=s(29),I=function(e){Object(u.a)(r,e);var t=Object(x.a)(r);function r(e){var i;return Object(f.a)(this,r),(i=t.call(this,e)).handle_grid_1x1_click=function(e,t){"0"===i.state.problem.content[e][t]&&i.setState({selectedGrid:{row_index:e,col_index:t}})},i.handleKeyDownEvent=function(e){if(null!==i.state.gridValues&&-1!==i.state.selectedGrid.row_index&&-1!==i.state.selectedGrid.col_index&&(e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105||"Space"===e.code)&&"0"===i.state.problem.content[i.state.selectedGrid.row_index][i.state.selectedGrid.col_index])if(i.findConflicts(i.state.selectedGrid.row_index,i.state.selectedGrid.col_index," "===e.key?"0":e.key)){var t=i.state.gridValues;t[i.state.selectedGrid.row_index][i.state.selectedGrid.col_index]=" "===e.key?"0":e.key,i.setState({gridValues:t}),i.checkCompleted(t)&&(i.setState({completeFlag:!0}),setTimeout((function(){i.setState({completeFlag:!1})}),2500))}else i.setState({gameBoardBorderStyle:"8px solid #E77"}),setTimeout((function(){i.setState({gameBoardBorderStyle:"8px solid #333"})}),1e3)},i.handleScreenKeyboardInput=function(e){i.handleKeyDownEvent({key:String(e),keyCode:e+48})},i.findConflicts=function(e,t,s){var r=!0,o=[];if("0"===s)return!0;for(var c=0;c<9;++c){c!==e&&i.state.gridValues[c][t]===s&&(r=!1,o.push({row_index:c,col_index:t})),c!==t&&i.state.gridValues[e][c]===s&&(r=!1,o.push({row_index:e,col_index:c}));for(var l=0;l<9;++l){var n=3*Math.floor(e/3)+Math.floor(l/3),a=3*Math.floor(t/3)+l%3;n!==e&&a!==t&&i.state.gridValues[n][a]===s&&(r=!1,o.push({row_index:n,col_index:a}))}}return i.setState({conflicts:o}),setTimeout((function(){i.setState({conflicts:[]})}),1e3),r},i.checkCompleted=function(e){for(var t=0;t<e.length;++t)for(var s=0;s<e[t].length;++s)if("0"===e[t][s])return!1;return!0},i.handleResetGame=function(){null!==i.state.problem&&null!==i.state.problem&&i.setState({gridValues:i.state.problem.content})},i.handleAutoComplete=function(){if(null!==i.state.gridValues){for(var e=[],t=0;t<9;++t)for(var s=0;s<9;++s)if("0"===i.state.problem.content[t][s]){for(var r=[],o=1;o<10;++o)i.isValid(i.state.gridValues,t,s,String(o))&&r.push(String(o));e.push({tartgetIndex:{row:t,col:s},candidates:r})}0!==e.length&&i.search(0,e,i.state.gridValues)}},i.search=function(e,t,s){for(var r=[],o=0;o<s.length;o++)r[o]=s[o].slice();for(var c in t[e].candidates)if(i.isValid(r,t[e].tartgetIndex.row,t[e].tartgetIndex.col,t[e].candidates[c])){if(r[t[e].tartgetIndex.row][t[e].tartgetIndex.col]=t[e].candidates[c],e===t.length-1)return i.setState({gridValues:r}),i.checkCompleted(r)&&(i.setState({completeFlag:!0}),setTimeout((function(){i.setState({completeFlag:!1})}),2500)),!0;if(i.search(e+1,t,r))return!0}return!1},i.isValid=function(e,t,s,r){for(var o=0;o<9;++o){if(o!==t&&e[o][s]===r)return!1;if(o!==s&&e[t][o]===r)return!1;for(var c=0;c<9;++c){var l=3*Math.floor(t/3)+Math.floor(c/3),n=3*Math.floor(s/3)+c%3;if(l!==t&&n!==s&&i.state.gridValues[l][n]===r)return!1}}return!0},i.componentDidMount=function(){window.addEventListener("keydown",i.handleKeyDownEvent)},i.loadProblem=function(){var e=Object(h.a)(d.a.mark((function e(t){var r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0,problem:null,gridValues:null,selectedGrid:{row_index:-1,col_index:-1}}),e.next=3,s(88)("./".concat(t));case 3:if(void 0!==(r=e.sent).content){for(o=[],c=0;c<r.content.length;c++)o[c]=r.content[c].slice();i.setState({problem:r,gridValues:o,loading:!1})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.state={loading:!0,problem:null,gridValues:null,selectedGrid:{row_index:-1,col_index:-1},gameBoardBorderStyle:"8px solid #000",completeFlag:!1,conflicts:[{row_index:-1,col_index:-1}]},i}return Object(p.a)(r,[{key:"extractArray",value:function(e,t,s){for(var i=[],r=s;r<s+3;r++)for(var o=t;o<t+3;o++)i.push(e[r][o]);return i}},{key:"render",value:function(){var e={count:3,interval:700,canvasWidth:window.innerWidth,canvasHeight:window.innerHeight,colors:["#cc3333","#81C784"],calc:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{x:(t+1)*(window.innerWidth/3)*Math.random(),y:window.innerHeight*Math.random()})}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(C,{problemList:B.problemList,loadProblem:this.loadProblem,handleResetGame:this.handleResetGame,handleAutoComplete:this.handleAutoComplete}),this.state.loading?Object(i.jsx)(m.a,{type:"bars",color:"#777",height:"40vh",width:"40vh"}):Object(i.jsxs)("div",{id:"game-board",className:"gameBoard",style:{border:this.state.gameBoardBorderStyle},children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(S,{row_offset:0,col_offset:0,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,0,0),fixedValue:this.extractArray(this.state.problem.content,0,0),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:0,col_offset:3,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,3,0),fixedValue:this.extractArray(this.state.problem.content,3,0),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:0,col_offset:6,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,6,0),fixedValue:this.extractArray(this.state.problem.content,6,0),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(S,{row_offset:3,col_offset:0,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,0,3),fixedValue:this.extractArray(this.state.problem.content,0,3),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:3,col_offset:3,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,3,3),fixedValue:this.extractArray(this.state.problem.content,3,3),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:3,col_offset:6,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,6,3),fixedValue:this.extractArray(this.state.problem.content,6,3),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(S,{row_offset:6,col_offset:0,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,0,6),fixedValue:this.extractArray(this.state.problem.content,0,6),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:6,col_offset:3,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,3,6),fixedValue:this.extractArray(this.state.problem.content,3,6),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts}),Object(i.jsx)(S,{row_offset:6,col_offset:6,handle_grid_1x1_click:this.handle_grid_1x1_click,value:this.extractArray(this.state.gridValues,6,6),fixedValue:this.extractArray(this.state.problem.content,6,6),selectedGrid:this.state.selectedGrid,conflicts:this.state.conflicts})]})]}),this.state.completeFlag?Object(i.jsx)(g.Fireworks,Object(n.a)({},e)):null,this.state.loading?null:Object(i.jsx)(F,{handleScreenKeyboardInput:this.handleScreenKeyboardInput})]})}}]),r}(r.Component);var T=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(I,{})})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,131)).then((function(t){var s=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),i(e),r(e),o(e),c(e)}))};l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),M()}},[[89,1,2]]]);
//# sourceMappingURL=main.08859974.chunk.js.map