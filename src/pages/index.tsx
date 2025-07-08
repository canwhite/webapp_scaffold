import type { NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { useCounter } from "@/store/index";

// declare let window: any;

const Home: NextPage = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Head>
        <title>My DAPP</title>
      </Head>
      <div className="w-full rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold">Counter</h1>

        <div className="mb-6 text-center">
          <span className="text-2xl font-semibold">Current Count:</span>
          <span
            className={`ml-2 text-4xl font-bold ${
              count > 0 ? "text-green-600" : count < 0 ? "text-red-600" : "text-gray-800"
            }`}>
            {count}
          </span>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={decrement}
            className="rounded bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600">
            Decrement
          </button>
          <button
            onClick={reset}
            className="rounded bg-gray-500 px-6 py-2 text-white transition-colors hover:bg-gray-600">
            Reset
          </button>
          <button
            onClick={increment}
            className="rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600">
            Increment
          </button>
        </div>

        <Button className="bg-red-200" size="sm" variant="outline">
          test shadcn
        </Button>
      </div>
    </div>
  );
};

export default Home;
