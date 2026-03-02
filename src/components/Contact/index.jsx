import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.glow};
  margin-top: 28px;
  gap: 12px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 40px rgba(133, 76, 230, 0.15);
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', sans-serif;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary + "20"};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary + "20"};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  background-size: 200% 200%;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(133, 76, 230, 0.4);
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Contact</Title>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </motion.div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact
