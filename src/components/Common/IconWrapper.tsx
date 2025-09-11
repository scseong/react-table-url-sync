import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
} & React.SVGProps<SVGSVGElement>;

const customStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center"
};

export default function IconWrapper({ icon: Icon, style, ...rest }: Props) {
  const styles = { ...customStyle, ...style };

  return <Icon {...rest} style={styles} />;
}
