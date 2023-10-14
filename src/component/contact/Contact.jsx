import { MdEmail } from "react-icons/md";
import "./Contact.css";
import Lottie from "lottie-react";
import animatiomJson from "../../assets/animation/Animation - 1697153926208.json";
import { useForm, ValidationError } from "@formspree/react";
import done from "../../assets/animation/done.json";
import { useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgklpy");
  const [input, setValue] = useState("");
  const [msg, setMsg] = useState("");
  const handleClick = (e) => {
    setMsg("");
    setValue("");
  };
  return (
    <section id="contact">
      <h1 className="title">
        <MdEmail className="icon-contact" />
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex" style={{ alignItems: "center" }}>
            <label htmlFor="email">Email Address :</label>
            <input
              value={input}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email ..."
              onChange={(e) => setValue(e.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div
            className="textarea flex"
            style={{ marginTop: "25px", alignItems: "center" }}
          >
            <label htmlFor="message">Your message :</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
              name="message"
              id="message"
              placeholder="Enter Message ..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button disabled={state.submitting} className="submit">
            {state.submitting ? "submitting" : "submit"}
          </button>
          <button
            style={{ width: "80px", margin: "1rem" }}
            className="submit"
            onClick={handleClick}
          >
            Reset
          </button>
          {state.succeeded && (
            <p
              style={{
                color: "var(--title)",
                marginTop: ".5rem",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Lottie
                className="imgAnimation"
                style={{ height: 80, marginRight: "-1rem" }}
                animationData={done}
              />
              The message was sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie style={{ height: 450 }} animationData={animatiomJson} />
        </div>
      </div>
    </section>
  );
};
