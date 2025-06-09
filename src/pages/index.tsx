import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import useEvent from "@/hooks/useEvent";
import ReadERC20 from "@/components/readERC20";
import TransferERC20 from "@/components/transferERC20";

declare let window: any;

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center  w-full h-full">
      <Head>
        <title>My DAPP</title>
      </Head>
      <div>Hello World</div>
    </div>
  );
};

export default Home;
