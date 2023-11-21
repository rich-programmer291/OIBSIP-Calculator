(function () {
    let screen = document.querySelector('.mini');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equal-btn');
    let clear = document.querySelector('.btn-clear');
    let toggle = document.querySelector(`.btn-toggle`);
    let bkspace = document.querySelector(`.btn-bkspace`);
    let ansScreen = document.querySelector('.max');
    let ans = document.querySelector('.btn-ans');
    let sqrt = document.querySelector('.btn-sqrt');
    let square = document.querySelector('.btn-square');
    let percent = document.querySelector('.btn-percent');
    let prev;

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = ".";
            ansScreen.value = 0;
        }
        else {
            let answer = eval(screen.value);
            console.log(typeof(answer));
            if(answer%1!=0)
                answer=answer.toFixed(5);
            ansScreen.value = answer;
            screen.value="";
            prev = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
        ansScreen.value = "";
        prev = "";
    })

    toggle.addEventListener('click', function () {
        if(ansScreen.value === ''){
            screen.value*=-1;
        }
        else
        ansScreen.value *= -1;
    })

    bkspace.addEventListener('click', () => {
        const str = String(screen.value);
        const chars = str.split('');
        chars.splice(chars.length - 1, 1);
        screen.value = chars.join('');
    })

    ans.addEventListener('click',()=>{
        const str = String(screen.value);
        const chars = str.split('');
        chars.push(prev);
        screen.value = chars.join('');
    })

    percent.addEventListener('click',()=>{
        let val;
        document.querySelector('.equal-btn').click;
        if(screen.value===' '){
            screen.value='.';
        }
        else{
            val = eval(screen.value);
        }
        ansScreen.value = val*0.01;
        prev = ansScreen.value;
    })

    square.addEventListener('click',()=>{
        let val;
        if(screen.value ==='' && ansScreen ===''){
            ansScreen.value = 0;
        }else{
            val = eval(screen.value);
        }
        if(screen.value ==='' && ansScreen !==''){
            val = ansScreen.value;
        }
        else if(screen.value!=='' &&  ansScreen.value!==''){
            screen.value = ansScreen.value;
            val = ansScreen.value;
        }
        if((val*val)%1!=0){
            ansScreen.value = (val*val).toFixed(5);
        }
        else
            ansScreen.value = val*val;
        prev = ansScreen.value;
    });

    sqrt.addEventListener('click',()=>{
        let val;
        if(screen.value ==='' && ansScreen===''){
            ansScreen.value = 0;
        }
        else{
            val = eval(screen.value);
    
        }
        if(screen.value==='' && ansScreen.value!=='' || (screen.value!=='' && ansScreen.value!=='')){
            screen.value = ansScreen.value;
            val = ansScreen.value;
        }
        if(Math.sqrt(val)%1!=0){
            let temp = Math.sqrt(val);
            ansScreen.value = temp.toFixed(5);
        }
        else
            ansScreen.value = Math.sqrt(val);
        prev = ansScreen.value;
    })
})();



