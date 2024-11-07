

// heart button red start
const heartButton = document.querySelector('.fa-regular.fa-heart');

// Check if the saved state is stored in localStorage on initial load
let isSaved = localStorage.getItem('isSaved') === 'true';
updateHeartButtonState();

heartButton.addEventListener('click', () => {
    isSaved = !isSaved;
    updateHeartButtonState();
    localStorage.setItem('isSaved', isSaved);
});

function updateHeartButtonState() {
    if (isSaved) {
        heartButton.style.color = 'red';
    }
    else {
        heartButton.style.color = '#00BFFF';
    }
}

// heart button red end


// share pop start
const shareButton = document.querySelector('.fa-arrow-up-from-bracket');
const closeButton = document.querySelector('.close-btn');
const copyLinkButton = document.querySelector('.copy-link-btn');
const sharePopup = document.querySelector('.share-popup-container');

shareButton.addEventListener('click', () => {
    sharePopup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    sharePopup.style.display = 'none';
});

copyLinkButton.addEventListener('click', () => {
    // Get the link to be copied
    const linkToCopy = 'https://example.com/juneau-vacation-home';

    // Create a temporary input element to hold the link
    const tempInput = document.createElement('textarea');
    tempInput.value = linkToCopy;
    document.body.appendChild(tempInput);

    // Select and copy the link
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, you can show a success message to the user
    alert('Link copied to clipboard!');

    // Close the popup
    sharePopup.style.display = 'none';
});

// share pop end

// region pop up 
const regionLink = document.getElementById('regionLink');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
// const closeButton = document.getElementById('closeButton');
const regionSelect = document.getElementById('region');
const currencySelect = document.getElementById('currency');
const saveButton = document.getElementById('saveButton');

regionLink.addEventListener('click', function () {
    overlay.classList.add('show');
    popup.classList.add('show');
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
});

closeButton.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
});

regionSelect.addEventListener('change', function () {
    currencySelect.disabled = false;

    switch (this.value) {
        case 'Portugal':
            currencySelect.value = 'EUR';
            break;
        case 'United States':
            currencySelect.value = 'USD';
            break;
        case 'Japan':
            currencySelect.value = 'JPY';
            break;
        default:
            currencySelect.value = '';
            currencySelect.disabled = true;
    }
});

saveButton.addEventListener('click', function () {
    overlay.classList.remove('show');
    popup.classList.remove('show');
    regionLink.textContent = `🌐 ${regionSelect.value}`;
    alert('Settings saved!');
});
// region script end

// side-bar PopUp
// Initial count values
let adultCount = 0;
let childCount = 0;

// Function to open popup
function openPopup() {
    document.getElementById('sidebar-popup').style.display = 'block';
}

// Function to close popup and update traveler count
function closePopup() {
    document.getElementById('sidebar-popup').style.display = 'none';
    const totalCount = adultCount + childCount;
    document.getElementById('sidebar-traveler-count').textContent = `👤 ${totalCount} traveler${totalCount > 1 ? 's' : ''}`;
}

// Function to update count
function updateCount(type, delta) {
    if (type === 'adult') {
        adultCount = Math.max(0, adultCount + delta);
        document.getElementById('sidebar-adult-count').textContent = adultCount;
        document.getElementById('sidebar-adult-decrement').style.visibility = adultCount > 0 ? 'visible' : 'hidden';
    } else if (type === 'child') {
        childCount = Math.max(0, childCount + delta);
        document.getElementById('sidebar-child-count').textContent = childCount;
        document.getElementById('sidebar-child-decrement').style.visibility = childCount > 0 ? 'visible' : 'hidden';
    }
}

// Initialize button visibility
document.getElementById('sidebar-adult-decrement').style.visibility = 'hidden';
document.getElementById('sidebar-child-decrement').style.visibility = 'hidden';

// side-bar PopUp end




