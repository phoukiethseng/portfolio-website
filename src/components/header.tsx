import { headerNavItems } from "@/configs/site";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { useRouter } from "next/router";
import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";

export default function Header() {
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
    <nav className="fixed top-0 z-50 flex w-[100vw] flex-row items-center justify-between px-14 py-2 backdrop-blur-sm">
      <Link
        href="/"
        className="rounded-lg p-2 text-xl font-bold hover:bg-secondary hover:text-secondary-foreground"
      >
        kiethseng.dev
      </Link>
      <div className="flex flex-row items-center justify-end gap-12">
        <ul className="text-md flex flex-row items-center justify-start gap-10 font-inter font-semibold">
          {headerNavItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                <div className="flex flex-col items-center justify-start gap-0">
                  <span
                    className={cx(
                      "transition-color duration-200",
                      mounted &&
                        currentPath.includes(navItem.href) &&
                        "text-primary"
                    )}
                  >
                    {navItem.label}
                  </span>
                  {mounted && currentPath.includes(navItem.href) && (
                    <span className="absolute top-[40px] animate-fade-in text-[8px] text-primary">
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
