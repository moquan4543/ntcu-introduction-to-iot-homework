import React from "react";
import "./App.css"

function App() {

    return (
        <div className='qrcode'>
            <h1>🎉 QR Code 貪吃蛇遊戲 🎉</h1>
            <div className="qrcodeImg">
                <img src='/snake.png' alt="data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PHRpdGxlPuiyquWQg+ibhzwvdGl0bGU+PHN0eWxlPgpodG1se21heC13aWR0aDogNzUwcHh9CmJvZHl7bWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDp3aGl0ZXNtb2tlfWNhbnZhc3tiYWNrZ3JvdW5kOndoaXRlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG99Ci5jb250cm9sc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tdG9wOjEwcHh9Ci5yb3d7ZGlzcGxheTpmbGV4fWJ1dHRvbnt3aWR0aDo2cmVtO2hlaWdodDo2cmVtO2ZvbnQtc2l6ZToyMHB4O21hcmdpbjoycHg7YmFja2dyb3VuZDpncmF5O2NvbG9yOndoaXRlO2JvcmRlcjpub25lfQo8L3N0eWxlPjwvaGVhZD48Ym9keT48Y2FudmFzIGlkPWdhbWUgd2lkdGg9NjAwIGhlaWdodD02MDA+PC9jYW52YXM+CjxkaXYgY2xhc3M9Y29udHJvbHM+PGJ1dHRvbiBpZD11cD51cDwvYnV0dG9uPjxkaXYgY2xhc3M9cm93Pgo8YnV0dG9uIGlkPWxlZnQ+bGVmdDwvYnV0dG9uPjxidXR0b24gaWQ9ZG93bj5kb3duPC9idXR0b24+PGJ1dHRvbiBpZD1yaWdodD5yaWdodDwvYnV0dG9uPgo8L2Rpdj48L2Rpdj48c2NyaXB0PgpsZXQgYz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZ2FtZSIpLGN0eD1jLmdldENvbnRleHQoIjJkIiksCnB4PTEwLHB5PTEwLGF4PTUsYXk9NSx4dj0wLHl2PTAsdHJhaWw9W10sdGFpbD01OwpmdW5jdGlvbiBzZXREaXJlY3Rpb24oeCx5KXt4dj14O3l2PXl9CmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoImtleWRvd24iLGU9PnNldERpcmVjdGlvbigoZS5rZXlDb2RlLTM4KSUyLChlLmtleUNvZGUtMzkpJTIpKTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInVwIikuYWRkRXZlbnRMaXN0ZW5lcigidG91Y2hzdGFydCIsKCk9PnNldERpcmVjdGlvbigwLC0xKSk7CmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkb3duIikuYWRkRXZlbnRMaXN0ZW5lcigidG91Y2hzdGFydCIsKCk9PnNldERpcmVjdGlvbigwLDEpKTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImxlZnQiKS5hZGRFdmVudExpc3RlbmVyKCJ0b3VjaHN0YXJ0IiwoKT0+c2V0RGlyZWN0aW9uKC0xLDApKTsKZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInJpZ2h0IikuYWRkRXZlbnRMaXN0ZW5lcigidG91Y2hzdGFydCIsKCk9PnNldERpcmVjdGlvbigxLDApKTsKc2V0SW50ZXJ2YWwoKCk9PnsKcHgrPXh2O3B5Kz15djsKaWYocHg8MClweD01OTtpZihweD41OSlweD0wO2lmKHB5PDApcHk9NTk7aWYocHk+NTkpcHk9MDsKY3R4LmZpbGxTdHlsZT0iYmxhY2siO2N0eC5maWxsUmVjdCgwLDAsYy53aWR0aCxjLmhlaWdodCk7CmN0eC5maWxsU3R5bGU9ImxpbWUiOwp0cmFpbC5wdXNoKHt4OnB4LHk6cHl9KTsKd2hpbGUodHJhaWwubGVuZ3RoPnRhaWwpdHJhaWwuc2hpZnQoKTsKdHJhaWwuZm9yRWFjaCgodCxpKT0+ewpjdHguZmlsbFJlY3QodC54KjEwLHQueSoxMCwxMCwxMCk7CmlmKHQueD09cHgmJnQueT09cHkmJmk8dHJhaWwubGVuZ3RoLTEpdGFpbD01Owp9KTsKY3R4LmZpbGxTdHlsZT0icmVkIjsKY3R4LmZpbGxSZWN0KGF4KjEwLGF5KjEwLDEwLDEwKTsKaWYocHg9PWF4JiZweT09YXkpe3RhaWwrKztheD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApO2F5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2MCk7fQpjdHguZmlsbFN0eWxlID0gIndoaXRlIjsKY3R4LmZvbnQ9IjIwcHggQXJpYWwiOwpjdHguZmlsbFRleHQoImN1cnJlbnQgbGVuZ3RoOiAiICsgdGFpbCwgNDEwLCAyMCk7Cn0sMTAwKTsKPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4="/>
            </div>
        </div>
    );
}

export default App;