'use client';

import { format } from 'date-fns';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import Section from '../Section';
import OptimalImage from '../OptimalImage';
import { fetcher } from '@/utils';
import TitleSection from '../TitleSection';
import NeelaBorder from '../NeelaBorder';
import { ephesis } from '@/app/fonts';
import flower2 from '../../../public/images/decoration/flower-medium2.svg';

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
    <div className="relative p-7 sm:p-14 after:content-[''] after:bg-primary after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-60 after:-z-10 ">
      <OptimalImage
        fill
        alt="Background image"
        src={`/images/damNoi/IMG_0482.jpg`}
        quality={60}
        className="object-cover -z-10"
        sizes="100vw"
      />

      <div className="my-4" />

      <TitleSection content="Lời chúc" whiteIcon className="text-white" />

      <p className="text-base text-white text-center">
        Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm
        một niềm hạnh phúc!
      </p>

      <div className="my-10" />

      <div className="relative max-w-screen-lg m-auto ">
        <NeelaBorder borderElementStyle="border-white border-2">
          <div className="grid sm:gap-2 grid-cols-1 sm:grid-cols-2">
            <div className="p-8 sm:p-10 relative">
              <OptimalImage
                src={'images/decoration/leafPurple.svg'}
                alt=""
                width={200}
                height={100}
                className="absolute -top-[50px] -left-[50px] m-auto -scale-x-100 w-auto h-auto"
              />
              <OptimalImage
                src={'images/decoration/leafPurple.svg'}
                alt=""
                width={200}
                height={100}
                className="absolute -bottom-[50px] -right-[50px] m-auto rotate-90 w-auto h-auto"
              />
              <div className="h-full max-h-[50vh] sm:max-h-[70vh] overflow-hidden">
                <ul
                  ref={listRef}
                  className="h-full overflow-y-scroll"
                  style={{
                    scrollbarColor: 'revert-layer',
                  }}
                >
                  {data &&
                    data.length &&
                    data.map((wish: Wish, idx: number) => (
                      <li key={wish._id}>
                        <article
                          className={`p-3 text-base relative overflow-hidden ${
                            idx % 2 === 0 ? 'bg-slate-50' : 'bg-slate-100'
                          } `}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <p className="inline-flex items-center mr-3 text-base text-primary font-semibold">
                                {wish.userName?.charAt(0).toUpperCase() +
                                  wish.userName?.slice(1)}
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
              </div>
            </div>

            <form
              action=""
              className="bg-primary bg-opacity-70 py-6 sm:py-12 px-3 sm:px-6"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="mb-6 relative">
                <OptimalImage
                  src={'images/decoration/lineBorder.svg'}
                  alt=""
                  width={200}
                  height={40}
                  className="opacity-50 m-auto w-auto h-auto"
                />
                <p
                  className={
                    'text-white text-3xl text-center ' + ephesis.className
                  }
                >
                  Save the date
                </p>
                <h1
                  className={
                    'text-primary text-4xl text-center text-white py-4'
                  }
                >
                  24 Tháng 12 2023
                </h1>
                <OptimalImage
                  src={'images/decoration/lineBorder.svg'}
                  alt=""
                  width={200}
                  height={40}
                  className="opacity-50 m-auto rotate-180 -scale-x-100 w-auto h-auto"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="block w-full p-4 border border-gray-300 bg-gray-50  focus:outline-none"
                  placeholder="Nhập tên của bạn"
                  {...register('userName', {
                    required: 'Nhập đi mà, đừng cheat :((',
                    minLength: {
                      value: 10,
                      message:
                        'Điền chữ lót luôn đi bạn ơi cho tụi mình dễ nhớ',
                    },
                  })}
                />
                {errors.userName && (
                  <span className="text-sm text-white text-center w-full block">
                    {errors.userName.message}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Nhập lời chúc của bạn"
                  className="block w-full p-4 min-h-[100px] resize-none border border-gray-300 bg-gray-50  focus:outline-none"
                  {...register('comment', {
                    required: 'Nhập đi mà, đừng cheat :((',
                    minLength: {
                      value: 10,
                      message: 'Nhập đi mà, đừng cheat :((',
                    },
                  })}
                />
                {errors.comment && (
                  <span className="text-sm text-white text-center w-full block">
                    {errors.comment.message}
                  </span>
                )}
              </div>
              <div className="mb-6 flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-8 bg-white text-primary font-bold "
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </NeelaBorder>
      </div>
    </div>
  );
};

export default WishSection;
