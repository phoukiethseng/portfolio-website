import { headerNavItems } from "@/configs/site";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { asPath: currentPath } = router;
  return (
    <nav className="fixed top-0 flex w-[100vw] flex-row items-center justify-between px-14 py-4 backdrop-blur-sm">
      <div>
        <Link
          href="/"
          className="bg-gradient-to-r from-accent to-primary bg-clip-text text-3xl font-bold text-transparent"
        >
          kiethseng.dev
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end gap-12">
        <ul className="flex flex-row items-center justify-start gap-10 text-xl font-semibold">
          {headerNavItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                <div className="flex flex-col items-center justify-start gap-0">
                  <span>{navItem.label}</span>
                  {currentPath.includes(navItem.href) && (
                    <span className="absolute top-[53px] animate-fade-in text-[10px] text-primary">
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
