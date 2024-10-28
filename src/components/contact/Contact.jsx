import './contact.css';
import phone from "../../icons/icon-phone.png";
import email from "../../icons/email.png";
import local from "../../icons/icon-local.png";


const Contact = () => {

    function validateForm() {
        const nameInput = document.getElementById("nameID");
        const emailInput = document.getElementById("emailID");
        const addressInput = document.getElementById("addressID");

        nameInput.classList.remove('error');
        nameInput.style.border = "1px solid #ccc";

        emailInput.classList.remove('error');
        emailInput.style.border = "1px solid #ccc";

        addressInput.classList.remove('error');
        addressInput.style.border = "1px solid #ccc";


        if (!nameInput.value) {
            nameInput.style.border = "2px solid red";
            nameInput.style.color = "black";
            nameInput.classList.add('error');
        }
        if (!emailInput.value) {
            emailInput.style.border = "2px solid red";
            emailInput.style.color = "black";
            emailInput.classList.add('error');
        }
        if (!addressInput.value) {
            addressInput.style.border = "2px solid red";
            addressInput.style.color = "black";
            addressInput.classList.add('error');
        }

    }


    return (
        <main className="contact-page" id="contact">

            <div className="left">

                <div className="contact-top">
                    Contacts
                </div>

                <div className="svg-contact">  <svg width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke=" #88cdf4" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>

                <div className="contact-details company-info">
                    <div className="contact-text">LLC "IZICODE"</div>
                </div>

                <div className="contact-details tax-info">
                    <div className="contact-text">Taxpayer ID Number: 193640844</div>
                </div>

                <div className="contact-details">
                    <div className="contact-image">
                        <a className='contact-phone-link' href="tel:375-29-620-40-99">
                            <img src={phone} alt="phone-icon" />
                        </a>
                    </div>
                    <a href="tel:375-29-620-40-99" className="contact-text">+375296204099</a>
                </div>

                <div className="contact-details">
                    <div className="contact-image">
                        <a   href="mailto:gena.bondarev@gmail.com">
                            <img src={email} alt="email-sign" />
                        </a>
                    </div>
                    <a href="mailto:gena.bondarev@gmail.com " className="contact-text">gena.bondarev@gmail.com</a>
                </div>

                <div className="contact-details">
                    <div className="contact-image">
                        <img src={local} alt="icon-local" />
                    </div>
                    <div className="contact-text">Republic of Belarus, Minsk Region,</div>
                </div>

                <div className="contact-details address-line">
                    <div className="contact-text">Minsk, Melezha str., 1, office 413</div>
                </div>

            </div>

            <div className="right">
                <div className="form-title">
                Submit your request
                </div>

                <form action="https://formspree.io/f/mnnakjrz"
                    method="POST">
                    <div className="form">

                        <div>
                            <input name="name" type="text" id="nameID" placeholder="Name" className="form-info personal-info name-info" />
                            <input name="email" type="email" id="emailID" placeholder="Email" className="form-info personal-info" />
                        </div>
                        <input name="address" type="text" id="addressID" placeholder="Address" className="form-info" />
                        <input name="info" type="text" className="form-info service-info" />

                        <button className="send" onClick={validateForm}>SEND</button>

                    </div>
                </form>
            </div>

        </main>

    )
}

export default Contact;