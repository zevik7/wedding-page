'use client';

import { format } from 'date-fns';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

export type Wish = {
  _id: string;
  userName: string;
  comment: string;
  created_at: string;
};

type Form = {
  userName: string;
  comment: string;
};

//@ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const WishSection = () => {
  const { data, mutate, isLoading } = useSWR<Wish[], any, any>(
    '/api/wishes',
    fetcher
  );
  const listRef = useRef<HTMLUListElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const submitForm = async (form: Form) => {
    let res: Response = await fetch('api/wishes', {
      method: 'POST',
      body: JSON.stringify({
        userName: form.userName,
        comment: form.comment,
      }),
    });
    let wishId: string = await res.json();
    if (res.status === 200) {
      mutate([...(data || [])]);
      listRef.current &&
        listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      reset();
    }
  };

  return (
    <div className="mt-20 p-16 max-w-screen-xl m-auto">
      <h1 className="text-4xl font-bold text text-center text-primary">
        Lời chúc
      </h1>
      <p className="m-4 text-base text text-center italic">
        Cảm ơn bạn đã dành những lời chúc tốt đẹp.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <ul className="h-[50vh] overflow-y-scroll" ref={listRef}>
          {data &&
            data.length &&
            data.map((wish: Wish, idx: number) => (
              <li key={wish._id}>
                <article
                  className={`p-3 text-base  ${
                    idx % 2 === 0 ? 'bg-slate-200' : 'bg-white'
                  } `}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-base text-primary font-semibold">
                        {wish.userName}
                      </p>
                      {wish.created_at && (
                        <p className="text-sm text-gray-400">
                          <time dateTime={wish.created_at}>
                            {format(
                              new Date(wish.created_at),
                              'HH:mm dd/MM/yyyy'
                            )}
                          </time>
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm">{wish.comment}</p>
                </article>
              </li>
            ))}
        </ul>

        <form
          action=""
          className="sm-5 sm:p-10 mt-5 sm:mt-0 flex-col items-end"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="mb-6">
            <input
              type="text"
              className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-primary focus:outline-none"
              placeholder="Nhập tên của bạn"
              {...register('userName', {
                required: 'Không bỏ trống trường này',
                minLength: {
                  value: 10,
                  message: 'Ít nhất 10 ký tự',
                },
              })}
            />
            {errors.userName && (
              <span className="text-sm text-error">
                {errors.userName.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Nhập lời chúc của bạn"
              className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-primary focus:outline-none"
              {...register('comment', {
                required: 'Không bỏ trống trường này',
                minLength: {
                  value: 10,
                  message: 'Ít nhất 10 ký tự',
                },
              })}
            />
            {errors.comment && (
              <span className="text-sm text-error">
                {errors.comment.message}
              </span>
            )}
          </div>
          <div className="mb-6 flex justify-end">
            <button
              type="submit"
              className="py-3 px-8 bg-primary text-green-100 font-bold rounded"
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishSection;
