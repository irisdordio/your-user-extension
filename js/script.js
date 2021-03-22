$(document).mousemove(function (e) {
    $(".follow").css({
        left: e.pageX,
        top: e.pageY
    });
});

document.querySelector('.button-cam').addEventListener('click', async (e) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });
        document.querySelector('video').srcObject = stream;
    } catch (e) {
        console.error(e);
    }
});