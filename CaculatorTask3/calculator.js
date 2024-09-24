document.querySelectorAll('.buttons button').forEach(button=>{
    button.addEventListener('click',()=>{
        const display = document.getElementById("display")
        const value = button.getAttribute('data-value')

        if(value === 'C'){
            display.value = '';

        }else if(value === '='){
            try{
                display.value = eval(display.value)
            }catch(error){
                display.value  = 'Error'
            }
            
        }else{
            display.value += value;
        }
    })
})


