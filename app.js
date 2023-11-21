(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equal-btn');
    let clear = document.querySelector('#btn-clear');
    let toggle = document.querySelector(`.btn-toggle`);
    let bkspace = document.querySelector(`.btn-bkspace`);
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function () {
        if (screen.value === ' ') {
            screen.value = ".";
        }
        else {
            let answer = eval(screen.value);
            console.log(typeof(answer));
            if(answer%1!=0)
                answer=answer.toFixed(5);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

    toggle.addEventListener('click', function () {
        screen.value *= -1;
    })

    bkspace.addEventListener('click', () => {
        const str = String(screen.value);
        const chars = str.split('');
        chars.splice(chars.length - 1, 1);
        screen.value = chars.join('');
    })

})();

