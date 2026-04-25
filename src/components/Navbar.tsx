import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EditableText from "@/components/content/EditableText";
import { useSiteContent } from "@/components/content/SiteContentProvider";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { content, editMode } = useSiteContent();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-6">
        <Link to="/" className="shrink-0" aria-label="HealthTechMedics home" onClick={() => setMobileOpen(false)}>
          <img src={logoHorizontal} alt={content.common.brandName} className="h-10 w-auto sm:h-12 lg:h-14" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {content.navigation.items.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={(event) => {
                if (editMode) {
                  event.preventDefault();
                }
              }}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.to ? "text-foreground" : "text-foreground/68 hover:text-foreground"
              }`}
            >
              <EditableText path={`navigation.items.${index}.label`} as="span" multiline={false} />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background px-5 py-4 sm:px-6 sm:py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {content.navigation.items.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                  location.pathname === item.to ? "bg-secondary text-foreground" : "text-foreground/75 hover:bg-secondary hover:text-foreground"
                }`}
                onClick={(event) => {
                  if (editMode) {
                    event.preventDefault();
                    return;
                  }

                  setMobileOpen(false);
                }}
              >
                <EditableText path={`navigation.items.${index}.label`} as="span" multiline={false} />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
