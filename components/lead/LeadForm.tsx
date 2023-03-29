import { useRouter } from "next/router";
import styles from "@styles/lead/LeadForm.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

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
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  // Destructure data
  const { name, phone, email, business, isBusinessOwner } = formData;

  // Handle change
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;

    setFormData((currState) => ({
      ...currState,
      [target.id]:
        target.id === "isBusinessOwner" ? target.checked : target.value,
    }));
  }

  // Create user
  async function createUser(e: FormEvent) {
    e.preventDefault();

    try {
      // Show loader
      setIsCreatingUser(true);

      // Make request to the backed
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      ).then((res) => res.json());

      if (response.status === "success") {
        // Push to the trucks page
        router.push("/trucks");

        // Open the truck in new tab
        window.open(localStorage.getItem("origin") as string, "_blank");

        // Remove item from local storage
        localStorage.removeItem("origin");
      }
    } catch (err) {
      console.log(err);
    } finally {
      // Remove loader
      setIsCreatingUser(false);
    }
  }

  return (
    <section className={styles.lead_form}>
      <div className={styles.header}>
        <h1>Get Pre-Approved</h1>
        <p>Rates starting from x.xx%</p>
      </div>

      <form onSubmit={createUser}>
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

        <input type="submit" value={isCreatingUser ? "Loading..." : "Submit"} />
      </form>
    </section>
  );
}
