import { useState } from "react";
import styles from "./ExpandableText.module.scss";

type Props = {
  text: string | null;
  maxLength?: number;
};

export default function ExpandableText({ text, maxLength = 150 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const isLongText = text.length > maxLength;
  const displayedText = isExpanded ? text : text.slice(0, maxLength) + (isLongText ? "..." : "");

  return (
    <div className={styles.text_wrap}>
      <p>{displayedText}</p>
      {isLongText && (
        <button
          className={!isExpanded ? styles.expanded_btn : ""}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show less" : "Read more"}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
