import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();
    
    emailjs.sendForm("gmail","template_fRCur5FY",e.target,"user_Ct2DbQDg2mRrehGJQuMeB").then(
      result => { console.log(result.text)},
      error => { console.log(error.text)}
    );
      
    document.querySelectorAll('input')[0].value = "";
    document.querySelectorAll('input')[1].value = "";
    document.querySelectorAll('textarea')[0].value = "";
  };

  return (
    <main>
      <div id="contact">
        <h1>Contact me</h1>
        <p>
          Feel free to get in touch with me, drop me a message or just say hi!
          I'm always open to discussing new projects, creative ideas or new
          opportunities.
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required/>
          <input type="email" name="user_email" placeholder="Mail" required/>
          <textarea name="message" placeholder="Message" required/>
          <input type="submit" value="Send" />
        </form>
      </div>
    </main>
  );
};

export default Contact;
