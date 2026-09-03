"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (

  <form id="contact-form" onSubmit={handleSubmit} className="default-form2">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="your name"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input type="text" name="form_phone" id="formPhone"
                        placeholder="phone number" />
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="form-group">
                <div className="input-box">
                    <input type="text" name="form_subject" id="formSubject"
                        placeholder="Subject" />
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-12 col-lg-12">
            <div className="form-group">
                <div className="input-box">
                    <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message goes here"
                    />
                </div>
            </div>
        </div>
        <div className="col-xl-12">
            <div className="button-box">
                <input id="form_botcheck" name="form_botcheck" className="form-control"
                    type="hidden" />
                <div className="btn-box">
                    <button className="btn-one" type="submit"
                        data-loading-text="Please wait...">
                        <span className="txt">Send Your Message</span>
                        <i className="icon-right-arrow"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {status === "loading" && <p>Sending...</p>}
      {status === "success" && <p>Message sent successfully ✅</p>}
      {status === "error" && <p>Something went wrong ❌</p>}
  </form>
  );
}
