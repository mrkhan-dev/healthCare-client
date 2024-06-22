import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutFofm/CheckoutForm";
import PropTypes from "prop-types";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const TestBooking = ({test}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        disabled={test.slots === 0}
        className="btn text-lg ml-20 lg:ml-0 font-semibold px-5 bg-[#00F515] text-[#112A46] font-Lora"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">PAYMENT</h3>
          <Elements stripe={stripePromise}>
            {/* checkout form */}
            <CheckoutForm test={test} />
          </Elements>
        </div>
      </dialog>
    </div>
  );
};

TestBooking.propTypes = {
  test: PropTypes.array,
};

export default TestBooking;
