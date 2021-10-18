import * as React from 'react';

function FlipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 73 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.375 35.833c0 5.949 4.858 10.75 10.875 10.75s10.875-4.801 10.875-10.75c0-5.948-4.858-10.75-10.875-10.75s-10.875 4.802-10.875 10.75z"
        fill="#E3F2FD"
      />
      <path
        d="M21.75 28.667V21.5H11.201A28.976 28.976 0 0136.25 7.167c13.485 0 24.831 9.173 28.058 21.5h7.467C68.404 12.327 53.795 0 36.25 0a36.336 36.336 0 00-29 14.37V7.166H0v21.5h21.75zM50.75 43v7.167h10.549A28.976 28.976 0 0136.25 64.5c-13.485 0-24.831-9.173-28.057-21.5H.725c3.371 16.34 17.98 28.667 35.525 28.667a36.336 36.336 0 0029-14.37V64.5h7.25V43H50.75z"
        fill="#E3F2FD"
      />
    </svg>
  );
}

export default FlipIcon;
