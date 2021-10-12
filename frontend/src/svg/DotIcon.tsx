import * as React from 'react';

function DotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 4 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.1}
        d="M2 14.571c.828 0 1.5-1.15 1.5-2.571 0-1.42-.672-2.571-1.5-2.571S.5 10.579.5 12c0 1.42.672 2.571 1.5 2.571zM2 6c.828 0 1.5-1.151 1.5-2.571C3.5 2.009 2.828.857 2 .857S.5 2.008.5 3.43C.5 4.849 1.172 6 2 6zM2 23.143c.828 0 1.5-1.151 1.5-2.572C3.5 19.151 2.828 18 2 18S.5 19.151.5 20.571c0 1.42.672 2.572 1.5 2.572z"
        fill="#fff"
      />
      <path
        d="M2 8.571c-.396 0-.782.202-1.111.578-.329.377-.585.913-.737 1.539a5.74 5.74 0 00-.114 1.98c.078.666.268 1.277.548 1.756.28.48.636.806 1.024.939.388.132.79.064 1.155-.195.366-.26.678-.7.898-1.263C3.883 13.34 4 12.678 4 12c0-.909-.212-1.78-.586-2.423C3.039 8.934 2.53 8.572 2 8.57zm0 5.143c-.198 0-.391-.1-.556-.289a1.828 1.828 0 01-.368-.769 2.869 2.869 0 01-.057-.99c.039-.333.134-.638.274-.878s.318-.403.512-.47a.623.623 0 01.578.098c.182.13.339.35.448.632.11.281.169.613.169.952 0 .454-.106.89-.293 1.212-.188.321-.442.502-.707.502zM2 6.857c.396 0 .782-.2 1.111-.578.329-.376.585-.912.737-1.538a5.74 5.74 0 00.114-1.981c-.078-.665-.268-1.276-.548-1.756S2.778.198 2.39.066C2.002-.066 1.6 0 1.235.26.869.521.557.96.337 1.524A5.318 5.318 0 000 3.429c0 .909.212 1.78.586 2.423.375.643.884 1.004 1.414 1.005zm0-5.143c.198 0 .391.1.556.29.164.188.292.455.368.769.076.313.095.657.057.99a2.285 2.285 0 01-.274.878c-.14.24-.318.403-.512.469a.623.623 0 01-.578-.098c-.182-.13-.339-.35-.448-.631A2.66 2.66 0 011 3.429c0-.455.106-.89.293-1.212.188-.321.442-.502.707-.503zM2 17.143c-.396 0-.782.2-1.111.578-.329.376-.585.912-.737 1.538a5.739 5.739 0 00-.114 1.981c.078.665.268 1.276.548 1.756s.636.806 1.024.938c.388.132.79.064 1.155-.195.366-.26.678-.699.898-1.263.22-.564.337-1.226.337-1.905 0-.909-.212-1.78-.586-2.423-.375-.642-.884-1.004-1.414-1.005zm0 5.143c-.198 0-.391-.1-.556-.29a1.828 1.828 0 01-.368-.768 2.87 2.87 0 01-.057-.991c.039-.333.134-.638.274-.878s.318-.403.512-.469a.623.623 0 01.578.098c.182.13.339.35.448.631.11.282.169.613.169.952 0 .455-.106.89-.293 1.212-.188.321-.442.502-.707.503z"
        fill="#fff"
      />
    </svg>
  );
}

export default DotIcon;