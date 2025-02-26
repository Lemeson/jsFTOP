async function loadComponent(url, containerId) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
}

// Load navbar
loadComponent('components/navbar.html', 'navbar-container');
