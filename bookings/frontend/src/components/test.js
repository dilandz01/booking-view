import React from "react";

export default function test() {
  return (
    <div class="relative w-2/4 h-screen bg-blue-800 overflow-hidden rounded-full scale-150 scale-x-50">
      <div class="w-full h-full transform scale-x-150 origin-left absolute left-0 top-0 bg-blue-800"></div>

      <div class="relative z-10 p-8">
        <h1 class="text-4xl font-bold text-white">Your Title</h1>
        <p class="text-white mt-4">Your content goes here.</p>
      </div>
    </div>
  );
}
