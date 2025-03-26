import React, { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";
import "./App.css"

function App() {

    const htmlContent = `<!DOCTYPE html><html><head><title>貪吃蛇</title><style>
html{max-width: 750px}
body{margin:0;text-align:center;background:whitesmoke}canvas{background:white;display:block;margin:auto}
.controls{display:flex;flex-direction:column;align-items:center;margin-top:10px}
.row{display:flex}button{width:6rem;height:6rem;font-size:20px;margin:2px;background:gray;color:white;border:none}
</style></head><body><canvas id=game width=600 height=600></canvas>
<div class=controls><button id=up>up</button><div class=row>
<button id=left>left</button><button id=down>down</button><button id=right>right</button>
</div></div><script>
let c=document.getElementById("game"),ctx=c.getContext("2d"),
px=10,py=10,ax=5,ay=5,xv=0,yv=0,trail=[],tail=5;
function setDirection(x,y){xv=x;yv=y}
document.addEventListener("keydown",e=>setDirection((e.keyCode-38)%2,(e.keyCode-39)%2));
document.getElementById("up").addEventListener("touchstart",()=>setDirection(0,-1));
document.getElementById("down").addEventListener("touchstart",()=>setDirection(0,1));
document.getElementById("left").addEventListener("touchstart",()=>setDirection(-1,0));
document.getElementById("right").addEventListener("touchstart",()=>setDirection(1,0));
setInterval(()=>{
px+=xv;py+=yv;
if(px<0)px=59;if(px>59)px=0;if(py<0)py=59;if(py>59)py=0;
ctx.fillStyle="black";ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle="lime";
trail.push({x:px,y:py});
while(trail.length>tail)trail.shift();
trail.forEach((t,i)=>{
ctx.fillRect(t.x*10,t.y*10,10,10);
if(t.x==px&&t.y==py&&i<trail.length-1)tail=5;
});
ctx.fillStyle="red";
ctx.fillRect(ax*10,ay*10,10,10);
if(px==ax&&py==ay){tail++;ax=Math.floor(Math.random()*20);ay=Math.floor(Math.random()*60);}
ctx.fillStyle = "white";
ctx.font="20px Arial";
ctx.fillText("current length: " + tail, 410, 20);
},100);
</script></body></html>`;

    const encodeHTMLToDataURL = () => {
        const dataURL =  "data:text/html;base64," + btoa(unescape(encodeURIComponent(htmlContent)));
        setQrData(dataURL);
    }

    const [qrData, setQrData] = useState("");

    return (
        <div className='qrcode'>
            <h1>🎉 QR Code 貪吃蛇遊戲 🎉</h1>
            <button className="button" onClick={encodeHTMLToDataURL}>生成 QR Code</button>
            <div>
                {qrData && <QRCodeCanvas value={qrData} size={550} bgColor={"#000000"} fgColor={"#FFFFFF"} marginSize={1}/>}
            </div>
        </div>
    );
}

export default App;