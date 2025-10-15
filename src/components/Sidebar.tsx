import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Wallet, Settings, X, ArrowLeftRight, ChartNoAxesColumnIncreasing,  type LucideIcon } from "lucide-react";

type SidebarProps = {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ title = "Budget Buddy", isOpen = false, onClose }: SidebarProps) {
  const [activeKey, setActiveKey] = useState<string>("dashboard");

  const items: Array<{
    key: string;
    label: string;
    href: string;
    Icon: LucideIcon;
  }> = [
    { key: "dashboard", label: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
    { key: "wallet", label: "Wallet", href: "/wallet", Icon: Wallet },
    { key: "analytics", label: "Analytics", href: "/analytics", Icon: ChartNoAxesColumnIncreasing },
    { key: "transactions", label: "Transactions", href: "/transactions", Icon: ArrowLeftRight },
    { key: "settings", label: "Settings", href: "/settings", Icon: Settings },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 p-4 bg-[#24282E] transform transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:w-60 md:block min-h-screen`}
      aria-hidden={!isOpen}
    >
      <button
        className="md:hidden absolute top-3 right-3 text-[#999D9E] hover:text-white"
        aria-label="Close sidebar"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>
      <h2 className="mt-0 text-xl font-semibold text-white pb-5">{title}</h2>
      <nav aria-label="Sidebar">
        <ul className="list-none p-0 m-0 space-y-1">
          {items.map(({ key, label, href, Icon }) => {
            const isActive = key === activeKey;
            const linkBase =
              "flex items-center gap-2 rounded-md px-4 py-2 transition-colors";
            const linkActive = "bg-[#34373D] text-white hover:text-green-400";
            const linkInactive =
              "text-[#999D9E] hover:text-green-400";

            return (
              <li key={key}>
                <NavLink
                  to={href}
                  className={({ isActive: routerActive }: { isActive: boolean; isPending?: boolean; isTransitioning?: boolean }) => {
                    const active = routerActive || isActive;
                    return `${linkBase} ${active ? linkActive : linkInactive}`;
                  }}
                  onClick={() => setActiveKey(key)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
