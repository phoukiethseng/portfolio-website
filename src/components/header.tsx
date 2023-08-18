import { homePageSections } from "@/configs/site";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type NavigationMenuItemType = {
  label: string;
  id: string;
};

interface HeaderProps {
  navMenuItems: NavigationMenuItemType[];
}

export default function Header({ navMenuItems }: HeaderProps) {
  const router = useRouter();
  const { asPath: currentPath } = router;

  // We use this state to avoid using `useRouter` in pre-render which can cause hydration error
  // Since hashtag `#` part of url won't be sent to server side, if user reload browser with url `/#about`
  // In pre-render cycle, router's asPath will only return `/` not `/#about`, thus will cause a hydration error
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex w-[100vw] flex-row items-center justify-end px-4 py-2 backdrop-blur-sm sm:justify-between md:px-14">
      <Link
        href="/"
        className="hidden rounded-lg p-2 text-xl font-bold hover:bg-secondary hover:text-secondary-foreground sm:block"
      >
        kiethseng.dev
      </Link>
      <div className="flex flex-row items-center justify-end gap-12">
        <ul className="text-md font-inter flex flex-row items-center justify-start gap-5 font-semibold md:gap-10">
          {navMenuItems.map((navItem, index) => (
            <li key={index}>
              <Link href={`#${navItem.id}`}>
                <div className="flex flex-col items-center justify-start gap-0">
                  <span
                    className={cn(
                      "transition-color duration-200",
                      mounted &&
                        currentPath.includes(`#${navItem.id}`) &&
                        "text-primary"
                    )}
                  >
                    {navItem.label}
                  </span>
                  {mounted && currentPath.includes(`#${navItem.id}`) && (
                    <span className="animate-fade-in absolute top-[40px] text-[8px] text-primary">
                      ⬤
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
