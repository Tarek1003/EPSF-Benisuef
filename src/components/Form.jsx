import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "78ba9a12-a4f4-4801-b930-111d2a911730");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (

<form
  method="POST"
  className="flex flex-col gap-5 text-black"
onSubmit={onSubmit}>
  <div className="flex gap-2.5">
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      className="bg-white placeholder:text-gray-400 rounded-sm p-4 max-sm:w-1/2"
      required
    />

    <input
      type="text"
      name="lastName"
      placeholder="Second name"
      className="bg-white placeholder:text-gray-400 rounded-sm p-4 max-sm:w-1/2"
      required
    />
  </div>

  <input
    type="email"
    name="email"
    placeholder="Email"
    className="bg-white placeholder:text-gray-400 rounded-sm p-4 "
    required
  />

  <textarea
    name="message"
    placeholder="Your inquiry"
    className="bg-white placeholder:text-gray-400 rounded-sm p-4 h-40 resize-none"
    required
  ></textarea>

  <button
    type="submit"
    className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-200"
  >
    Send
  </button>

</form> 


  );
}