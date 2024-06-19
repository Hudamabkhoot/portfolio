import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../css-modules/ContactForm.module.css'; // Import your CSS module
import { motion  } from "framer-motion";
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Title from '../components/Title'

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: userId
      })
  .then(() => {
      toast.success('Message sent!');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); 
    }),
    (error) => {
      toast.error('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); 
    }

    e.target.reset();
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 10}}
    transition={{duration: 1}}
    className={styles.formContainer}>  
    <div>
        <span className={styles.contactSpan}>
          <Title />
        </span>
    </div>
    <form 
    onSubmit={sendEmail} 
    className={styles.contactForm}
    ref={form}
    >
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name" className={styles.input} />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" className={styles.input} />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" className={styles.textarea} />
      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
    <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </motion.div>
  );
};

export default Contact;
