'use client'
import { useState } from "react";

export default function EmailForm() {
  const [subject, setSubject] = useState<string>();
  const [msg,setMsg] = useState<string>();
  const [toEmail,setToEmail] = useState<string>();
  const [isSubmittedSucessfully, setIsSubmittedSucessfully] = useState<boolean>(false);

  const handleSubmit = () => {
    const emailValues = {
      subject,
      msg,
      toEmail
    };

    const options = {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailValues),
    };

    fetch(`/api/send`, options)
    .then((response) => {
        if (response.ok) {
          setIsSubmittedSucessfully(true);
          return response.json().then((data) => console.log(data));
        }
        throw new Error("Api is not available");
    })
    .catch((error) => {
        setIsSubmittedSucessfully(false);
        console.error("Error fetching data: ", error);
    });
        
  }

  const handleSubject = (e:React.ChangeEvent<HTMLInputElement>) => {
    const subject = e.currentTarget.value;
    setSubject(subject);
  }

  const handleMsg = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const msg = e.currentTarget.value;
    setMsg(msg);
  }

  const handleToEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    const toEmail = e.currentTarget.value;
    setToEmail(toEmail.toString());
  }

  return <form>

    {isSubmittedSucessfully && <div>Success! Email Sent!<br /></div>}

    <b>Subject:</b><br />
    <input type="text" onChange={handleSubject} value={subject} /><br />
    <b>To(Email):</b><br />
    <input type="text" onChange={handleToEmail} value={toEmail} /><br />
    <b>Msg:</b><br />
    <textarea onChange={handleMsg}>{msg}</textarea><br />

    <input type="button" value="Submit" onClick={handleSubmit} />
  </form>
}