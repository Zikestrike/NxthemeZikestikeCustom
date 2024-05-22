document.getElementById('fetch-theme').addEventListener('click', function() {
    const themeId = document.getElementById('theme-id').value;
    if (!themeId) {
        alert('Please enter a Theme ID');
        return;
    }

    fetch(`https://your-api-endpoint.com/themes?id=${themeId}`)
        .then(response => response.json())
        .then(data => {
            displayThemeInfo(data);
        })
        .catch(error => {
            console.error('Error fetching theme:', error);
            alert('Error fetching theme');
        });
});

function displayThemeInfo(data) {
    const themeInfoDiv = document.getElementById('theme-info');
    themeInfoDiv.innerHTML = '';

    if (data.themes && data.themes.length > 0) {
        data.themes.forEach(theme => {
            const themeElement = document.createElement('div');
            themeElement.innerHTML = `
                <h2>${theme.name}</h2>
                <p>Target: ${theme.target}</p>
                <a href="${theme.url}">Download Theme</a>
                <img src="${theme.preview}" alt="Theme Preview" style="width:100%;">
            `;
            themeInfoDiv.appendChild(themeElement);
        });
    } else {
        themeInfoDiv.innerHTML = 'No themes found';
    }
}
