import React from "react"
import SEO from "../components/SEO"
import styled from "styled-components"
import Button from "../components/Button/button"

const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h5);
  margin-bottom: var(--spacing);
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ContactPage = () => {
  return (
    <>
      <SEO
        title="İLETİŞİM"
        description="Gelecek projeleriniz için benimle iletişime geçin!"
      />
      <h1>İLETİŞİM</h1>
      <h4>
      <a href="mailto:info@vedatolmez.com.tr">info@vedatolmez.com.tr</a> 
      </h4>
      <Form>
        <form name="contact" netlify>
          <p>
            <FormLabel for="name">Ad Soyad</FormLabel>
            <FormInput type="text" name="name" />
          </p>
          <p>
            <FormLabel for="email">Email Adresi</FormLabel>
            <FormInput type="email" name="email" />
          </p>
          <p>
            <FormLabel for="message">Mesaj</FormLabel>
            <FormTextArea type="text" name="message" />
          </p>
          <p>
            <Button className="btn-link" text="Send Message" type="submit" />
          </p>
        </form>
      </Form>
    </>
  )
}

export default ContactPage
