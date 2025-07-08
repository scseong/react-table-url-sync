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
            <li key={category} className={styles.main_category}>
              <NavLink
                to={`/products/category/${category}`}
                className={({ isActive }) => (isActive ? `${styles.active} ${styles.main_link}` : styles.main_link)}
              >
                {category}
              </NavLink>
              <ul className={styles.sub_category_list}>
                {categoryGroups[category].map((subCategory) => (
                  <li key={subCategory} className={styles.sub_category}>
                    <NavLink
                      to={`/products/category/${category}/${subCategory}`}
                      className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                      {subCategory}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
