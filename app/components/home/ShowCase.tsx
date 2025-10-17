'use client';

import Link from 'next/dist/client/link';

type ShowCaseProps = {
  title: string;
  description: string;
  items: Array<{
    id: string;
    name: string;
    imageUrls: Array<string>;
    price: number;
    description: string;
    link: string;
  }>;
};

export default function ShowCase({ title, description, items }: ShowCaseProps) {
  return (
    <div className="min-h-screen mx-8 flex flex-col gap-8 rounded-xl px-4 py-4 mt-20">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-bold italic">{title}</h1>
        <hr className="text-black font-bold flex-1 mx-2" />
        <Link
          href="/shop"
          className=" text-2xl font-semibold border text-blue-700 border-blue-700 px-4 py-2 rounded "
        >
          Browse All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col"
          >
            <div
              style={{ backgroundImage: `url(${item.imageUrls[0]})` }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              className="w-full h-[550px] bg-cover bg-center bg-no-repeat mb-4 rounded cursor-pointer"
            ></div>

            <div className="mt-auto flex flex-col justify-between gap-2">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <span className="text-lg font-bold flex items-center gap-2 ">
                ${item.price}{' '}
                <span className="line-through text-gray-500/50">
                  ${item.price}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="min-h-[20vh] flex flex-col lg:flex-row justify-center items-center w-full gap-8 mt-20">
        <div className="bg-black p-4 font-bold">
          <span className="text-white text-3xl lg:text-4xl select-none">
            {' '}
            DESIGNED FOR THE BOLD.
          </span>
        </div>
        <div className=" w-[90%] md:w-[40%]">
          <p className="text-wrap font-light italic text-xl select-none">
            Explore the newest additions to our Men&#39;s Collection to discover
            clothing, shoes, bags and accessories featuring signature styles and
            detailing.
          </p>
        </div>
      </div>
    </div>
  );
}
