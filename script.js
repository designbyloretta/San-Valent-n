const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", function () {
});


    const btn1 = document.querySelector('#btn1');

    btn1.addEventListener("mousemove", function () {
        const randomX = parseInt(Math.random()*1000);
        const randomY = parseInt(Math.random()*1000);
        btn1.style.setProperty('top',randomY+'%');
        btn1.style.setProperty('left',randomX+'%');
        btn1.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
    })
