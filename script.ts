// Get the skills section and toggle button


const toggleButton = document.getElementById('toggle-skills');
const skills = document.getElementById('skills') as HTMLElement

//add event listener to toggle button
 toggleButton?.addEventListener('click',() =>{
    //toggle the visibility of the skills section
    if(skills.style.display === 'none'){
        skills.style.display ='block'

    }else{
        skills.style.display ='none'
    }
    
});

