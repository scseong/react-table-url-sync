import { NavLink } from "react-router-dom";
import { categoryGroups, type MainCategory } from "@/constants/categories";
import styles from "./layout.module.scss";

export default function CategoriesMenu() {
  const mainCategories = Object.keys(categoryGroups) as MainCategory[];

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_wrap}>
        <ul className={styles.category_list}>
          {mainCategories.map((category) => (
            <li key={category}>
              <NavLink
                to={`/products/category/${category}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
