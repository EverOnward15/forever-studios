// document.addEventListener('DOMContentLoaded', async function() {
//     const response = await fetch('./netlify/functions/getLicenseKey');
//     const data = await response.json();
//     const licenseKey = data.licenseKey;
// });
// console.log(licenseKey);


document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('spring'), {
        selector: ".gallery",
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        fullScreen: true, 
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

//Disable scroll snap for upward scrolling
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let st = window.scrollY || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Scrolling down
            document.documentElement.style.scrollSnapType = 'y mandatory';
            document.body.style.scrollSnapType = 'y mandatory';
        } else {
            // Scrolling up
            document.documentElement.style.scrollSnapType = 'none';
            document.body.style.scrollSnapType = 'none';
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
});

  
