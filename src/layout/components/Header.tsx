import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Header = () => {
  const navigationItems = [
    {
      key: "playground",
      path: "/",
    },
    {
      key: "dashboard",
      path: "/dashboard",
    },
    {
      key: "analytics",
      path: "/analytics",
    },
    {
      key: "ecommerce",
      path: "/ecommerce",
    },
    {
      key: "admin",
      path: "/admin",
    },
  ];

  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul className="flex items-center gap-2">
          {navigationItems.map((item) => (
            <Link key={item.key} to={item.path}>
              {t(`navigation.${item.key}`)}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
