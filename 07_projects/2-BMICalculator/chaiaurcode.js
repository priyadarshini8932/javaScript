const form= document.querySelector('form')
//this usecase will give you empty value 
//const height= parseInt(document.querySelector('#height').value)

//form is submitted by GET or POST
//stop the default action of the form

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)

    const weight=parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.textContent=`Please give a valid height ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.textContent=`Please give a valid weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            results.innerHTML+=`<p>${bmi} is under weight</p>`;
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML+=`<p>${bmi} is normal weight</p>`;
        }
        else{
            results.innerHTML+=`<p>${bmi} is overweight</p>`;
        }
           
        
    }
})
