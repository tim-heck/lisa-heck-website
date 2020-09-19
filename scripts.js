window.onscroll = function () { changeArrowFunction() };

function changeArrowFunction() {
    let scrollbarPos = window.pageYOffset;
    const arrow = document.getElementById('arrow');
    if (scrollbarPos < 7640) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'block'
    }

    if (scrollbarPos < 12500) {
        arrow.href = '#calabrio';
    } else if (scrollbarPos < 20690) {
        arrow.href = '#bsc';
    } else if (scrollbarPos < 28390) {
        arrow.href = '#csi';
    } else if (scrollbarPos < 31610) {
        arrow.href = '#timberlandpartners';
    } else if (scrollbarPos < 37230) {
        arrow.href = '#medica';
    } else {
        arrow.href = '#abbott';
    }
}