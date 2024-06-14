import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const {signIn} = useAuth();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    const {email, password} = data;
    signIn(email, password)
      .then(() => {
        navigate(location.state || "/");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Up successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto mt-20 my-96">
      <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden border rounded-lg shadow-lg  lg:max-w-7xl">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://i.ibb.co/QJssRwH/healthcare-people-group-professional-doctor-working-hospital-office-clinic-with-other-doctors-nurse.jpg')`,
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

          <p className="mt-3 text-xl text-center text-gray-600 font-Lora">
            Welcome to Health Hub
          </p>

          <h2 className="text-center text-2xl font-Lora font-semibold mt-4 text-gray-700 divider">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(handleSignIn)}>
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
              <label className="label">
                <span className="text-lg text-gray-600">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
            <div className="form-control mt-6">
              <button className="btn bg-[#00F515] text-[#112A46] font-Lora text-base">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-lg mt-8 text-right  text-gray-500 ">
            <p>Already have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
