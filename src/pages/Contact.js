import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div class="container">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>Contact Us/Prayer Request</h2>
            <form
              action="https://formsubmit.co/tholoim247@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="Name"
                class="field"
                placeholder="Your Name*"
                required
              />
              <input
                type="text"
                name="Email"
                class="field"
                placeholder="Your Email*"
                required
              />
              <textarea
                name="Message"
                placeholder="Message*"
                class="field"
                required
              ></textarea>
              <input
                className="btn"
                type="submit"
                name=""
                value="Send Message!"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
