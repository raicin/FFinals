document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://finals-3n1v.onrender.com/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPersonalInfo(data.Personal_Information);
            displayAboutMe(data.About_Me);
            displaySkills(data.Skills);
            displayAchievements(data.Achievements);
            displayInterests(data.Interests);
            displayEducation(data.Education);
            displayAttributes(data.Personal_Attributes);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayPersonalInfo(info) {
    const container = document.getElementById('personalInfo');
    info.forEach(item => {
        container.innerHTML += `<p>Name: ${item.name}</p>
                                <p>Birthdate: ${item.Birthdate}</p>
                                <p>Gender: ${item.Gender}</p>
                                <p>Contact No: ${item.ContactNo}</p>
                                <p>Address: ${item.Address}</p>
                                <p>Email: ${item.Email}</p>`;
    });
}

function displayAboutMe(about) {
    const container = document.getElementById('aboutMe');
    about.forEach(item => {
        container.innerHTML += <p>${item.Description}</p>;
    });
}

function displaySkills(skills) {
    const container = document.getElementById('skills');
    skills.forEach(item => {
        container.innerHTML += <p>Skills: ${item.SkillName.join(', ')}</p>;
    });
}

function displayAchievements(achievements) {
    const container = document.getElementById('achievements');
    achievements.forEach(item => {
        container.innerHTML += <p>${item.Date}: ${item.Description}</p>;
    });
}

function displayInterests(interests) {
    const container = document.getElementById('interests');
    interests.forEach(item => {
        container.innerHTML += <p>${item.Description}</p>;
    });
}

function displayEducation(education) {
    const container = document.getElementById('education');
    education.forEach(item => {
        container.innerHTML += <p>${item.Level} at ${item.School} (${item.Year})</p>;
    });
}

function displayAttributes(attributes) {
    const container = document.getElementById('attributes');
    attributes.forEach(item => {
        container.innerHTML += <p>${item.Attribute}: ${item.Attribute_Description}</p>;
    });
}