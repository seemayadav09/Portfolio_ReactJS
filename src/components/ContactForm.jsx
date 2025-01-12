import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { H2, H3, P } from "./ui/Typography";

const ContactForm = () => {
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_TOKEN);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thank You for Contacting me :)");
    }
  };

  return (
    <div className=" md:p-2" id="contactForm" >
      <div className="min-w-[200px] w-3/4 mx-auto md:w-1/2">
        <ToastContainer />
        <div className="mt-10 -mb-5">
        <H2 text={"Get in touch😊"}/>
        </div>
        <P text={"❤️ Liked my profile? Let's Connect"} />
        
        <form onSubmit={onSubmitHandler} className="mt-5">
          <div>
            <div className="flex flex-col space-y-1 mb-4">
              <label htmlFor="email" className="font-semibold text-[18px] px-1">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                name="email"
                className="border p-2 rounded dark:bg-gray-700 dark:text-gray-200 "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="font-semibold text-[18px] px-1"
              >
                Message:
              </label>
              <textarea
                className="border p-2 rounded dark:bg-gray-700 dark:text-gray-200"
                name="message"
                id=""
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="bg-black dark:bg-slate-200 dark:text-black w-full py-2 text-white font-semibold rounded mt-4 mb-12">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
