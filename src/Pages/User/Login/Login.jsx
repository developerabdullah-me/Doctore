import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firabase.init";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


    const navigate=useNavigate();
   
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user){
        navigate(from, { replace: true });
    }
  


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (error) {
    return (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }






  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
        <div class="card-body">
          <h2 class="text-center">Please Login</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "your email is not required",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "your password  must be 6 character",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="w-full max-w-xs btn"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <p>New to Doctors Portal? <Link to="/singUp">Create new account</Link></p>
          <div class="divider">OR</div>
          <div className="">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
