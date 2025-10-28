import React from "react";
import ContactForm from "../components/Contactform";

const ContactPage: React.FC = () => {
  return (
   
      <div className="min-h-screen bg-black flex flex-col justify-center px-4">
         <section id="contactpage">
        <ContactForm />
        </section>
      </div>
    
  );
};

export default ContactPage;
