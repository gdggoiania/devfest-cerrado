import React from "react";

const EmailForm: React.FC = ({}) => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="block phone">
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="name block">
        <div>
          <label htmlFor="frm-first">First name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" name="message"></textarea>
      </div>
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EmailForm;
