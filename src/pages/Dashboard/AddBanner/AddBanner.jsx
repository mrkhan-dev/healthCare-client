import Swal from "sweetalert2";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";

const AddBanner = () => {
  const handleBanner = (e) => {
    const axiosPublic = UseAxiosPublic();
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const shortText = form.short_text.value;
    const couponCode = form.coupon_code.value;

    const bannerData = {
      title,
      image,
      shortText,
      couponCode,
    };
    axiosPublic
      .post("/addBanner", bannerData)
      .then((res) => {
        if (res.data.insertedId) {
          ("added test to the database");
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
        err;
      });
  };

  return (
    <div>
      <h2 className="text-center text-4xl mt-8 font-Lora font-medium">
        Add a New Banner
      </h2>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-8">
        <form onSubmit={handleBanner}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 ">Banner Title</label>
              <input
                type="text"
                name="title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Banner Image Url</label>
              <input
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Short description</label>
              <input
                type="text"
                name="short_text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 ">Coupon Code</label>
              <input
                type="text"
                name="coupon_code"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 font-Lora py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Banner
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBanner;
