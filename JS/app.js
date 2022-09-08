let toTopButton = document.getElementById('back-to-top')

let viewportWidth = window.innerWidth

window.onscroll = function () {
    onScroll()
}

function onScroll() {
    if (window.innerWidth > 425) {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            toTopButton.style.display = 'block'
        } else {
            toTopButton.style.display = 'none'
        }
    } else {
        toTopButton.style.display = 'none'
    }
}

function toTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
                                                                