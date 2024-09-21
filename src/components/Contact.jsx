import React from 'react';

const Contact = () => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h2>Contact Me</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your email" required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;