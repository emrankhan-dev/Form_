// javaScript 

const consentForm = document.getElementById('consent-form')
const message = document.getElementById('message')

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    setTimeout(() => {
        consentForm.style.display = 'none'
        message.style.display = 'block'
        message.innerHTML = 
            `
            <div class="inner-text">
                <div>
                    <h1>Thank you!</h1>
                    <p>We've receievd your application.</p>
                </div>
            </div>
            `
    }, 1000);
})