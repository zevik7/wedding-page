import React from 'react';
import Calendar from '../Calendar';
import Section from '../Section';
import clientPromise from '@/lib/mongodb';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Props = {
  movies: any;
};

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    const movies = await db
      .collection('wishes')
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      movies: JSON.parse(JSON.stringify(movies)),
    };
  } catch (e) {
    console.error(e);
  }
};

const WishSection = async () => {
  const props = await getServerSideProps();
  return (
    <div className="mt-20  p-16">
      <h1 className="text-4xl font-bold text text-center text-primary">
        Lời chúc
      </h1>
      <p className="m-4 text-base text text-center italic">
        Cảm ơn bạn đã dành những lời chúc tốt đẹp.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <ul>
          <li>
            <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>

                <div
                  id="dropdownComment1"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Very straight-to-point article. Really worth time reading. Thank
                you! But tools are just the instruments for the UX designers.
                The knowledge of the design tools are as important as the
                creation of the design strategy.
              </p>
            </article>
          </li>
        </ul>

        <form action="">
          <div className="flex items-center mb-5">
            <label htmlFor="name" className=" inline-block text-right mr-4">
              Tên
            </label>
            <input name="name" id="name" type="text" placeholder="Your name" />
          </div>

          <div className="flex items-center mb-10">
            <label htmlFor="twitter" className=" inline-block text-right mr-4 ">
              Nhập lời chúc
            </label>
            <textarea
              name="twitter"
              id="twitter"
              placeholder="Nhập lời chúc của bạn"
              className="border-b-2 border-gray-400 flex-1 p-4 placeholder-gray-300 outline-none focus:border-primary text-center"
              minLength={20}
            />
          </div>
          <div className="text-right">
            <button className="py-3 px-8 bg-primary text-green-100 font-bold rounded">
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishSection;
