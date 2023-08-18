const el = document.getElementById('filler'); setTimeout(() => { el.style.visibility = 'visible'; }, 5000); function loadGame() {
    var URL = document.getElementById("dropDown").value;
    openGame(URL);       
}
    function openGame(url) {
      const win = window.open('about:blank', '_blank', 'menubar=no, status=no, toolbar=no, resizable=no, width=' + window.screen.width + ', height=' + window.screen.height + ', titlebar=no, alwaysRaised=yes');
  
      win.document.write('<!DOCTYPE html><html><head><title>Coustom Craft</title></head><body style="margin: 0; padding: 0;">');
      win.document.write('<iframe id="sus" src="' + url + '" frameborder="0" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;"></iframe>');
      win.document.write('</body></html>');
      win.document.close();
    }
window.myIframe = document.getElementById("sus").contentWindow;
window.addEventListener("keydown", function(evt) { myIframe.myKeydownEventHandler(evt); });
