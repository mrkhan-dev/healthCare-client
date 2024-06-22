import {MdCancel} from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
// import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import {useQuery} from "@tanstack/react-query";
import Swal from "sweetalert2";
import {RotatingLines} from "react-loader-spinner";

const UpcomingAppoinment = () => {
  const {user} = useAuth();
  const axiosSecure = UseAxiosPublic();
  const {
    data: test = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user?.email}`);
      return res.data;
    },
  });

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/appointment/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-96">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="text-4xl font-Lora mt-4">
          <h2 className="text-center">My Upcoming Appointment</h2>
        </div>
        <p> {test.length} </p>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th className=""></th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Test Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Date</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                          </svg>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {test.map((data, i) => (
                      <tr key={data._id}>
                        <td>
                          <h2 className="font-medium px-5 text-gray-800 ">
                            {i + 1}
                          </h2>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="font-medium text-gray-800 ">
                                  {data.testName}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                            <h2 className="text-sm font-normal text-emerald-500">
                              $ {data.price}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm  whitespace-nowrap text-blue-600">
                          {new Date(data.date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleCancel(data._id)}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none"
                            >
                              <MdCancel className="text-2xl" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingAppoinment;
