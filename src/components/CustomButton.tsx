import "./CustomButton.css";
import PropTypes from "prop-types";

interface Props {
  size: "sm" | "md" | "lg";
  label: string;
  variant: "solid" | "outline";
  backgroundColor: string;
  color: string;
}

export const CustomButton = ({
  size,
  label,
  variant,
  backgroundColor,
  color,
}: Props) => {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <button
      className={[
        "custom-button",
        `custom-button--${size}`,
        `custom-button--${variant}`,
      ].join(" ")}
      style={style}
    >
      {label}
    </button>
  );
};

//  prop의 타입을 지정. 이 부분을 설정하면 스토리북 웹사이트에서 그에 맞는 입력값을 변경할 수 있다.
CustomButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  backgroundColor: null,
  color: null,
  size: "md",
  variant: "outline",
};
