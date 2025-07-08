import type { ReactNode } from "react";
import React from "react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-3xl flex-grow px-4 py-8">{props.children}</main>
      <footer className="bg-gray-100 p-6 text-center dark:bg-gray-700">
        <p className="text-base">dapp by Zack - 2025</p>
      </footer>
    </div>
  );
}
