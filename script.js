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

  
// Function to enable pass-through scrolling for all elements
function enablePassThroughScrollForAll() {
    document.querySelectorAll('*').forEach(el => {
        el.style.scrollSnapStop = 'normal';
    });
}

// Function to restore scroll snap behavior for all elements
function restoreScrollSnapForAll() {
    document.querySelectorAll('*').forEach(el => {
        el.style.scrollSnapStop = 'always';
    });
}

// Event listener for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        // Enable pass-through scrolling for all elements during navigation
        enablePassThroughScrollForAll();

        // Restore scroll snap behavior for all elements after a short delay (adjust as needed)
        setTimeout(restoreScrollSnapForAll, 500); // 500 milliseconds delay
    });
});

// Event listener for scroll behavior
window.addEventListener('scroll', () => {
    // Restore scroll snap behavior for all elements when the user starts scrolling again
    restoreScrollSnapForAll();
});
