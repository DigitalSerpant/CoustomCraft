const el = document.getElementById('filler'); setTimeout(() => { el.style.visibility = 'visible'; }, 5000); function loadGame() {
    var URL = document.getElementById("dropDown").value;
    window.location.href = URL;        
}
