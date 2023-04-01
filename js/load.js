const el = document.getElementById('filler'); setTimeout(() => { el.style.visibility = 'visible'; }, 5000); function loadGame() {
    var URL = document.getElementById("dropDown").value; var baseHTML = '<div>' +
        '<iframe style="border: solid 1px orange" width="100%" height="100%" allow="clipboard-read; clipboard-write" id="game" src="' + URL + '" scrolling="no"></iframe></div>'; document.getElementById("filler").innerHTML = baseHTML;
}