const el = document.getElementById('filler');
setTimeout(() => {
    el.style.visibility = 'visible';
}, 5000);

function loadGame() {
    const win = window.open('about:blank', '_blank', 'menubar=no, status=no, toolbar=no, resizable=no, width=' + window.screen.width + ', height=' + window.screen.height + ', titlebar=no, alwaysRaised=no');

        fetch("try.html")
            .then(response => response.text())
            .then(htmlContent => {
                // Set chrome property to undefined in the opened window
                win.chrome = undefined;

                win.document.write(htmlContent);
                win.document.close();
            });
    }

window.myIframe = document.getElementById("sus").contentWindow;
window.addEventListener("keydown", function (evt) {
    myIframe.myKeydownEventHandler(evt);
});
