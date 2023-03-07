import styles from "@styles/lead/LeadForm.module.css";
import { ChangeEvent, useState } from "react";

export default function LeadForm() {
  // Initial state
  const initialState = {
    name: "",
    phone: "",
    email: "",
    business: "",
    isBusinessOwner: false,
  };

  // Hooks
  const [formData, setFormData] = useState(initialState);

  const { name, phone, email, business, isBusinessOwner } = formData;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;

    setFormData((currState) => ({
      ...currState,
      [target.id]:
        target.id === "isBusinessOwner" ? target.checked : target.value,
    }));
  }

  console.log(formData);

  return (
    <section className={styles.lead_form}>
      <div className={styles.header}>
        <h1>Get Pre-Approved</h1>
        <p>Rates starting from x.xx%</p>
      </div>

      <form>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          id="phone"
          type="text"
          value={phone}
          placeholder="Contact number"
          onChange={handleChange}
        />
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <div className={styles.is_business_owner}>
          <p>Are you a business owner?</p>

          <div className={styles.checkbox}>
            <label htmlFor="isBusinessOwner">Yes</label>
            <input
              type="checkbox"
              id="isBusinessOwner"
              checked={isBusinessOwner}
              onChange={handleChange}
            />
          </div>
        </div>
        {isBusinessOwner && (
          <input
            id="business"
            type="text"
            value={business}
            placeholder="Business name"
            onChange={handleChange}
          />
        )}
      </form>

      <button>Create Account</button>
    </section>
  );
}
