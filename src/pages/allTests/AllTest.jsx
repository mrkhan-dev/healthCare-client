import {Helmet} from "react-helmet-async";
import Nav from "../../shared/Nav";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from "react-date-range";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AllTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allTests, setAllTests] = useState([]);
  const [tests, setTests] = useState([]);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/allTests").then((res) => {
      setAllTests(res.data);
      setTests(res.data);
    });
  }, [axiosPublic]);

  const handleSelect = (date) => {
    let dateFilter = tests.filter((test) => {
      let testDate = new Date(test["date"]);
      return (
        testDate >= date.selection.startDate &&
        testDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setAllTests(dateFilter);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <Helmet>
        <title>Health Hub | All Test</title>
      </Helmet>
      <div className="h-20">
        <Nav />
      </div>

      <div className="lg:w-[1440px] mx-auto">
        <h2 className="text-center text-4xl font-Lora font-medium mt-8">
          All Tests
        </h2>
        <div className="flex justify-end ">
          <div className="">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {allTests.map((test) => (
            <div
              key={test._id}
              className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
            >
              <img
                src={test.image}
                alt=""
                className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <div className="flex justify-between ">
                  <p className="text-lg font-medium tracking-widest uppercase dark:text-violet-600">
                    {new Date(test.date).toLocaleDateString()}
                  </p>
                  <span className="text-lg font-medium tracking-widest  uppercase dark:text-violet-600">
                    ${test.price}
                  </span>
                </div>
                <p className="dark:text-gray-800">Slots: {test.slots}</p>
                <h2 className="text-xl font-semibold tracking-wide">
                  Test Name: {test.testName}
                </h2>
              </div>

              <div className="flex justify-end">
                <Link to={`/testDetails/${test?._id}`}>
                  <button className="btn text-md flex lg:ml-0 font-semibold px-5 bg-[#00F515] text-[#112A46] font-Lora ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTest;
