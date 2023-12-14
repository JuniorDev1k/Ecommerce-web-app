import React from "react";

const Services = () => {
  return (
    <>
      <div class="services-bro">
        <section class="flex p-20">
          <div class="felx w-1/2">
            <div class="flex justify-center gap-5">
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service onw</p>
              </div>
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service onw</p>
              </div>
            </div>
            <div class="flex justify-around items-center">
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service onw</p>
              </div>
              <div class="border-b-4 border-red-700 pb-1">
                <h1 class="font-bold text-2xl">
                  Game<span class="text-white ml-2">Vibe</span>
                </h1>
              </div>
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service onw</p>
              </div>
            </div>
            <div class="flex justify-center gap-5">
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service onw</p>
              </div>
              <div class="hexagon relative">
                <p class="text-lg font-bold">Service one</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-1/2 justify-between items-center p-20">
            <h1 class="text-3xl text-red-700 mt-10">OUR SERVICES</h1>
            <div class="flex flex-col gap-2 text-lg bg-gray-800 p-5">
              <div class="flex gap-4">
                <h1 class="font-bold text-white"># 1</h1>
                <h1>OUE CLIENTS OUR PRIORITY</h1>
              </div>
              <div class="flex gap-4">
                <h1 class="font-bold text-white"># 2</h1>
                <h1>OUE CLIENTS OUR PRIORITY</h1>
              </div>
              <div class="flex gap-4">
                <h1 class="font-bold text-white"># 3</h1>
                <h1>OUE CLIENTS OUR PRIORITY</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
