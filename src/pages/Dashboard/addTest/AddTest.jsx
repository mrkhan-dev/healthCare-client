import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const AddTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosPublic = UseAxiosPublic();

  const handleAddTest = (e) => {
    e.preventDefault();
    const form = e.target;
    const testName = form.testName.value;
    const image = form.image.value;
    const date = startDate;
    const price = parseInt(form.price.value);
    const slots = form.slots.value;
    const descriptions = form.descriptions.value;

    const testData = {
      testName,
      image,
      date,
      price,
      slots,
      descriptions,
    };
    console.log(testData);
    axiosPublic
      .post("/addTest", testData)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("added test to the database");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2 className="text-center text-4xl mt-8 font-Lora font-medium">
        Add a New Test
      </h2>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-8">
        <form onSubmit={handleAddTest}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 ">Test Name</label>
              <input
                type="text"
                name="testName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Image URL</label>
              <input
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Slots</label>
              <input
                type="text"
                name="slots"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Price</label>
              <input
                type="number"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-gray-700 block">Date</label>
            <DatePicker
              name="date"
              className="px-4 py-2 lg:w-[850px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="mt-6">
            <label className="text-gray-700">Short Descriptions</label>
            <textarea
              name="descriptions"
              className="block w-full lg:h-44  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 font-Lora py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Test
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTest;
