import {Helmet} from "react-helmet-async";
import Nav from "../../shared/Nav";
import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import {useParams} from "react-router-dom";
import UseStatus from "../../hooks/UseStatus";
import {CiWarning} from "react-icons/ci";
import TestBooking from "../../components/Booking/TestBooking";

const TestDetails = () => {
  const axiosPublic = UseAxiosPublic();
  const {id} = useParams();
  const [isBlocked] = UseStatus();

  const {data: test = []} = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testDetails/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Health Hub | test details</title>
      </Helmet>
      <div className="h-20">
        <Nav />
      </div>
      {isBlocked ? (
        <>
          <div className="max-w-5xl mx-auto mt-4">
            <div className="flex justify-between px-3">
              <h3 className="text-4xl font-Lora font-medium">
                {test.testName}
              </h3>
              <p className="text-3xl font-medium font-Lora tracking-widest">
                ${test.price}
              </p>
            </div>
            <img
              className="w-full h-[480px] rounded-2xl mt-2"
              src={test.image}
              alt=""
            />
            <div className=" mt-4">
              <p className="text-xl font-medium font-Lora tracking-widest">
                Deadline: {new Date(test.date).toLocaleDateString()}
              </p>
              <p className="text-xl font-medium font-Lora tracking-widest">
                Slots: {test.slots}
              </p>
            </div>
            <hr className="mt-8 mb-8" />
            <p className="text-lg text-[#737373] font-Lora">
              {test.descriptions}
            </p>
            <hr className="mt-8 mb-8" />
            <div className="flex justify-end mb-8">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Book Now
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold flex justify-center text-center text-lg">
                    {" "}
                    <CiWarning className="text-center text-6xl text-red-500" />{" "}
                  </h3>
                  <p className="py-4 text-center font-Lora text-red-500">
                    Your Status has been blocked by admin panel. <br /> If you
                    book the test, please log out and sign up new account.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-5xl mx-auto mt-4">
            <div className="flex justify-between px-3">
              <h3 className="text-4xl font-Lora font-medium">
                {test.testName}
              </h3>
              <p className="text-3xl font-medium font-Lora tracking-widest">
                ${test.price}
              </p>
            </div>
            <img
              className="w-full h-[480px] rounded-2xl mt-2"
              src={test.image}
              alt=""
            />
            <div className=" mt-4">
              <p className="text-xl font-medium font-Lora tracking-widest">
                Deadline: {new Date(test.date).toLocaleDateString()}
              </p>
              <p className="text-xl font-medium font-Lora tracking-widest">
                Slots: {test.slots}
              </p>
            </div>
            <hr className="mt-8 mb-8" />
            <p className="text-lg text-[#737373] font-Lora">
              {test.descriptions}
            </p>
            <hr className="mt-8 mb-8" />
            <div className="flex justify-end mb-8">
              <TestBooking test={test} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestDetails;
