        // Get elements
        const image = document.getElementById('clickImage');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        const closePopup = document.getElementById('closePopup');

        // Show popup on image click
        image.onclick = function() {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }

        // Hide popup on close button click
        closePopup.onclick = function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }

        // Hide popup on overlay click
        overlay.onclick = function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }




        // Get elements
        const image2 = document.getElementById('clickImage2');
        const popup2 = document.getElementById('popup2');
        const overlay2 = document.getElementById('overlay2');
        const closePopup2 = document.getElementById('closePopup2');

        // Show popup on image click
        image2.onclick = function() {
            popup2.style.display = 'block';
            overlay2.style.display = 'block';
        }

        // Hide popup on close button click
        closePopup2.onclick = function() {
            popup2.style.display = 'none';
            overlay2.style.display = 'none';
        }

        // Hide popup on overlay click
        overlay2.onclick = function() {
            popup2.style.display = 'none';
            overlay2.style.display = 'none';
        }        
