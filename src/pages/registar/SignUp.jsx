import {useState} from "react";
import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const SignUp = () => {
  const [passError, setPassError] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const {createUser, updateUserProfile} = useAuth();
  const axiosPublic = UseAxiosPublic();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    data;
    const {name, email, password, bloodGroup, district, upazila} = data;

    if (password.length < 6) {
      setPassError("Password must be 6 character or longer");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{}\\|;:'",.<>?/]).{6,}$/.test(
        password
      )
    ) {
      setPassError("password must be uppercase, lowercase & special character");
      return;
    } else if (pass !== confirmPass) {
      setPassError("Password not match");
    }
    setPassError("");
    createUser(email, password)
      .then(() => {
        updateUserProfile(name);
        const userInfo = {
          name: name,
          email: email,
          bloodGroup: bloodGroup,
          district: district,
          upazila: upazila,
          password: password,
        };
        axiosPublic.post("/userInfo", userInfo).then((res) => {
          if (res.data.insertedId) {
            ("user info save to database");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location.state || "/dashboard/userProfile");
          }
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const password = watch("password", "");

  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden border rounded-lg shadow-lg  lg:max-w-7xl">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://i.ibb.co/Y3QCbH0/login.png')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-10 sm:h-10"
              src="https://i.ibb.co/yYZx3jR/tab-icon.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome to Health Hub
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
              {errors.name && (
                <span className="text-red-500 text-base mt-1 ml-1">
                  This field is required!
                </span>
              )}
              <span className="text-red-500 text-base mt-1 ml-1"></span>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {required: true})}
              />
              {errors.email && (
                <span className="text-red-500 text-base mt-1 ml-1">
                  This field is required!
                </span>
              )}
              <span className="text-red-500 text-base mt-1 ml-1"></span>
            </div>
            <div className="form-control mt-2">
              <label className="block">Image</label>
              <input
                type="file"
                className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Blood Group</span>
              </label>
              <select
                {...register("bloodGroup", {required: true})}
                defaultValue="default"
                name="bloodGroup"
                className="select select-bordered w-full text-lg text-gray-400"
              >
                <option disabled value="default" className="text-gray-50">
                  Select your blood group
                </option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
            <div className="lg:flex justify-between gap-4">
              <div className="form-control mt-2 w-full">
                <label className="label">
                  <span className="text-lg text-gray-600">District</span>
                </label>
                <input
                  type="text"
                  name="district"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("district", {required: true})}
                />
                {errors.district && (
                  <span className="text-red-500 text-base mt-1 ml-1">
                    This field is required!
                  </span>
                )}
              </div>
              <div className="form-control mt-2 w-full">
                <label className="label">
                  <span className="text-lg text-gray-600">Upazila</span>
                </label>
                <input
                  type="text"
                  name="upazila"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("upazila", {required: true})}
                />
                {errors.upazila && (
                  <span className="text-red-500 text-base mt-1 ml-1">
                    This field is required!
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={pass}
                onChange={setPass}
                placeholder="Password"
                className="input input-bordered"
                {...register("password", {required: true})}
              />
              {errors.password && (
                <span className="text-red-500 text-base mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-lg text-gray-600">Confirm Password</span>
              </label>
              <input
                type="password"
                value={confirmPass}
                onChange={setConfirmPass}
                name="confirmPassword"
                placeholder="Password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p style={{color: "red"}}>{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#00F515] text-[#112A46]">
                Sign Up
              </button>
            </div>
          </form>
          {passError && (
            <p className="text-center text-sm mt-2 text-red-500 mb-3">
              {passError}
            </p>
          )}

          <div className="text-lg mt-8 text-right  text-gray-500 ">
            <p>Already have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
