document.addEventListener('DOMContentLoaded', function () {
    const range = document.querySelector('input');
    range.oninput = function () {
    // 变量 --pos 的值为 range 的值
    document.body.style.setProperty('--pos', range.value + '%');}
});
