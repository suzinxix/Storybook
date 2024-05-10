// 1. CustomBotton 컴포넌트를 import
import { CustomButton } from "../components/CustomButton";

// 2. export default로 객체를 내보낸 후 title에 텍스트를 입력하고,
// component에는 import 한 컴포넌트를 삽입
export default {
  title: "Test/CustomButton",
  component: CustomButton,
  args: { // 공통 되는 속성
    label: "Button",
  },
};

// 3. export로 변수를 선언해서 객체들을 할당
export const Solid = {
    args: {
      variant: "solid",
    },
    parameters: { // storybook 사이트의 툴바 설정
      backgrounds: {
        values: [
          {
            name: "blue",
            value: "blue",
          },
          {
            name: "red",
            value: "red",
          },
        ],
      },
    },
  };
  

export const Outline = {
  args: {
    variant: "outline",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};
