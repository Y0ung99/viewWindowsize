function importSize() {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let outerWidth = window.outerWidth;
    let outerHeight = window.outerHeight;
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    return Promise.resolve([screenWidth, screenHeight, outerWidth, outerHeight, innerWidth,innerHeight, clientWidth, clientHeight]);
}

function convertHTML(sizes) {
    return `
    <div>
        <span>window.screen: </span
        ><span>${sizes[0]}, ${sizes[1]}</span>
    </div>
    <div>
        <span>window.outer: </span
        ><span>${sizes[2]}, ${sizes[3]}</span>
    </div>
    <div>
        <span>window.inner: </span
        ><span>${sizes[4]}, ${sizes[5]}</span>
    </div>
    <div>
        <span
          >document.documentElemnet.client: </span
        ><span>${sizes[6]}, ${sizes[7]}</span>
    </div>
    `
}

function printSizes(sizes) {
    const sizelist = document.querySelector('.sizelist');
    sizelist.innerHTML = convertHTML(sizes);
}

function whenWindowReSized() {
    window.addEventListener('resize',() => {
        importSize()
        .then(sizes => {
        printSizes(sizes);
        })
    })
}

importSize()
.then(sizes => {
    printSizes(sizes);
    whenWindowReSized();
})


