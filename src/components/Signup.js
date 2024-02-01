import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function Signup({ setLogin }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="nameRow">
            <div>
              <Controller
                control={control}
                name="name"
                render={() => (
                  <>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      id="name"
                      {...register("name", {
                        required: "Your name is required",
                      })}
                    />
                    <p className="error">
                      {errors.name?.type === "required" && errors.name.message}
                    </p>
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="name"
                render={() => (
                  <>
                    <input
                      type="text"
                      placeholder="Enter your age"
                      id="age"
                      {...register("age", {
                        required: "Your age is required",
                      })}
                    />
                    <p className="error">{errors.age && errors.age.message}</p>
                  </>
                )}
              />
            </div>
          </div>

          <Controller
            control={control}
            name="name"
            render={() => (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                />
                <p className="error">{errors.email && errors.email.message}</p>
              </>
            )}
          />

          <Controller
            control={control}
            name="name"
            render={() => (
              <>
                <input
                  type="text"
                  placeholder="Enter your country"
                  id="country"
                  {...register("country", {
                    required: "Country name is required",
                  })}
                />
                <p className="error">
                  {errors.country && errors.country.message}
                </p>
              </>
            )}
          />

          <Controller
            control={control}
            name="name"
            render={() => (
              <>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: `- at least 8 characters`,
                    },
                  })}
                />
                <p className="error">
                  {errors.password && errors.password.message}
                </p>
              </>
            )}
          />

          <button type="submit" className="submitBtn" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
