import * as React from 'react';

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.688 14.875V0h-4.375v14.875H0v4.25h15.313V34h4.374V19.125H35v-4.25H19.687z"
        fill="#fff"
      />
    </svg>
  );
}

export default PlusIcon;
