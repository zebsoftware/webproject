import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  });

  const handleChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://backend-16lc.onrender.com/api/payment/create-payment-intent",
        { amount: 5000 } // $50 dummy
      );

      const clientSecret = res.data.clientSecret;
      const card = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card, billing_details: { name: billingInfo.name } },
      });

      if (paymentResult.error) {
        setMessage(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setMessage("🎉 Payment Successful!");
      }
    } catch (error) {
      setMessage("Payment failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Checkout</h2>
        <div style={styles.content}>
          {/* Left Column: Billing & Shipping */}
          <form style={styles.leftColumn} onSubmit={handlePayment}>
            <h4 style={styles.sectionTitle}>Billing & Shipping</h4>
            <input
              name="name"
              placeholder="Full Name"
              value={billingInfo.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              name="city"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <div style={styles.row}>
              <input
                name="state"
                placeholder="State"
                value={billingInfo.state}
                onChange={handleChange}
                style={{ ...styles.input, flex: 1 }}
                required
              />
              <input
                name="zip"
                placeholder="ZIP"
                value={billingInfo.zip}
                onChange={handleChange}
                style={{ ...styles.input, flex: 1, marginLeft: "10px" }}
                required
              />
            </div>
            <input
              name="country"
              placeholder="Country"
              value={billingInfo.country}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <h4 style={styles.sectionTitle}>Payment Info</h4>
            <div style={styles.cardBox}>
              <CardElement options={{ hidePostalCode: true }} />
            </div>

            <button style={styles.button} disabled={!stripe || loading}>
              {loading ? "Processing..." : "Pay $50"}
            </button>

            {message && <div style={styles.message}>{message}</div>}
          </form>

          {/* Right Column: Order Summary */}
          <div style={styles.rightColumn}>
            <h4 style={styles.sectionTitle}>Order Summary</h4>
            <div style={styles.cartItem}>
              <span>Dummy Product</span>
              <span>$50.00</span>
            </div>
            <hr />
            <div style={styles.cartItem}>
              <strong>Total</strong>
              <strong>$50.00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
    padding: "20px",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#333",
  },
  content: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  leftColumn: {
    flex: "2 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  rightColumn: {
    flex: "1 1 250px",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    height: "fit-content",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "10px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  cardBox: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#fff",
  },
  button: {
    marginTop: "20px",
    padding: "14px",
    background: "#2575fc",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "6px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "10px",
  },
  message: {
    marginTop: "15px",
    color: "#4caf50",
    fontWeight: "500",
    textAlign: "center",
  },
  row: {
    display: "flex",
  },
};
