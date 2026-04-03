// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the form by its ID
    const form = document.getElementById('contactForm');

    // Listen for the form submission
    form.addEventListener('submit', function(event) {
        
        // Prevent the page from reloading when the button is clicked
        event.preventDefault(); 

        // 1. Grab the values from the input fields
        const name = document.getElementById('waName').value;
        const email = document.getElementById('waEmail').value;
        const service = document.getElementById('waService').value;
        const message = document.getElementById('waMessage').value;

        // 2. Format the message clearly
        // \n creates a new line. *asterisks* make the text bold in WhatsApp.
        const whatsappText = `*New Inquiry for PSL Energies*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service}\n*Message:* ${message}`;
        
        // 3. Encode the text so the URL doesn't break
        const encodedText = encodeURIComponent(whatsappText);

        // 4. Set your WhatsApp Business Number 
        // IMPORTANT: Include country code, but NO '+' sign, spaces, or dashes
        const phoneNumber = "+919260957677"; // Replace with your actual number

        // 5. Create the final URL and open it in a new tab
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(whatsappURL, '_blank');
    });
});