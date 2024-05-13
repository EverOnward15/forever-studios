
document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('spring'), {
        selector: ".gallery",
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        // ... other settings
    });
});

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('summer'), {
        selector: ".gallery",
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        // ... other settings
    });
});

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('autumn'), {
        selector: ".gallery",
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        // ... other settings
    });
});

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('winter'), {
        selector: ".gallery",
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        // ... other settings
    });
});


//Date for copyright at bottom
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

//Hide scroll to top
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var heroSectionHeight = document.querySelector('.hero').offsetHeight;
    var scrollButton = document.querySelector('.scroll-to-top');
  
    if (scrollPosition > heroSectionHeight) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  