const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');
const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

nameInput.addEventListener('input',function(){
    nameDisplay.textContent = nameInput.value || "not provided"
})
jobInput.addEventListener('input',function(){
    jobDisplay.textContent = jobInput.value || "not provided"
})

ageInput.addEventListener('input',function(){
    ageDisplay.textContent = ageInput.value || "not provided"
})

bioInput.addEventListener('input',function(){
    bioDisplay.textContent = bioInput.value || "not provided"
})
