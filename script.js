document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://finals-3n1v.onrender.com/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPersonalInfo(data.Personal_Information);
            displayAboutMe(data.About_Me);
            displaySkills(data.Skills);
            displayAchievements(data.Achievements);
            displayEducation(data.Education);
            displayInterests(data.Interests);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayPersonalInfo(info) {
    const container = document.getElementById('personalInfo');
    info.forEach(item => {
    container.innerHTML = `<h1>${item.name}</h1>
                           <li>Birth date: ${item.Birthdate}</li>
                           <li>Gender: ${item.Gender}</li>
                           <li>Contact: ${item.ContactNo}</li>
                           <li>Phone: ${item.Address}</li>
                           <li>Address: ${item.Email}</li>`;
                        })
}

function displayAboutMe(about) {
    const container = document.getElementById('aboutMe');
    about.forEach(item => {
        container.innerHTML += `<p>${item.Description}</p>`;
    });
}

function displaySkills(skills) {
    const container = document.getElementById('skills');
    // Clear existing skills content
    container.innerHTML = '';

    // Assuming that 'skills' is an array of objects each containing a SkillName array
    skills.forEach(skillGroup => {
        // Check if SkillName is indeed an array and has items
        if (Array.isArray(skillGroup.SkillName) && skillGroup.SkillName.length) {
            skillGroup.SkillName.forEach(skill => {
                // Create a new list item for each skill
                const li = document.createElement('li');
                li.textContent = skill;
                container.appendChild(li);
            });
        }
    });
}

function displayAchievements(achievements) {
    const container = document.getElementById('achievements');
    achievements.forEach(item => {
        container.innerHTML += `<p>${item.Date}: ${item.Description}</p>`;
    });
}

function displayInterests(interests) {
    const container = document.getElementById('interests');
    interests.forEach(item => {
        container.innerHTML += `<p>${item.Description}</p>`;
    });
}

function displayEducation(education) {
    const container = document.getElementById('education');
    education.forEach(item => {
        container.innerHTML += `<p>${item.Level} at ${item.School} (${item.Year})</p>`;
    });
}

function displayAttributes(attributes) {
    const container = document.getElementById('attributes');
    attributes.forEach(item => {
        container.innerHTML += `<p>${item.Attribute}: ${item.Attribute_Description}</p>`;
    });
}