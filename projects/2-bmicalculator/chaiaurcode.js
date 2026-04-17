const form=document.querySelector('form');
//some will try to select the height and weight here itself but this usecase will give you an empty result because the selection will be based on the time of execution and at that time the input fields will be empty so we have to select them inside the event listener function
//for eg. const height=parseInt(document.querySelector(#height).value)

form.addEventListener('submit',function(e){
    e.preventDefault();//to prevent the default behaviour of form submission which is to refresh the page
    const height=parseInt(document.querySelector('#height').value);//this will give the value in string format so we have to convert it to number using parseInt
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    
    if(height==='' || height<=0 ||isNaN(height)){
        results.innerHTML=`Please enter a valid height of ${height}`;
    }
    else if(weight==='' || weight<=0 ||isNaN(weight)){
        results.innerHTML=`Please enter a valid weight of ${weight}`;
    }
    else{
        const bmi=(weight/(height/100)**2).toFixed(2);
        
        results.innerHTML=`<span>${bmi}</span>`
    }
})
    