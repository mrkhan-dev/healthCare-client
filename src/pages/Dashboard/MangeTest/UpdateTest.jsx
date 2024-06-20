import DatePicker from "react-datepicker";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

const UpdateTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosPublic = UseAxiosPublic();
  const {id} = useParams();

  const {data: testInfo = []} = useQuery({
    queryKey: ["testInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testDetails/${id}`);
      return res.data;
    },
  });
  const handleUpdateTest = (e) => {
    e.preventDefault();
    const form = e.target;
    const testName = form.testName.value;
    const image = form.image.value;
    const date = startDate;
    const price = parseInt(form.price.value);
    const slots = parseInt(form.slots.value);
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
      .put(`/updateTest/${id}`, testData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
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
        Update Test Information
      </h2>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-8">
        <form onSubmit={handleUpdateTest}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 ">Test Name</label>
              <input
                type="text"
                defaultValue={testInfo.testName}
                name="testName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Image URL</label>
              <input
                type="text"
                defaultValue={testInfo.image}
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Slots</label>
              <input
                type="text"
                name="slots"
                defaultValue={testInfo.slots}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Price</label>
              <input
                type="number"
                defaultValue={testInfo.price}
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
              Update Test
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateTest;
