const fetchButton = document.getElementById('fetchButon');
const resultDiv = document.getElementById('resulta');

fetchButton.addEventListener('click', fetchData);

function fetchData() {
    const characterName = document.getElementById('characters').value.trim();
    
    if (characterName) {
        fetch(`https://dattebayo-api.onrender.com/characters?name=${characterName}`)
            .then(response => response.json())
            .then(data => {
                if (data.characters && data.characters.length > 0) {
                    const character = data.characters[0];
                    
                    resultDiv.innerHTML = ''; // Clear previous results

                    // Display the character's name and image only (no birthdate or unique traits)
                    resultDiv.innerHTML = `
                        <h2>Name: ${character.name}</h2>
                        <img src="${character.images[0]}" alt="${character.name}">
                    `;
                } else {
                    resultDiv.innerHTML = 'Character not found, please try again.';
                }
            })
            .catch(error => {
                resultDiv.innerHTML = 'Error fetching data. Please try again later.';
                console.error('Error:', error);
            });
    } else {
        resultDiv.innerHTML = 'Please enter a character\'s name.';
    }
}
