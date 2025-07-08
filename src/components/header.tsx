import Link from "next/link";
import { Button } from "@/components/ui/button";

const siteTitle = "QC WebApp Scaffold";

export default function Header() {
  return (
    <header className="flex w-full items-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="flex-1">
        <Link href="/" passHref>
          <span className="transition-opacity group-hover:opacity-80">
            <h1 className="text-lg font-medium">{siteTitle}</h1>
          </span>
        </Link>
      </div>
      <div>
        <Button variant="outline">Button for Test</Button>
      </div>
    </header>
  );
}
