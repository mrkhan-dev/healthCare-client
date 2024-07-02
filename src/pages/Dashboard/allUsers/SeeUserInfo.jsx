import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import {useParams} from "react-router-dom";
import {jsPDF} from "jspdf";

const SeeUserInfo = () => {
  const axiosSecure = UseAxiosSecure();
  const {id} = useParams();
  const {data: getUserInfo = []} = useQuery({
    queryKey: ["getUserInfo", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userDetails/${id}`);
      return res.data;
    },
  });

  const handleDownload = () => {
    const doc = new jsPDF();

    // Adding user information to the PDF
    doc.setFontSize(20);
    doc.text("User Details", 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${getUserInfo.name}`, 10, 20);
    doc.text(`Email: ${getUserInfo.email}`, 10, 30);
    doc.text(`Blood Group: ${getUserInfo.bloodGroup}`, 10, 40);
    doc.text(`District: ${getUserInfo.district}`, 10, 50);
    doc.text(`Upazila: ${getUserInfo.upazila}`, 10, 60);

    // Adding test details to the PDF
    // doc.setFontSize(16);
    // doc.text('Booked Tests', 10, 50);
    // doc.setFontSize(12);

    // getUserInfo.tests.forEach((test, index) => {
    //   doc.text(`Test Name: ${test.name}`, 10, 60 + index * 10);
    //   doc.text(`Status: ${test.status}`, 60, 60 + index * 10);
    // });

    // Saving the PDF
    doc.save("user_details.pdf");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-8">
        <h3 className="text-xl font-Lora mt-2">
          User name : {getUserInfo.name}
        </h3>
        <h3 className="text-xl font-Lora mt-2">
          User email : {getUserInfo.email}
        </h3>
        <h3 className="text-xl font-Lora mt-2">
          Blood Group : {getUserInfo.bloodGroup}
        </h3>
        <h3 className="text-xl font-Lora mt-2">
          District : {getUserInfo.district}
        </h3>
        <h3 className="text-xl font-Lora mt-2">
          Upazila : {getUserInfo.upazila}
        </h3>
        <div className="mt-4">
          <button
            className="btn text-lg bg-blue-400 text-white"
            onClick={handleDownload}
          >
            download
          </button>
        </div>
      </div>
    </>
  );
};

export default SeeUserInfo;
