// Get the skills section and toggle button
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
//add event listener to toggle button
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    //toggle the visibility of the skills section
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
