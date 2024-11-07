

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
  
      regionLink.addEventListener('click', function() {
          overlay.classList.add('show');
          popup.classList.add('show');
      });
  
      overlay.addEventListener('click', function() {
          overlay.classList.remove('show');
          popup.classList.remove('show');
      });
  
      closeButton.addEventListener('click', function() {
          overlay.classList.remove('show');
          popup.classList.remove('show');
      });
  
      regionSelect.addEventListener('change', function() {
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
  
      saveButton.addEventListener('click', function() {
          overlay.classList.remove('show');
          popup.classList.remove('show');
          regionLink.textContent = `🌐 ${regionSelect.value}`;
          alert('Settings saved!');
      });
      // region script end

      // side-bar PopUp
      const travelersSelector = document.getElementById('travelersSelector');
      const travelersPopup = document.getElementById('travelersPopup');
      const closePopup = document.getElementById('closePopup');
      const doneButton = document.getElementById('doneButton');
      const totalTravelers = document.getElementById('totalTravelers');

      // Adults counter elements
      const adultsDecrement = document.getElementById('adultsDecrement');
      const adultsIncrement = document.getElementById('adultsIncrement');
      const adultsCount = document.getElementById('adultsCount');

      // Children counter elements
      const childrenDecrement = document.getElementById('childrenDecrement');
      const childrenIncrement = document.getElementById('childrenIncrement');
      const childrenCount = document.getElementById('childrenCount');

      let adults = 0;
      let children = 0;

      // Show popup
      travelersSelector.addEventListener('click', () => {
        travelersPopup.style.display = 'block';
      });

      // Close popup
      closePopup.addEventListener('click', () => {
        travelersPopup.style.display = 'none';
      });

      // Close popup when clicking outside
      travelersPopup.addEventListener('click', (e) => {
        if (e.target === travelersPopup) {
          travelersPopup.style.display = 'none';
        }
      });

      // Adults counter
      adultsIncrement.addEventListener('click', () => {
        adults++;
        updateCounts();
      });

      adultsDecrement.addEventListener('click', () => {
        if (adults > 0) {
          adults--;
          if (adults === 0) {
            children = 0; // Reset children if adults becomes 0
          }
          updateCounts();
        }
      });

      // Children counter
      childrenIncrement.addEventListener('click', () => {
        if (adults > 0) {
          children++;
          updateCounts();
        }
      });

      childrenDecrement.addEventListener('click', () => {
        if (children > 0) {
          children--;
          updateCounts();
        }
      });

      // Done button
      doneButton.addEventListener('click', () => {
        totalTravelers.textContent = adults + children;
        travelersPopup.style.display = 'none';
      });

      function updateCounts() {
        // Update display
        adultsCount.textContent = adults;
        childrenCount.textContent = children;

        // Update buttons state
        adultsDecrement.disabled = adults === 0;
        childrenDecrement.disabled = children === 0;
        childrenIncrement.disabled = adults === 0;

        // Enable/disable children controls based on adults count
        if (adults === 0) {
          childrenIncrement.disabled = true;
          childrenDecrement.disabled = true;
          children = 0;
          childrenCount.textContent = '0';
        } else {
          childrenIncrement.disabled = false;
          childrenDecrement.disabled = children === 0;
        }
      }
      // side-bar PopUp end




    