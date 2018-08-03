var draw = SVG('drawing').size(6931, 2797);
var drawMin = SVG('drawingMin').size(1310, 932);

var editor = new Editor(SvgjsSvg1001);
var editorMin = new Editor(SvgjsSvg1008);

calculate.addEventListener( 'click', function () {
editor.clear();
editorMin.clear();
//var size = "auto";
var raznitsa = 3.779527559055; // pixel / mm

var w = document.getElementById('width').value;
var l = document.getElementById('length').value;
var h = document.getElementById('height').value;

var width = parseFloat(w) * raznitsa  - 0.153*raznitsa; //195.18
var length = parseFloat(l) * raznitsa - 0.153*raznitsa; //318.17
var height = parseFloat(h) * raznitsa - 0.153*raznitsa; //213.23
var t = 40 * raznitsa;
var mejdu = 4 * raznitsa;

console.log("width", width);
console.log("length", length);
console.log("height", height);

var alpha = ((Math.sin(15*Math.PI/180)) * raznitsa).toPrecision(3);
var betta = ((Math.sin(75*Math.PI/180)) * raznitsa).toPrecision(3);

var a = ((alpha * t / betta) * raznitsa ).toPrecision(3);
var k = height - 40 * a;

var m = 15;
var n = 15;

var strokeRed = { color: '#e31e24', width: 0.8, linecap: 'square', linejoin: 'square' };
var strokeGreen = { color: '#0f0', width: 0.8, linecap: 'square', linejoin: 'square' };


if (document.getElementById('hor').checked==true) {
var x = [
	0,
	15, /* 1 */
	m+length-4*raznitsa, /*2*/
	m+length-4*raznitsa, /*3*/
	m+length-4*raznitsa+mejdu, /*4*/
	m+length-4*raznitsa+mejdu, /*5*/
	m+length-4*raznitsa+width, /*6*/
	m+length-4*raznitsa+width, /*7*/
	m+length-4*raznitsa+width+mejdu, /*8*/
	m+length-4*raznitsa+width+mejdu, /*9*/
	m+length-4*raznitsa+width+length, /*10*/
	m+length-4*raznitsa+width+length, /*11*/
	m+length-4*raznitsa+mejdu+width+length, /*12*/
	m+length-4*raznitsa+mejdu+width+length, /*13*/
	m+length-4*raznitsa+width+length+width, /*14*/
	m+length-4*raznitsa+width+length+width, /*15*/
	m+length-4*raznitsa+width+length+width+mejdu/2, /*16*/
	m+length-4*raznitsa+width+length+width+mejdu/2+t, /*17*/
	m+length-4*raznitsa+width+length+width+mejdu/2+t, /*18*/
	m+length-4*raznitsa+width+length+width+mejdu/2, /*19*/
	m+length-4*raznitsa+width+length+width, /*20*/
	m+length-4*raznitsa+width+length+width, /*21*/
	m+length-4*raznitsa+mejdu+width+length, /*22*/
	m+length-4*raznitsa+mejdu+width+length, /*23*/
	m+length-4*raznitsa+width+length, /*24*/
	m+length-4*raznitsa+width+length, /*25*/
	m+length-4*raznitsa+width+mejdu, /*26*/
	m+length-4*raznitsa+width+mejdu, /*27*/
	m+length-4*raznitsa+width, /*28*/
	m+length-4*raznitsa+width, /*29*/
	m+length-4*raznitsa+mejdu, /*30*/
	m+length-4*raznitsa+mejdu, /*31*/
	m+length-4*raznitsa, /*32*/
	m+length-4*raznitsa, /*33*/
	m, /*34*/
	m, /*35*/
	m-2*raznitsa, /*36*/
	m-2*raznitsa, /*37*/
	m, /*38*/
	m  /*39*/
	];

var y = [
	0, /*0*/
	15, /*1*/
	n, /*2*/
	n+(width/2)+raznitsa, /*3*/
	n+(width/2)+raznitsa, /*4*/
	n, /*5*/
	n, /*6*/
	n+(width/2)+raznitsa, /*7*/
	n+(width/2)+raznitsa, /*8*/
	n, /*9*/
	n, /*10*/
	n+(width/2)+raznitsa, /*11*/
	n+(width/2)+raznitsa, /*12*/
	n, /*13*/
	n, /*14*/
	n+(width/2)+raznitsa, /*15*/
	n+(width/2)+raznitsa, /*16*/
	n+(width/2)+raznitsa+10*raznitsa, /*17*/ 
	n+(width/2)+raznitsa-10*raznitsa+height, /*18*/
	n+(width/2)+raznitsa+height, /*19*/
	n+(width/2)+raznitsa+height, /*20*/
	n+2*((width/2)+raznitsa)+height, /*21*/
	n+2*((width/2)+raznitsa)+height, /*22*/
	n+(width/2)+raznitsa+height, /*23*/
	n+(width/2)+raznitsa+height, /*24*/
	n+2*((width/2)+raznitsa)+height, /*25*/
	n+2*((width/2)+raznitsa)+height, /*26*/
	n+(width/2)+raznitsa+height, /*27*/
	n+(width/2)+raznitsa+height, /*28*/
	n+2*((width/2)+raznitsa)+height, /*29*/
	n+2*((width/2)+raznitsa)+height, /*30*/
	n+(width/2)+raznitsa+height, /*31*/
	n+(width/2)+raznitsa+height, /*32*/
	n+2*((width/2)+raznitsa)+height, /*33*/
	n+2*((width/2)+raznitsa)+height, /*34*/
	n+(width/2)+raznitsa+height, /*35*/
	n+(width/2)+raznitsa+height, /*36*/
	n+(width/2)+raznitsa, /*37*/
	n+(width/2)+raznitsa, /*38*/
	n /*39*/
	];

var polyline = draw.polyline([ 
	x[1],y[1],   x[2],y[2],   x[3],y[3],   x[4],y[4],
	x[5],y[5],   x[6],y[6],   x[7],y[7],   x[8],y[8],
	x[9],y[9],   x[10],y[10], x[11],y[11], x[12],y[12],
	x[13],y[13], x[14],y[14], x[15],y[15], x[16],y[16],
	x[17],y[17], x[18],y[18], x[19],y[19], x[20],y[20],
	x[21],y[21], x[22],y[22], x[23],y[23], x[24],y[24],
	x[25],y[25], x[26],y[26], x[27],y[27], x[28],y[28],
	x[29],y[29], x[30],y[30], x[31],y[31], x[32],y[32],
	x[33],y[33], x[34],y[34], x[35],y[35], x[36],y[36],
	x[37],y[37], x[38],y[38], x[39],y[39],
	]);

var polylineMin = drawMin.polyline([ 
	x[1]/4,y[1]/4,   x[2]/4,y[2]/4,   x[3]/4,y[3]/4,   x[4]/4,y[4]/4,
	x[5]/4,y[5]/4,   x[6]/4,y[6]/4,   x[7]/4,y[7]/4,   x[8]/4,y[8]/4,
	x[9]/4,y[9]/4,   x[10]/4,y[10]/4, x[11]/4,y[11]/4, x[12]/4,y[12]/4,
	x[13]/4,y[13]/4, x[14]/4,y[14]/4, x[15]/4,y[15]/4, x[16]/4,y[16]/4,
	x[17]/4,y[17]/4, x[18]/4,y[18]/4, x[19]/4,y[19]/4, x[20]/4,y[20]/4,
	x[21]/4,y[21]/4, x[22]/4,y[22]/4, x[23]/4,y[23]/4, x[24]/4,y[24]/4,
	x[25]/4,y[25]/4, x[26]/4,y[26]/4, x[27]/4,y[27]/4, x[28]/4,y[28]/4,
	x[29]/4,y[29]/4, x[30]/4,y[30]/4, x[31]/4,y[31]/4, x[32]/4,y[32]/4,
	x[33]/4,y[33]/4, x[34]/4,y[34]/4, x[35]/4,y[35]/4, x[36]/4,y[36]/4,
	x[37]/4,y[37]/4, x[38]/4,y[38]/4, x[39]/4,y[39]/4,
	]);

//var polylineT = draw.polyline([ x[16]+3,y[16]-5, x[17],y[17],  ]);
//var polylineU = draw.polyline([ x[19]+3,y[19]-5, x[18],y[18], x[17],y[17], ]);

//var polylineTMin = drawMin.polyline([ (x[16]+3)/4, (y[16]-5)/4, x[17]/4, y[17]/4,  ]); //min
//var polylineUMin = drawMin.polyline([ (x[19]+3)/4, (y[19]-5)/4, x[18]/4, y[18]/4, x[17]/4, y[17]/4, ]); //min

var polylineGreenTop1 = draw.polyline([ x[38]+3,y[38]-5,  x[3] +2,y[3] -5, ]);
var polylineGreenTop2 = draw.polyline([ x[4] +3,y[4] -5,  x[7] +2,y[7] -5, ]);
var polylineGreenTop3 = draw.polyline([ x[8] +3,y[8] -5,  x[11]+2,y[11]-5, ]);
var polylineGreenTop4 = draw.polyline([ x[12]+3,y[12]-5,  x[15]+2,y[15]-5, ]);

var polylineGreenTopMin1 = drawMin.polyline([ (x[38]+3)/4, y[38]/4,  x[3]/4,  y[3]/4,]);
var polylineGreenTopMin2 = drawMin.polyline([ (x[4] +3)/4, y[4]/4,   x[7]/4,  y[7]/4, ]);
var polylineGreenTopMin3 = drawMin.polyline([ (x[8] +3)/4, y[8]/4,   x[11]/4, y[11]/4, ]);
var polylineGreenTopMin4 = drawMin.polyline([ (x[12]+3)/4, y[12]/4,  x[15]/4, y[15]/4, ]);

var polylineGreenCenter1 = draw.polyline([ x[3] +10.1,y[3] -4.2, x[32]+10.1,y[32]-5.8 ]);
var polylineGreenCenter2 = draw.polyline([ x[7] +10.1,y[7] -4.2, x[28]+10.1,y[28]-5.8 ]);
var polylineGreenCenter3 = draw.polyline([ x[11]+10.1,y[11]-4.2, x[24]+10.1,y[24]-5.8 ]);
var polylineGreenCenter4 = draw.polyline([ x[16]+2.5 ,y[16]-4.2, x[19]+2.5 ,y[19]-5.8 ]);

var polylineGreenCenterMin1 = drawMin.polyline([ (x[3] +8)/4, y[3]/4,        (x[32]+10)/4, (y[32]-2)/4 ]);
var polylineGreenCenterMin2 = drawMin.polyline([ (x[7] +8)/4, y[7]/4, (x[28]+8)/4, y[28]/4 ]);
var polylineGreenCenterMin3 = drawMin.polyline([ (x[11]+8)/4, y[11]/4, (x[24]+8)/4, y[24]/4 ]);
var polylineGreenCenterMin4 = drawMin.polyline([ (x[16]+2.5)/4,(y[16]+3)/4, (x[19]+2.5)/4,(y[19]-3)/4 ]);

var polylineGreenBottom1 = draw.polyline([ x[35]+3,y[35]-5, x[32]+3,y[32]-5 ]);
var polylineGreenBottom2 = draw.polyline([ x[31]+3,y[31]-5, x[28]+3,y[28]-5 ]);
var polylineGreenBottom3 = draw.polyline([ x[27]+3,y[27]-5, x[24]+3,y[24]-5 ]);
var polylineGreenBottom4 = draw.polyline([ x[23]+3,y[23]-5, x[20]+3,y[20]-5 ]);

var polylineGreenBottomMin1 = drawMin.polyline([ (x[35]+2)/4,(y[35])/4,  x[32]/4,y[32]/4 ]);
var polylineGreenBottomMin2 = drawMin.polyline([ (x[31]+2)/4,(y[31])/4,  x[28]/4,y[28]/4 ]);
var polylineGreenBottomMin3 = drawMin.polyline([ (x[27]+2)/4,(y[27])/4,  x[24]/4,y[24]/4 ]);
var polylineGreenBottomMin4 = drawMin.polyline([ (x[23]+2)/4,(y[23])/4,  x[20]/4,y[20]/4 ]);

polyline.fill('none').move(10, 10);
//polylineT.fill('none');
//polylineU.fill('none');

polylineMin.fill('none');
//polylineTMin.fill('none');
//polylineUMin.fill('none');

polyline.stroke(strokeRed);
//polylineT.stroke(strokeRed);
//polylineU.stroke(strokeRed);

polylineMin.stroke(strokeRed);
//polylineTMin.stroke(strokeRed);
//polylineUMin.stroke(strokeRed);

polylineGreenTop1.fill('none');
polylineGreenTop2.fill('none');

polylineGreenTopMin1.fill('none');
polylineGreenTopMin2.fill('none');

polylineGreenTop1.stroke(strokeGreen);
polylineGreenTop2.stroke(strokeGreen);
polylineGreenTop3.stroke(strokeGreen);
polylineGreenTop4.stroke(strokeGreen);

polylineGreenTopMin1.stroke(strokeGreen);
polylineGreenTopMin2.stroke(strokeGreen);
polylineGreenTopMin3.stroke(strokeGreen);
polylineGreenTopMin4.stroke(strokeGreen);

polylineGreenCenter1.stroke(strokeGreen);
polylineGreenCenter2.stroke(strokeGreen);
polylineGreenCenter3.stroke(strokeGreen);
polylineGreenCenter4.stroke(strokeGreen);

polylineGreenCenterMin1.stroke(strokeGreen);
polylineGreenCenterMin2.stroke(strokeGreen);
polylineGreenCenterMin3.stroke(strokeGreen);
polylineGreenCenterMin4.stroke(strokeGreen);

polylineGreenBottom1.stroke(strokeGreen);
polylineGreenBottom2.stroke(strokeGreen);
polylineGreenBottom3.stroke(strokeGreen);
polylineGreenBottom4.stroke(strokeGreen);

polylineGreenBottomMin1.stroke(strokeGreen);
polylineGreenBottomMin2.stroke(strokeGreen);
polylineGreenBottomMin3.stroke(strokeGreen);
polylineGreenBottomMin4.stroke(strokeGreen);
} //end of IF (Hor)

if (document.getElementById('ver').checked==true ) {
var x = [0, /* 0 */
		 15, /* 1 */
		 m+width/2+raznitsa, /* 2 */
		 m+width/2+raznitsa, /* 3 */
		 m+width/2+raznitsa + height, /* 4 */
		 m+width/2+raznitsa + height, /* 5 */
		 m+width/2+raznitsa + height + width/2+raznitsa, /* 6 */
		 m+width/2+raznitsa + height + width/2+raznitsa, /* 7 */
		 m+width/2+raznitsa + height, /* 8 */
		 m+width/2+raznitsa + height, /* 9 */
		 m+width/2+raznitsa + height + width/2+raznitsa, /* 10 */
		 m+width/2+raznitsa + height + width/2+raznitsa, /* 11 */
		 m+width/2+raznitsa + height, /* 12 */
		 m+width/2+raznitsa + height, /* 13 */
		 m+width/2+raznitsa + height - 10*raznitsa, /* 14 */
		 m+width/2+raznitsa + 10*raznitsa, /* 15 */
		 m+width/2+raznitsa, /* 16 */
		 m+width/2+raznitsa, /* 17 */
		 m, /* 18 */
		 m, /* 19 */
		 m+width/2+raznitsa, /* 20 */
		 m+width/2+raznitsa, /* 21 */
		 m, /* 22 */
		 m, /* 23 */
		];

var y = [0, /* 0 */
		 15, /* 1 */
		 n, /* 2 */
		 n-2*raznitsa, /* 3 */
		 n-2*raznitsa, /* 4 */
		 n, /* 5 */
		 n, /* 6 */
		 n + length - mejdu/2, /* 7 */
		 n + length - mejdu/2, /* 8 */
		 n + length + mejdu/2, /* 9 */
		 n + length + mejdu/2, /* 10 */
		 n + length + mejdu/2 + width - mejdu, /* 11 */
		 n + length + mejdu/2 + width - mejdu, /* 12 */
		 n + length + mejdu/2 + width - mejdu + 2*raznitsa, /* 13 */
		 n + length + mejdu/2 + width - mejdu + 2*raznitsa + 40*raznitsa, /* 14 */
		 n + length + mejdu/2 + width - mejdu + 2*raznitsa + 40*raznitsa, /* 15 */
		 n + length + mejdu/2 + width - mejdu + 2*raznitsa, /* 16 */
		 n + length + mejdu/2 + width - mejdu, /* 17 */
		 n + length + mejdu/2 + width - mejdu, /* 18 */
		 n + length + mejdu/2, /* 19 */
		 n + length + mejdu/2, /* 20 */
		 n + length - mejdu/2, /* 21 */
		 n + length - mejdu/2, /* 22 */
		 n, /* 23 */
		];

var trs = 2*(width/2+3*raznitsa)+height-mejdu;

var polyline1;
var polylineMin, polylineMin1;
var polylineGreenLeft1, polylineGreenLeft11;
var polylineGreenLeft2, polylineGreenLeft21;
var polylineGreenCenter1, polylineGreenCenter11;
var polylineGreenCenter2, polylineGreenCenter21;
var polylineGreenRight1, polylineGreenRight11;
var polylineGreenRight2, polylineGreenRight21;

var poly = [polyline, polyline1];
var polyGreenLeft1 = [polylineGreenLeft1, polylineGreenLeft11];
var polyGreenLeft2 = [polylineGreenLeft2, polylineGreenLeft21];
var polyGreenCenter1 = [polylineGreenCenter1, polylineGreenCenter11];
var polyGreenCenter2 = [polylineGreenCenter2, polylineGreenCenter21];
var polyGreenRight1 = [polylineGreenRight1, polylineGreenRight11];
var polyGreenRight2 = [polylineGreenRight2, polylineGreenRight21];

for (var i=0; i<=1; i++) {
	poly[i] = draw.polyline([
		x[1]+i*trs,y[1],   x[2]+i*trs,y[2],   x[3]+i*trs,y[3],   x[4]+i*trs,y[4],   x[5]+i*trs,y[5],
		x[6]+i*trs,y[6],   x[7]+i*trs,y[7],   x[8]+i*trs,y[8],   x[9]+i*trs,y[9],   x[10]+i*trs,y[10],
		x[11]+i*trs,y[11], x[12]+i*trs,y[12], x[13]+i*trs,y[13], x[14]+i*trs,y[14], x[15]+i*trs,y[15],
		x[16]+i*trs,y[16], x[17]+i*trs,y[17], x[18]+i*trs,y[18], x[19]+i*trs,y[19], x[20]+i*trs,y[20],
		x[21]+i*trs,y[21], x[22]+i*trs,y[22], x[23]+i*trs,y[23],
	]);

	poly[i].fill('none').move(15+i*trs,15);
	poly[i].stroke(strokeRed);

	polyGreenLeft1[i] = draw.polyline([
		x[2]+i*trs,y[2]+2*raznitsa+0.8, x[21]+i*trs,y[21]+2*raznitsa-0.8,
	]);

	polyGreenLeft1[i].stroke(strokeGreen).fill('none');

	polyGreenLeft2[i] = draw.polyline([
		x[20]+i*trs,y[20]+2*raznitsa, x[17]+i*trs,y[17]+2*raznitsa,
	]);

	polyGreenLeft2[i].stroke(strokeGreen).fill('none');

	polyGreenCenter1[i] = draw.polyline([
		(x[21]+0.8)+i*trs,y[21]+4*raznitsa, (x[8]-0.8)+i*trs,y[8]+4*raznitsa,
	]);

	polyGreenCenter1[i].stroke(strokeGreen).fill('none');

	polyGreenCenter2[i] = draw.polyline([
		(x[16]+0.8)+i*trs,y[16]+2*raznitsa, (x[13]-0.8)+i*trs,y[13]+2*raznitsa,
	]);

	polyGreenCenter2[i].stroke(strokeGreen).fill('none');

	polyGreenRight1[i] = draw.polyline([
		x[5]+i*trs,y[5]+2*raznitsa+0.8, x[8]+i*trs,y[8]+2*raznitsa-0.8,
	]);

	polyGreenRight1[i].stroke(strokeGreen).fill('none');

	polyGreenRight2[i] = draw.polyline([
		x[9]+i*trs,y[9]+2*raznitsa, x[12]+i*trs,y[12]+2*raznitsa,
	]);

	polyGreenRight2[i].stroke(strokeGreen).fill('none');
} //end of FOR
	
	//RIGHT Second	
	var trsMin = (2*(width/2+3*raznitsa)+height-mejdu)/4;
	
	var polylineMin, polylineMin1;
	var polylineGreenLeftMin1, polylineGreenLeftMin11;
	var polylineGreenLeftMin2, polylineGreenLeftMin21;
	var polylineGreenCenterMin1, polylineGreenCenterMin11;
	var polylineGreenCenterMin2, polylineGreenCenterMin21;
	var polylineGreenRightMin1, polylineGreenRightMin11;
	var polylineGreenRightMin2, polylineGreenRightMin21;

	var polyMin = [polylineMin, polylineMin1];
	var polyGreenLeftMin1 = [polylineGreenLeftMin1, polylineGreenLeftMin11];
	var polyGreenLeftMin2 = [polylineGreenLeftMin2, polylineGreenLeftMin21];
	var polyGreenCenterMin1 = [polylineGreenCenterMin1, polylineGreenCenterMin11];
	var polyGreenCenterMin2 = [polylineGreenCenterMin2, polylineGreenCenterMin21];
	var polyGreenRightMin1 = [polylineGreenRightMin1, polylineGreenRightMin11];
	var polyGreenRightMin2 = [polylineGreenRightMin2, polylineGreenRightMin21];

for (var i=0; i<=1; i++) {
	polyMin[i] = drawMin.polyline([
		x[1]/4+i*trsMin,y[1]/4,   x[2]/4+i*trsMin,y[2]/4,   x[3]/4+i*trsMin,y[3]/4,   x[4]/4+i*trsMin,y[4]/4,   x[5]/4+i*trsMin,y[5]/4,
		x[6]/4+i*trsMin,y[6]/4,   x[7]/4+i*trsMin,y[7]/4,   x[8]/4+i*trsMin,y[8]/4,   x[9]/4+i*trsMin,y[9]/4,   x[10]/4+i*trsMin,y[10]/4,
		x[11]/4+i*trsMin,y[11]/4, x[12]/4+i*trsMin,y[12]/4, x[13]/4+i*trsMin,y[13]/4, x[14]/4+i*trsMin,y[14]/4, x[15]/4+i*trsMin,y[15]/4,
		x[16]/4+i*trsMin,y[16]/4, x[17]/4+i*trsMin,y[17]/4, x[18]/4+i*trsMin,y[18]/4, x[19]/4+i*trsMin,y[19]/4, x[20]/4+i*trsMin,y[20]/4,
		x[21]/4+i*trsMin,y[21]/4, x[22]/4+i*trsMin,y[22]/4, x[23]/4+i*trsMin,y[23]/4,
	]);

	polyMin[i].fill('none');
	polyMin[i].stroke(strokeRed);

	polyGreenLeftMin1[i] = drawMin.polyline([
		x[2]/4+i*trsMin,(y[2]+raznitsa)/4, x[21]/4+i*trsMin, (y[21]-raznitsa)/4,
	]);

	polyGreenLeftMin1[i].stroke(strokeGreen).fill('none');

	polyGreenLeftMin2[i] = drawMin.polyline([
		x[20]/4+i*trsMin, (y[20]+raznitsa)/4,  x[17]/4+i*trsMin, (y[17]-raznitsa)/4,
	]);

	polyGreenLeftMin2[i].stroke(strokeGreen).fill('none');

	polyGreenCenterMin1[i] = drawMin.polyline([
		(x[21]+raznitsa)/4+i*trsMin, (y[21]+2*raznitsa)/4,  (x[8]-raznitsa)/4+i*trsMin, (y[8]+2*raznitsa)/4,
	]);

	polyGreenCenterMin1[i].stroke(strokeGreen).fill('none');

	polyGreenCenterMin2[i] = drawMin.polyline([
		(x[16]+raznitsa)/4+i*trsMin, (y[16]+2*raznitsa)/4,  (x[13]-raznitsa)/4+i*trsMin, (y[13]+2*raznitsa)/4,
	]);

	polyGreenCenterMin2[i].stroke(strokeGreen).fill('none');

	polyGreenRightMin1[i] = drawMin.polyline([
		x[5]/4+i*trsMin, (y[5]+raznitsa)/4,  x[8]/4+i*trsMin, (y[8]-raznitsa)/4,
	]);

	polyGreenRightMin1[i].stroke(strokeGreen).fill('none');

	polyGreenRightMin2[i] = drawMin.polyline([
		x[9]/4+i*trsMin, (y[9]+raznitsa)/4,  x[12]/4+i*trsMin, (y[12]-raznitsa)/4,
	]);

	polyGreenRightMin2[i].stroke(strokeGreen).fill('none');
} //end of FOR

}


//var strokeRed = { color: '#e31e24', width: 0.8, linecap: 'square', linejoin: 'square' };
//var strokeGreen = { color: '#0f0', width: 0.8, linecap: 'square', linejoin: 'square' };

//polyline.stroke(strokeRed);

console.log("x", x);
console.log("y", y);


	//var editor = new Editor(SvgjsSvg1006);

//}
});

	// SAVE//
	var link = document.createElement( 'a' );
	link.style.display = 'none';
	document.body.appendChild( link );

	save.addEventListener( 'click', function () {
		var date = new Date();

		var blob = new Blob( [ editor.toString() ], { type: 'text/plain' } );

		link.href = URL.createObjectURL( blob );
		link.download = title.value + "-" + date.getFullYear() + (date.getMonth()+1) + date.getDate()+ date.getHours() + date.getMinutes() + date.getSeconds() + '.svg';
		link.click();

	} );

	// CLEAR

	clear.addEventListener( 'click', function () {
			editor.clear();
			editorMin.clear();
		} );

