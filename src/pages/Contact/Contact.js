import { useForm } from "react-hook-form";
import { social } from "../../containers/data";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../components/Button/Button";
import Chip from "../../components/Chip";
import Input from "../../components/Field/Input";
import Textarea from "../../components/Field/Textarea";
import "./Contact.css";

/* eslint-disable react/jsx-props-no-spreading */
function Contact() {
  const { register, formState, clearErrors } = useForm({
    mode: "onChange",
  });

  const { isValid, touchedFields, errors } = formState;

  return (
    <section className="Container" id="contact">
      <div className="Contact">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <h2>Let's get in touch</h2>
          <div className="Contact-chip-div">
            {social.map((socials) => (
              <Chip key={socials.link} link={socials.link}>
                {socials.text}
              </Chip>
            ))}
          </div>
          <p>Have any questions? You can drop me a message!</p>
          <div className="Contact-field-div">
            <Input
              label="Name"
              name="name"
              placeholder="Name"
              register={register}
              required
            />
            {errors.name && touchedFields.name && (
              <span>This field is required</span>
            )}
          </div>
          <div className="Contact-field-div">
            <Input
              label="Email"
              name="email"
              placeholder="Email"
              register={register}
              required
            />
            {errors.email && touchedFields.email && (
              <span>This field is required</span>
            )}
          </div>
          <div className="Contact-field-div">
            <Textarea
              label="Message"
              name="message"
              placeholder="Type your message here"
              register={register}
              required
            />
            {errors.message && touchedFields.message && (
              <span>This field is required</span>
            )}
          </div>
          <div className="Contact-button-div">
            <Button variant={PRIMARY} type="submit" disabled={!isValid}>
              Send
            </Button>
            <Button
              variant={SECONDARY}
              type="reset"
              onClick={() => {
                clearErrors();
              }}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
