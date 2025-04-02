import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

// Carga Stripe con tu clave pública (reemplázala con la tuya)
const stripePromise = loadStripe("TU_CLAVE_PUBLICA_STRIPE");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const amount = parseFloat(donationAmount);
    if (!amount || amount <= 0) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Enter a valid donation amount greater than $0" });
      return;
    }

    setLoading(true);

    // Enviar el monto al backend para procesar el pago
    const response = await fetch("http://localhost:5000/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }) // Convertimos a centavos
    });

    const session = await response.json();

    if (session.error) {
      Swal.fire({ icon: "error", title: "Payment Failed", text: session.error });
      setLoading(false);
      return;
    }

    // Redirigir a Stripe para completar el pago
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      Swal.fire({ icon: "error", title: "Payment Error", text: error.message });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 border rounded-lg shadow-md w-96">
      <input
        type="number"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        placeholder="Enter donation amount (USD)"
        className="w-full p-2 border rounded"
        min="1"
        required
      />
      <CardElement className="p-3 border rounded" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </form>
  );
};

const StripeCheckout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckout;