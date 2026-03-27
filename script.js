// Dynamic Link Redirection Script

function redirectToDynamicLink() {
    const currentUrl = window.location.href;
    const dynamicLink = 'https://example.com/?ref=' + encodeURIComponent(currentUrl);
    window.location.replace(dynamicLink);
}

// Call the function on page load
window.onload = redirectToDynamicLink;