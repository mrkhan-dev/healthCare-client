import {CardElement} from "@stripe/react-stripe-js";

import "../CheckoutFofm/CheckoutForm.css";
import {useEffect} from "react";
import PropTypes from "prop-types";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({test}) => {
  // const stripe = useStripe();
  // const elements = useElements();
  const axiosSecure = UseAxiosPublic();
  // const [clientSecret, setClientSecret] = useState();
  const {user} = useAuth();

  const {testName, image, price, slots, date, _id} = test;

  const handleBooking = () => {
    if (user && user.email) {
      const testInfo = {
        testId: _id,
        email: user.email,
        testName,
        image,
        price,
        slots,
        date,
      };

      axiosSecure.post("/bookings", testInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Success",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    }
  };

  // --------------------------------------

  useEffect(() => {
    if (test?.price && test?.price > 1) {
      getClientSecret({price: test?.price});
    }
  }, []);

  // get client secret
  const getClientSecret = async (price) => {
    const {data} = await axiosSecure.post(`/create-payment-intent`, price);
    console.log("clientSecret from server--->", data);
    // setClientSecret(data.clientSecret);
  };

  // const handleSubmit = async (event) => {
  //   // Block native form submission.
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js has not loaded yet. Make sure to disable
  //     // form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   // Get a reference to a mounted CardElement. Elements knows how
  //   // to find your CardElement because there can only ever be one of
  //   // each type of element.
  //   const card = elements.getElement(CardElement);

  //   if (card == null) {
  //     return;
  //   }

  //   // Use your card Element with other Stripe.js APIs
  //   const {error, paymentMethod} = await stripe.createPaymentMethod({
  //     type: "card",
  //     card,
  //   });

  //   if (error) {
  //     console.log("[error]", error);
  //   } else {
  //     console.log("[PaymentMethod]", paymentMethod);
  //   }
  // };

  return (
    <form>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            // invalid: {
            //   color: "#9e2146",
            // },
          },
        }}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={handleBooking}
          className="btn mt-6"
          type="submit"
          // disabled={!stripe || !clientSecret}
        >
          Pay ${test.price}
        </button>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </form>
  );
};

CheckoutForm.propTypes = {
  test: PropTypes.array,
};

export default CheckoutForm;
