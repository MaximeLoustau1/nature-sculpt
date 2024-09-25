import React from 'react';
import '../styles/Contact.scss';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ language }) {
    const [state, handleSubmit] = useForm("xblrvvka");

    if (state.succeeded) {
        return (
            <section className="contact-section thank-you-page">
                <p className="thank-you-message">
                    {language === 'EN' ? 'Thank you for trusting us!' : 'Merci de votre confiance!'}
                </p>
            </section>
        );
    }

    return (
        <section className="contact-section">
            <h1 className="contact-title">
                {language === 'EN' ? 'CONTACT US' : 'CONTACTEZ NOUS'}
            </h1>
            <div className="contact-form div-contact">
                <form
                    className="contact-form"
                    action="https://formspree.io/f/xblrvvka"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="form-email-textbox">
                        <p>{language === 'EN' ? 'Email' : 'Email'}</p>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-message-texbox">
                        <p>{language === 'EN' ? 'Message' : 'Message'}</p>
                        <textarea
                            className="message-area"
                            id="message"
                            name="message"
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-submit-button">
                        <button type="submit" disabled={state.submitting}>
                            {language === 'EN' ? 'SUBMIT' : 'ENVOYER'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
