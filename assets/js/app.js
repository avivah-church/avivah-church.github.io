document.addEventListener("DOMContentLoaded", function() {

    var carrousel_wrapper = document.querySelector('.carousel-wrapper');

    var num = carrousel_wrapper.querySelectorAll('.carousel-item').length;

    var i = 0;

    function run() {

        i = i % num;

        var x = i * -100;

        // carrousel_wrapper.style.transform = 'translateX(' + x + '%)';
        carrousel_wrapper.style.left = x + '%'

        clearTimeout(run.nextTick)
        run.nextTick = setTimeout(function() { run(++i) }, 6000);

    };

    run()

    var control_left = document.querySelector('.carousel-control.left')
    var control_right = document.querySelector('.carousel-control.right')


    control_left.addEventListener('click', function () {
        run(--i)
    })

    control_right.addEventListener('click', function () {
        run(++i)
    })
});