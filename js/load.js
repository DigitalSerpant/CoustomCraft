const el = document.getElementById('filler'); setTimeout(() => { el.style.visibility = 'visible'; }, 5000); function loadGame() {
    var URL = document.getElementById("dropDown").value;
    openGame(URL);       
}
function openGame(url) {
  const win = window.open('about:blank', '_blank', 'menubar=no, status=no, toolbar=no, resizable=no, width=' + window.screen.width + ', height=' + window.screen.height + ', titlebar=no, alwaysRaised=yes');

if(url==="3"){
  fetch(url)
    .then(response => response.text())
    .then(htmlContent => {
      win.document.write(htmlContent);
      win.document.close();
    });
}
    else{
  fetch("try.html")
    .then(response => response.text())
    .then(htmlContent => {
      win.document.write(htmlContent);
      win.document.close();
    });
    }

}

window.myIframe = document.getElementById("sus").contentWindow;
window.addEventListener("keydown", function(evt) { myIframe.myKeydownEventHandler(evt); });
