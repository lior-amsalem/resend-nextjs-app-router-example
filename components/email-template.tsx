import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  msg: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  msg
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{msg}</p>
  </div>
);

export default EmailTemplate;
