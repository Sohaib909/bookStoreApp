import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Replace with your contact form submission logic
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => navigate('/')}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Contact Us</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required.</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required.</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Enter your message"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                rows="4"
                {...register('message', { required: true })}
              />
              {errors.message && <p className="text-red-500">Message is required.</p>}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
