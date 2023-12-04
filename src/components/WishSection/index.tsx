'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import OptimalImage from '../OptimalImage';
import { fetcher } from '@/utils';
import TitleSection from '../TitleSection';
import NeelaBorder from '../NeelaBorder';
import { ephesis } from '@/app/fonts';
import useSWRMutation from 'swr/mutation';
import { usePathname } from 'next/navigation';
import FlashLoading from '../FlashLoading';
import { motion } from 'framer-motion';

export type Wish = {
  _id: string;
  userName: string;
  comment: string;
  created_at: string;
  joiningConfirmation: boolean;
};

type Form = {
  userName: string;
  comment: string;
  joiningConfirmation: boolean;
};

async function sendRequest(url: string, { arg }: { arg: Form }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res);
}

const WishSection = () => {
  const { data, mutate, isLoading } = useSWR<Wish[], any, any>(
    '/api/wishes',
    fetcher
  );

  const { trigger, isMutating } = useSWRMutation(
    '/api/wishes',
    sendRequest /* options */
  );

  const headerRef = useRef<any>(null);
  const listRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const submitForm = async (form: Form) => {
    let res: Response = await trigger({
      userName: form.userName?.trim(),
      comment: form.comment?.trim(),
      joiningConfirmation: form.joiningConfirmation,
    });

    if (res.status === 200) {
      mutate([...(data || [])]);

      setTimeout(() => {
        headerRef.current &&
          headerRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 200);

      setTimeout(() => {
        listRef.current &&
          listRef.current.scrollTo({ behavior: 'smooth', top: 0 });
      }, 1000);

      reset();
    } else if (res.status === 429) {
      alert(res.statusText + '\n Bạn đã gửi quá 2 lần');
    }
  };

  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoadingHome, setIsLoadingHome] = useState(isHome);

  useEffect(() => {
    if (isLoadingHome) {
      setTimeout(() => {
        setIsLoadingHome(false);
      }, 1500);
    }
  }, [isLoadingHome]);

  if (isLoadingHome) {
    return <FlashLoading />;
  }

  return (
    <div className="relative p-7 sm:p-14 after:content-[''] after:bg-primary after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-60 after:-z-10 ">
      <OptimalImage
        fill
        alt="Background image"
        src={`/images/damNoi/IMG_0482.jpg`}
        quality={70}
        className="object-cover -z-10"
        sizes="100vw"
      />

      <div ref={headerRef} className="py-12 sm:py-16">
        <TitleSection content="Lời chúc" whiteIcon className="text-white" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, bottom: 0 },
            hidden: { opacity: 0, bottom: -200 },
          }}
          className="relative"
        >
          <p className="text-base text-white text-center">
            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng mình có
            thêm một niềm hạnh phúc!
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-screen-lg m-auto ">
        <NeelaBorder borderElementStyle="border-white border-2">
          <div className="grid sm:gap-2 grid-cols-1 sm:grid-cols-2">
            <div className="p-4 sm:p-10 relative">
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
              <div className="max-h-[50vh] sm:max-h-[70vh] overflow-hidden">
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
                            <p className="inline-flex items-center mr-3 text-base text-primary font-semibold">
                              {wish.userName?.charAt(0).toUpperCase() +
                                wish.userName?.slice(1)}
                            </p>
                            {wish.joiningConfirmation && (
                              <p className="inline-block rounded-md text-xs p-1 text-white bg-primary">
                                Tham dự
                              </p>
                            )}
                          </div>

                          <p className="text-sm">{wish.comment}</p>
                          {/* {wish.created_at && (
                            <p className="text-sm text-gray-400 text-right">
                              <time dateTime={wish.created_at}>
                                {format(
                                  new Date(wish.created_at),
                                  'HH:mm dd/MM'
                                )}
                              </time>
                            </p>
                          )} */}
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
                <div className="py-4">
                  <h1 className={'text-xl text-center text-white'}>
                    24 Tháng 12 2023
                  </h1>
                </div>
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
                  placeholder="Tên của bạn"
                  {...register('userName', {
                    required: 'Nhập đi mà, đừng cheat :((',
                    minLength: {
                      value: 10,
                      message:
                        'Điền chữ lót luôn đi bạn ơi cho tụi mình dễ nhớ',
                    },
                    maxLength: {
                      value: 100,
                      message: 'Tối đa 100 ký tự',
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
                  placeholder="Lời chúc của bạn"
                  className="block w-full p-4 min-h-[100px] resize-none border border-gray-300 bg-gray-50  focus:outline-none"
                  {...register('comment', {
                    required: 'Nhập đi mà, đừng cheat :((',
                    minLength: {
                      value: 10,
                      message: 'Nhập đi mà, đừng cheat :((',
                    },
                    maxLength: {
                      value: 300,
                      message: 'Tối đa 300 ký tự',
                    },
                  })}
                />
                {errors.comment && (
                  <span className="text-sm text-white text-center w-full block">
                    {errors.comment.message}
                  </span>
                )}
              </div>
              <div className="mb-6 flex justify-end items-center gap-4">
                <div className="flex items-center">
                  <input
                    id="joiningConfirmation"
                    type="checkbox"
                    className="w-4 h-4 text-primary rounded accent-neutral focus:ring-secondary focus:ring-2"
                    {...register('joiningConfirmation')}
                  />
                  <label
                    htmlFor="joiningConfirmation"
                    className="ms-2 text-sm text-white"
                  >
                    Tham dự
                  </label>
                </div>
                <button
                  disabled={isMutating}
                  type="submit"
                  className="py-3 px-8 bg-white text-primary font-bold "
                >
                  {!isMutating ? 'Gửi lời chúc' : 'Đang gửi'}
                </button>
              </div>
            </form>
          </div>
        </NeelaBorder>
      </div>
    </div>
  );
};

export default memo(WishSection);
