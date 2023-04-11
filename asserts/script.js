const allConternaires = document.querySelectorAll('.all-conternaire');
const isInViewport = function (element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
allConternaires.forEach(function (element) {
    window.addEventListener('scroll', function () {
        console.log(isInViewport(element));
        if (isInViewport(element)) {
            element.classList.add("beforeline");
            // console.log('pol');
        }
    });
});