import { headerNavItems } from "@/configs/site";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { asPath: currentPath } = router;
  return (
    <nav className="flex flex-row items-center justify-between px-6 pt-4">
      <div></div>
      <div className="flex flex-row items-center justify-end gap-12">
        <ul className="flex flex-row items-center justify-start gap-10 text-xl font-semibold">
          {headerNavItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                <div className="flex flex-col items-center justify-start gap-0">
                  <span>{navItem.label}</span>
                  {currentPath.includes(navItem.href) && (
                    <span className="absolute top-12 text-[10px] text-primary">
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
