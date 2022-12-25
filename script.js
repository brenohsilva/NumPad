var inp = document.querySelector("input");
        var btn = document.querySelectorAll(".r > div");
        btn.forEach(val=>{
            val.addEventListener("click",()=>{
                inp.value += val.innerText
                if (val.innerText == 'C'){
                    inp.value = ''
                }
            })
        })