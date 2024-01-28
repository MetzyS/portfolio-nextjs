"use client";
import { useAvatarColors } from "@/app/stores/useAvatarColors";

export const AvatarHappy = (props: {
  width: number;
  height: number;
  className?: string;
}) => {
  const { shirt, skin, laptop } = useAvatarColors();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 738.1"
      width={props.width}
      height={props.height}
      className={props.className}
    >
      <path
        d="M552.34 685.01l29.54-13.27-15.05-30.28H430.05l23.28 74.25a12.93 12.93 0 0 1-5.92 15.09l.09.15c16.95-7.07 57.11-24.74 89.63-39.17l15.22-6.77z"
        className={laptop}
      />
      <path
        d="M554.24 611.37c-4.71-9.25-10.95-17.63-18.45-24.81-9.95 8.41-23.87 6.09-36.3 4.11-6.84-1.09-13.7-1.99-20.59-2.69-3.61-.47-7.25-.59-10.89-.37a41.97 41.97 0 0 0-23.46 11.03c-6.4 6.04-12.14 12.73-17.14 19.97l-3.34 3.78 23.51 74.99 8.32-8.74 7.96-8.04 6.33-6.4c6.21-6.28 10.32-10.92 15.56-16.45-4.31 8.87-6.68 12.71-12.48 25.37-1.06 2.33-.64 8.02 2.29 10.3 4.48 3.44 10.28-.42 11.69-1.9 9.92-10.34 17.14-20.79 26.75-28.45a105.75 105.75 0 0 0 38.53-11.8c1.53-.83 6.15-4.93 7.59-5.91a51.29 51.29 0 0 1 6.68-3.9 167.54 167.54 0 0 0-12.57-30.09z"
        className={skin}
      />
      <path
        d="M467.79 333.98l-6.76 2.39c-13.62 4.48-33.85 3.87-47.6.81-18.26-4.06-29.13-16.85-37.21-31.76-18.41 5.99-50.59 18.04-66.61 28.19-6.58 4.07-12.22 9.49-16.55 15.91a112 112 0 0 0-9.56 25.6l-5.43 28.91-2.84 20.11c-20.05 6.65-49.1 14.78-61.99 18.84 6.51 22.83 13.93 47.76 22.46 70.35l139.57.67a20.15 20.15 0 0 1 19.09 14.07l29.79 94.61 3.26-4.09c4.99-7.24 10.74-13.93 17.14-19.97a41.97 41.97 0 0 1 23.46-11.03c3.63-.22 7.28-.1 10.89.37 6.89.7 13.75 1.6 20.59 2.69 12.43 1.98 26.36 4.3 36.3-4.11 14.86 13.15 28.14 41.07 33.62 64.41 19.23-6.37 54.57-20.12 76.54-36.55 15.51-11.6 19.67-23.5 23.5-34.76 2.21-6.54 3.98-22.73 4.23-29.52.33-8.79-3.47-33.96-5.76-45.93-5.09-28.08-9.23-46.93-24.76-101.18-7.83-27.34-20.38-52.69-32.13-65.01-13.08-13.71-28.05-21.73-45.87-28.17a436.44 436.44 0 0 0-44.92-14.57c-11.42 18.39-32.13 31.01-52.45 38.71z"
        className={shirt}
      />
      <path
        d="M279.34 382.88a70.02 70.02 0 0 0 1.22-47.99c-1.52-4.43-3.71-8.94-7.69-11.41-4.74-2.94-10.57-2.23-16.08-.55l-1.05-4.07c-4.11-15.98-14.1-44.36-22.06-58.73-2.45-4.43-4.65-7.94-8.85-9.78-3.83-1.67-8.86-1.6-11.48 1.44a15.55 15.55 0 0 0-2.88 12.33c.5 2.63 1.25 5.2 2.25 7.68l11.15 30.57 1.96 5.19c-1.98-.18-3.97-.2-5.96-.06a14.12 14.12 0 0 0-9.29 4.17c-3.12 3.03-5.04 7.73-1.72 12.08-.78-.06-1.56-.03-2.33.1-4.13.83-6.42 1.74-7.93 6.59-1.88 6.08 2.59 13.32 4.13 11.67-3.62-.47-7.83-.13-9.89 2.21a30.19 30.19 0 0 0-7.77 15.66c-1.08 4.9 2.05 13.33 5.03 16.81a218.84 218.84 0 0 0 17.06 19.2c3.65 3.11 6.89 6.67 9.65 10.6 2.93 4.75 7.99 23.96 8.8 27.77l.98 4.58c17.05-5.04 41.13-12.02 56.04-17.34l-.17-.82c-2.08-9.45-4.79-18.75-8.12-27.84a67.36 67.36 0 0 0 4.99-10.07zm239.58-88.11l1.55.59-3.27 4.41c-13.26 17.91-35.49 29.8-56.16 36.6-13.62 4.48-33.85 3.87-47.6.81-16.93-3.76-27.51-15.03-35.4-28.53v-9.06a85.63 85.63 0 0 1-24.9-13.73c-17.5-13.55-25.54-35.45-28.88-59.81l-6.4-46.24c-3.69-18.78 5.79-55.4 49.03-67.39 51.45-14.26 91.31-9.81 115.25 5.48 36.9 23.56 29.57 64.61 29.57 64.61 3.22-2.31 7.21-3.3 11.14-2.77a14.01 14.01 0 0 1 11.85 7.71c3.59 7.37 2.24 20.21-1.33 27.92a40.69 40.69 0 0 1-14.86 18.48c-4.48 2.5-9.53 3.8-14.66 3.78l-.85 2.13c-1.76 3.94-5.99 10.87-5.99 10.87l-2.68 4.08 2.51 12.03c2.68 11.08 4.46 15.6 7.29 19.07 2.19 2.7 8.75 6.56 14.8 8.95z"
        className={skin}
      />
      <path d="M317.93 112.84c-.92 4.03-1.66 8.17-2.25 12.39a175.19 175.19 0 0 0 .71 45.92L329 160.51c12.46-11.4 34.29-28.42 49.31-34.71 1.76-.73 3.91.48 4.47 3.12 1.13 5.34-1.55 12.75 2.6 11.5 7.34-2.23 29.93-15.4 46.8-20.71l15.22 6.03c5.39 2.82 10.32 6.46 14.62 10.77 12.84 12.03 19.3 26.05 27.54 46.96a5.34 5.34 0 0 0 7.15 2.43c.57-.28 1.08-.66 1.51-1.11l13.47-2.27c3.22-2.31 7.21-3.3 11.14-2.77a14.01 14.01 0 0 1 11.85 7.71 18.37 18.37 0 0 1 1.32 3.82c5.73-12.3 6.73-33.95 7.01-44.38a146.05 146.05 0 0 0-5.42-36.1c-5.5-18.97-11.96-29.65-27.03-45.11-32.78-32.02-67.21-35.99-90.18-33.95-30.13 2.69-52.63 10.02-71.45 29.02l-15.1 17.29c-7.84 10.26-13.27 22.16-15.9 34.8zm-38.2 281.83c9.27-16.18 12.23-35.22 8.29-53.45-1-5.76-3.07-11.29-6.11-16.29-3.52-5.41-9.47-8.76-15.93-8.96-6.21-.27-12.38 2.02-18.02 4.32-11.02 4.48-23.31 13.29-20.7 26.95a15.73 15.73 0 0 0 12.68 12.69c3.79.26 7.6-.26 11.18-1.52l11.29-3.01c6.84-1.83 3.94-12.44-2.92-10.61-5.08 1.36-10.16 2.95-15.31 4.06a4.61 4.61 0 0 1-5.91-2.77 4.29 4.29 0 0 1-.24-1c-1.66-8.29 9.69-13.01 15.61-15.26 3.97-1.51 8.47-3.27 12.8-2.82 3.92.41 6.12 3.17 7.72 6.54 3.53 8.25 5.07 17.21 4.52 26.16-.4 10.34-3.3 20.43-8.44 29.4-3.52 6.16 5.98 11.71 9.5 5.55h0z" />
      <path
        d="M269.82 396.58c3.05 8.37 5.51 16.95 7.35 25.67.82 2.92 3.84 4.63 6.77 3.84 2.88-.87 4.57-3.85 3.84-6.77-1.84-8.72-4.3-17.3-7.35-25.67-.81-2.93-3.84-4.65-6.77-3.84s-4.65 3.84-3.84 6.77h0z"
        fill="#211715"
      />
      <path d="M287.09 414.09c-24.41 9.73-50.26 15.72-75.3 23.6-2.9.85-4.6 3.84-3.84 6.77 6.81 23.87 13.9 47.7 22.67 70.94.88 2.87 3.85 4.56 6.77 3.84 2.92-.83 4.63-3.84 3.84-6.77-8.77-23.24-15.87-47.06-22.68-70.94l-3.84 6.77c25.04-7.87 50.89-13.87 75.3-23.61a5.67 5.67 0 0 0 3.85-6.76c-.83-2.92-3.84-4.63-6.77-3.84h0zm-57.91-113.17l-11.33-31.05c-1.41-3.9-2.98-8.14-1.54-12.27 1.06-3.04 3.42-3.48 6.34-2.24 3.17 1.34 4.89 4.99 6.44 7.82 1.65 3.01 3.14 6.11 4.55 9.24 3.37 7.47 6.28 15.16 9.01 22.89 2.9 8.23 5.6 16.55 7.79 25 1.78 6.85 12.39 3.94 10.61-2.92a309.84 309.84 0 0 0-18.87-52.62c-3.84-8.25-8.4-18.19-18.13-20.48a14.83 14.83 0 0 0-14.83 3.92 20.39 20.39 0 0 0-4.29 15.45c.76 6.77 3.84 13.26 6.15 19.62l7.5 20.56c.87 2.88 3.85 4.57 6.77 3.84 2.91-.83 4.62-3.84 3.84-6.77h0z" />
      <path d="M209.21,373.05c5.96,5.23,15.21,13.79,23.76,10.18,7.7-3.68,10.95-12.91,7.26-20.6-.09-.2-.19-.39-.29-.58-3.29-4.61-7.14-8.8-11.46-12.46-5.63-5.26-12.33-9.23-19.65-11.63-6.56-2.37-15.49-2.57-20.4,3.13-4.96,5.74-9.05,13.47-9.03,21.25.01,8.37,4.29,15.25,9.44,21.42,5.06,6.24,10.48,12.18,16.22,17.8,3.09,2.59,5.72,5.69,7.75,9.17.14.27.26.56.38.84-.23-.55-.11-.27.04.12.28.73.55,1.46.82,2.2.56,1.56,1.07,3.14,1.57,4.72,1.79,5.67,3.47,11.43,4.73,17.24,1.51,6.92,12.11,3.99,10.61-2.92-1.83-9.23-4.6-18.24-8.25-26.91-2.64-5.92-7.81-10.19-12.36-14.62-4.62-4.67-9-9.57-13.12-14.69-3.41-4.1-7.47-9.22-6.79-15.4.41-2.47,1.18-4.88,2.27-7.14,1.05-2.34,2.54-4.46,4.4-6.23,3.4-2.05,9.99.92,13.67,2.58,4.41,2.15,8.4,5.07,11.78,8.63,2.05,2,4.08,4.02,6.01,6.14.42.46.84.94,1.24,1.42.44.54.49.6.16.16.18.24.35.49.51.74.28.78.36,1.62.23,2.43-.1,1-.53,1.95-1.23,2.68-.92.83-1.01.46-2.16-.14-3.71-2.02-7.16-4.47-10.29-7.3-5.31-4.65-13.12,3.1-7.78,7.78h-.03Z" />
      <path d="M205.27 338.34c-.25-.34-.48-.69-.69-1.05-.16-.28-.57-1.31-.25-.46a13.68 13.68 0 0 1-.47-1.54c-.04-.15-.23-1.67-.17-.77-.05-.58-.05-1.17 0-1.75-.07.83.21-.81.23-.87.05-.17.69-1.63.14-.53l.6-1.11c.63-1.18-.55 1.02.05-.06.12-.13.25-.24.38-.36.31-.27.17-.16-.44.34a4.4 4.4 0 0 1 .9-.5l-.49.22.53-.18c.79-.26 1.59-.46 2.41-.58-1.19.15.53.08.65.08l1.62.14.55.06 1.88.38 3.68 1.06 3.11 1.01 1.54.56c1.05.39-.4-.25.69.3l2.8 1.58c.78.49-.03-.08.37.28l1.15 1.13c.25.29.25.26 0-.08l.46.66c.29.45.56.92.8 1.41.17.35.16.32-.02-.08.1.25.18.51.25.77a14.27 14.27 0 0 1 .42 1.83c.82 2.92 3.84 4.64 6.77 3.84 2.88-.88 4.56-3.85 3.84-6.77a19.82 19.82 0 0 0-11.77-14.3c-5.68-2.74-11.82-4.36-18.11-4.79a15.12 15.12 0 0 0-13.7 6.81c-3.3 5.93-2.98 13.21.83 18.83a5.64 5.64 0 0 0 7.53 1.97 5.57 5.57 0 0 0 1.97-7.53h-.02z" />
      <path d="M212.63 319.14v-.6c-.07.38-.06.37.02 0 .03-.12.4-1.21.16-.66.18-.36.37-.72.6-1.06.35-.58.16-.27.44-.58a16.81 16.81 0 0 1 1.67-1.6c-.61.51-.09.07.27-.15l.88-.52c.25-.14 1.09-.5.41-.23.45-.17.92-.32 1.39-.44.68-.2 1.39-.31 2.1-.32 2.14-.1 4.29-.02 6.42.23 1.05.11-.59-.1.39.05l1.41.23 2.79.59c1.8.35 3.55.91 5.23 1.66a7.26 7.26 0 0 1 2.98 2.48c.91 1.23 1.33 2.76 1.19 4.28a5.5 5.5 0 1 0 11 0 17.99 17.99 0 0 0-8.48-15.61c-5.08-2.78-10.72-4.38-16.5-4.69-5.66-.97-11.48-.04-16.54 2.66-5.18 2.95-8.5 8.33-8.8 14.28a5.5 5.5 0 1 0 11 0z" />
      <path d="M525.98 291.25c-1.9-.45-3.77-1.05-5.58-1.78l-.27-.1-1.59-.71-2.74-1.35c-1.69-.88-3.34-1.84-4.93-2.9l-1.18-.83c-.99-.69.94.8.07.05l-1.53-1.43c-.37-.39-.64-1.15.2.3-.16-.27-.38-.51-.55-.77l-.92-1.46-.86-1.67c-.07-.16-.39-.61-.36-.79l.2.46-.23-.6a100.15 100.15 0 0 1-3.59-12.38c-.83-2.91-3.84-4.62-6.77-3.84-2.89.86-4.58 3.85-3.84 6.77 1.81 7.48 3.64 15.86 8.94 21.78 2.84 2.82 6.16 5.13 9.79 6.83 4.04 2.22 8.34 3.91 12.81 5.04 2.93.81 5.96-.91 6.77-3.84s-.91-5.96-3.84-6.77h0z" />
      <path d="M373.28 311.43a71.24 71.24 0 0 0 21.07 23.55c9.4 6.32 20.42 8.56 31.51 9.6 11.49 1.32 23.12.57 34.35-2.22a136.13 136.13 0 0 0 31.7-13.72c11.66-6.6 21.88-15.48 30.04-26.1a5.55 5.55 0 0 0-1.97-7.53 5.64 5.64 0 0 0-7.53 1.97c-12.38 16.5-32.06 26.99-51.22 33.52-9.67 3.03-19.83 4.2-29.94 3.45-9.34-.46-19.22-1.64-27.55-6.16-9.17-4.97-15.73-13.07-20.96-21.92-3.59-6.1-13.11-.56-9.5 5.55h0z" />
      <path d="M516.74 300.11c10.13 2.45 20.13 5.44 29.95 8.96 9.06 3.15 18.27 6.19 27.05 10.07 14.75 6.51 29.04 15.83 38.59 29.07 10.49 14.55 17.67 31.59 23.15 48.57 5.55 17.19 10.11 34.82 14.67 52.31 5.77 22.11 10.61 44.47 14.27 67.03 2.02 12.43 4.47 25.39 3.5 38.02-1.02 13.29-3.18 26.51-9.65 38.34-8.01 14.63-23.07 23.42-37.38 30.98-14.29 7.44-29.1 13.87-44.3 19.23l-8.66 3c-6.69 2.22-3.82 12.85 2.92 10.61a397.46 397.46 0 0 0 43.86-17.5c15.88-7.47 33.27-16.21 45.08-29.54 9.91-11.18 15.35-25.76 17.46-40.4 1.16-6.75 1.8-13.59 1.92-20.44a169.42 169.42 0 0 0-1.96-20.36c-3.32-24.36-8.01-48.51-14.02-72.34-4.08-16.33-8.61-32.55-13.22-48.75-5.5-19.29-12.28-38.38-22.55-55.7-8.71-14.74-21.1-26.97-35.96-35.47-8.27-4.62-16.93-8.5-25.88-11.6-10.16-3.68-20.31-7.39-30.65-10.54-5.04-1.54-10.14-2.93-15.28-4.13-6.89-1.6-9.83 9-2.92 10.61h.01zm26.45 269.67c11.29-4.79 22.15-10.37 33.18-15.71a5.53 5.53 0 0 0 1.97-7.53 5.64 5.64 0 0 0-7.53-1.97c-11.03 5.34-21.88 10.92-33.18 15.71-2.62 1.53-3.51 4.9-1.98 7.53a5.68 5.68 0 0 0 7.53 1.97zM283.39 405.5c1.6-11.16 3.78-22.24 6.51-33.18 2.16-7.52 4.7-16 9.5-22.32 5.44-7.17 13.1-12.05 20.96-16.17 8.47-4.36 17.16-8.27 26.04-11.73 9.89-3.95 19.9-7.6 30.03-10.95 6.69-2.21 3.83-12.84-2.92-10.61-19.41 6.15-38.34 13.74-56.62 22.72-8.79 4.09-16.74 9.79-23.45 16.8-6.44 7.2-9.86 16.11-12.84 25.17-3.97 12.03-5.58 24.91-7.81 37.35-.72 2.92.97 5.89 3.84 6.77 2.93.78 5.94-.93 6.77-3.84h-.02zm267.09 60.63l16.77 61.4c1.86 6.82 12.48 3.93 10.61-2.92l-16.77-61.4c-1.86-6.82-12.48-3.93-10.61 2.92zM530.9 583.4c-7.81 4.99-17.51 3.88-26.25 2.54-10.81-1.65-21.86-3.81-32.82-3.96-22.34-.31-37.01 17.51-49.16 33.85a5.55 5.55 0 0 0 1.97 7.53 5.64 5.64 0 0 0 7.53-1.97c5.73-7.72 11.68-15.89 19.61-21.52 3.67-2.71 7.79-4.73 12.17-5.98a40.36 40.36 0 0 1 14.41-.47c10.21 1.01 20.27 2.93 30.45 4.1 9.46 1.09 19.39.65 27.64-4.62 5.96-3.8.44-13.33-5.55-9.5h0zm-84.95 40.06l-16.82 16.68a5.51 5.51 0 0 0 .06 7.78 5.5 5.5 0 0 0 7.72 0l16.82-16.68a5.51 5.51 0 0 0-.06-7.78 5.5 5.5 0 0 0-7.72 0zm1.56 47.87c8.48-9.92 17.78-19.14 27.05-28.3a5.51 5.51 0 0 0-.06-7.78 5.5 5.5 0 0 0-7.72 0c-9.28 9.17-18.57 18.39-27.05 28.3a5.501 5.501 0 1 0 7.78 7.78h0zm12.29 21.19l18.71-19 16.18-17.1a5.51 5.51 0 0 0-.06-7.78 5.5 5.5 0 0 0-7.72 0c-5.52 5.59-10.77 11.42-16.18 17.1-6.13 6.43-12.46 12.68-18.71 19a5.51 5.51 0 0 0 .06 7.78 5.5 5.5 0 0 0 7.72 0z" />
      <path d="M514.62 668.5c11.23-1.31 22.23-4.19 32.66-8.57a50.37 50.37 0 0 0 12.24-7.04l2.25-1.85a43.82 43.82 0 0 1 1.11-.9c.71-.56-.62.44-.09.07a60.17 60.17 0 0 1 6.85-4.02c2.61-1.55 3.47-4.93 1.92-7.54a5.5 5.5 0 0 0-7.47-1.96 57.28 57.28 0 0 0-10.59 6.96c-1.04.92-2.14 1.78-3.28 2.59a49.63 49.63 0 0 1-6.71 3.39 101.77 101.77 0 0 1-28.89 7.86c-3 .09-5.41 2.5-5.5 5.5.02 3.03 2.47 5.48 5.5 5.5h0z" />
      <path d="M529.89 588.78c8.86 6.61 15.32 17.21 20.45 26.97a156.47 156.47 0 0 1 13.75 36.68c1.64 6.88 12.25 3.97 10.61-2.92a168.73 168.73 0 0 0-15.3-40.13c-6.05-11.33-13.58-22.35-23.97-30.11a5.55 5.55 0 0 0-7.53 1.97 5.64 5.64 0 0 0 1.97 7.53h0zm-50.53 69.53l-6.79 13.45a92.46 92.46 0 0 0-4.66 10.05 15.99 15.99 0 0 0-.08 8.94 12.57 12.57 0 0 0 15.22 9.17 12.47 12.47 0 0 0 1.98-.67c6.61-2.63 10.97-9.01 15.47-14.23 5.21-6.47 10.98-12.47 17.25-17.92 2.13-2.16 2.13-5.62 0-7.78a5.63 5.63 0 0 0-7.78 0c-10.14 8.25-17.53 19.15-26.66 28.4-.14.14-.92.75-.31.3.66-.48-.72.42-.87.51-.26.15-1.31.62-.5.3-.32.13-1.63.5-1.34.46a1.35 1.35 0 0 1-1.4-.25c.53.31-.31-.52.19.23a7.12 7.12 0 0 1-.48-.85c.26.51.1.35 0-.09-.11-.5-.27-.98-.35-1.49.18 1.04.04-.39.02-.75 0-.23.05-.46.03-.69.01.12-.27.92-.06.41.07-.17.07-.39.13-.57.28-.81-.25.49.17-.41l3.67-7.76 6.66-13.19a5.64 5.64 0 0 0-1.97-7.53 5.56 5.56 0 0 0-7.53 1.97v-.03zm-2.22-375.41a134.52 134.52 0 0 0 20.31-23.04c3.95-5.44 7.4-11.24 10.29-17.31a5.67 5.67 0 0 0-1.97-7.53 5.55 5.55 0 0 0-7.53 1.97c-2.8 5.88-6.12 11.49-9.92 16.78-5.47 7.83-11.83 14.99-18.96 21.34a5.51 5.51 0 0 0 .06 7.78 5.5 5.5 0 0 0 7.72 0h0zM329.94 74.15c-12.33 15.94-18.18 35.07-20.22 54.94a176.21 176.21 0 0 0 4.32 58.87c1.67 6.88 12.28 3.97 10.61-2.92-4.29-17.77-5.67-36.12-4.07-54.33 1.53-17.17 6.48-34.98 17.16-48.78a5.69 5.69 0 0 0 0-7.78 5.53 5.53 0 0 0-7.79 0h0zm210.82 119.9c4.52-9.98 6-21.04 6.93-31.88 1-9.53.99-19.13-.05-28.65-2.72-21.46-8.81-42.32-22.34-59.53-15.09-19.41-35.44-34.07-58.63-42.26-18.07-6.17-36.86-6.92-55.65-4.48a136.06 136.06 0 0 0-36.36 9.32c-11.08 4.81-21.14 11.69-29.63 20.28-5.01 5.01 2.76 12.8 7.78 7.78 14.21-14.21 32.06-21.85 51.66-25.35 17.28-3.08 34.82-3.64 51.74.79 21.45 5.97 40.69 18.04 55.4 34.75 6.53 6.99 11.88 14.99 15.86 23.69a123.54 123.54 0 0 1 8.06 28.14 125.32 125.32 0 0 1 1.52 30.4c-.65 10.37-1.48 21.86-5.81 31.43a5.67 5.67 0 0 0 1.97 7.53 5.55 5.55 0 0 0 7.53-1.97h0z" />
      <path d="M450.59 285.61c-23.8 11.71-52.21 17.84-77.29 6.22-11.68-5.05-21.75-13.21-29.11-23.59-6.76-10.8-11.28-22.85-13.29-35.43-3.29-17.44-4.67-35.26-7.44-52.79-.82-2.92-3.84-4.63-6.77-3.84-2.88.87-4.58 3.85-3.84 6.77 2.66 16.79 4.13 33.78 7.03 50.53 2.07 13.9 6.87 27.25 14.14 39.28 15.43 24.07 44.71 37.54 72.92 36.23 17.38-.81 33.7-6.24 49.21-13.87a5.55 5.55 0 0 0 1.97-7.53 5.62 5.62 0 0 0-7.53-1.97h0zm63.89-98.34c3-2.18 6.88-2.73 10.37-1.48a7.32 7.32 0 0 1 4.75 3.8c3.12 5.78 1.83 14.4-.08 20.48a37.4 37.4 0 0 1-11.16 17.12c-4.4 3.69-12.48 6.82-18.39 4.3a5.69 5.69 0 0 0-7.53 1.97 5.55 5.55 0 0 0 1.97 7.53 30.46 30.46 0 0 0 24.84-1.31c7.15-3.32 12.84-10.15 16.57-16.94 3.83-6.83 6.03-14.46 6.42-22.29.33-7.11-.92-15.07-6.11-20.34-7.44-6.99-18.7-7.95-27.22-2.34a5.66 5.66 0 0 0-1.97 7.53 5.55 5.55 0 0 0 7.53 1.97h0zm-74.84-1.19c1.63 4.9.9 16.27-8.43 17.46-12.38.2-13.34-13.52-9.32-20.07 3.29-5.36 13.26-7.79 17.75 2.6zm-72.96.18c1.51 4.76.87 15.8-7.69 16.92-11.34.17-12.27-13.15-8.61-19.48 3-5.2 12.14-7.53 16.3 2.56zm18.57 22.99l-4.31 8.46a12.16 12.16 0 0 0-1.38 4.9c-.03 2.19.94 4.28 2.64 5.66 1.26 1.14 2.78 1.95 4.43 2.35 1.08.21 2.14.23 3.21.37 1.46 0 2.86-.57 3.9-1.6a5.5 5.5 0 0 0 0-7.78l-1.11-.86a5.52 5.52 0 0 0-2.78-.75l-1.46-.12 1.46.2c-.43-.06-.85-.18-1.25-.35l1.32.55a6.27 6.27 0 0 1-1.05-.64l1.11.86a6.77 6.77 0 0 1-.69-.63l.86 1.11a1.81 1.81 0 0 1-.19-.29l.55 1.31c-.06-.16-.11-.32-.14-.49l.19 1.46c-.02-.24-.01-.49.02-.73l-.19 1.46a6.61 6.61 0 0 1 .4-1.31l-.55 1.31c1.32-3.05 2.89-6 4.51-8.9a5.75 5.75 0 0 0 .55-4.24c-.8-2.93-3.83-4.65-6.76-3.85a5.47 5.47 0 0 0-3.29 2.53h0zm59.38-78.76c12.06 6.85 21.9 17.02 28.34 29.31 3.55 6.62 6.7 13.44 9.42 20.44 1.54 3.82 2.58 7.96 6.37 10.19 3.89 2.19 8.72 1.84 12.25-.88a5.67 5.67 0 0 0 1.97-7.53 5.55 5.55 0 0 0-7.53-1.97c-.06.05-1.63.78-1.04.97.34.11-.12-.44-.3-.9l-1.12-2.79-4.56-10.87c-2.61-6.11-5.69-12.01-9.21-17.65A80.86 80.86 0 0 0 450.19 121c-6.24-3.35-11.8 6.15-5.55 9.5h0zM332.9 164.4c13.34-12.15 28.12-24.07 44.37-32.09.89-.35 1.75-.75 2.58-1.21 1.38-.94-.55.09-1.17-.09l-1.22-.85.03.23c-.04.74 0 1.48.11 2.21 0 1.2-.09 2.4-.12 3.59-.12 4.37 1.2 9.14 6.25 9.78 3.27.41 6.73-1.57 9.61-2.88 3.53-1.6 6.99-3.34 10.47-5.06 9.33-4.89 18.99-9.13 28.9-12.71 6.69-2.23 3.82-12.85-2.92-10.61-9.4 3.33-18.57 7.27-27.44 11.81l-11.73 5.73c-1.44.69-2.88 1.38-4.34 2-1.03.44-.28.11-.06.03-.28.11-.55.23-.83.33-.26.08-.51.17-.76.28-.17.06-.34.12-.52.17-1.88.55-.41 1.53 4.41 2.94-.29-.03.14-1.17-.03.03.02-.4.01-.8-.01-1.19 0-.92.07-1.83.1-2.75.2-2.5-.04-5.02-.71-7.44a9.4 9.4 0 0 0-5.66-6.01 10.09 10.09 0 0 0-7.89.97c-8.35 3.96-16.27 8.78-23.63 14.36-8.9 6.4-17.43 13.3-25.54 20.67-5.24 4.78 2.56 12.54 7.78 7.78h0zm76.73 110.56c1.54-1.26 2.95-2.67 4.22-4.21a50.86 50.86 0 0 0 4.04-5.83c2.51-4.41 5.53-11.24.14-14.8-2.67-1.77-6.6-1.05-9.64-.87l-9.76.73c-3.29.28-6.58.59-9.86 1a5.01 5.01 0 0 0-4.88 4.88c.11 2.38 2.17 5.21 4.88 4.88 6.75-.83 13.54-1.38 20.33-1.76l4.27-.19a3.09 3.09 0 0 0 .86-.02c-1-.02-1.92-.57-2.41-1.45 0-2.46-.11-3.18-.34-2.15-.2.54-.31 1.12-.5 1.67-.11.32-.23.63-.35.94q.14-.32 0 0c-1.01 2.15-2.23 4.18-3.66 6.07-.15.2-.3.41-.46.61.24-.32.19-.24-.17.22-.33.38-.65.76-1.02 1.11-.81.81-1.72 1.53-2.58 2.3a4.91 4.91 0 0 0 0 6.9c1.93 1.84 4.97 1.84 6.9 0h-.01zm39.33 461.3l53.54-23.2 61.58-27.31 20.57-9.27a5.55 5.55 0 0 0 1.97-7.53c-1.58-2.57-4.89-3.43-7.53-1.97l-108.28 48.01-14.56 6.3-6.09 2.6-1.74.74-2.4 1.01a5.68 5.68 0 0 0-3.84 6.77c.82 2.92 3.84 4.63 6.77 3.84h0z" />
      <path
        d="M86.08 512.09l289.21 1.93a20.15 20.15 0 0 1 19.09 14.07l58.95 187.63c2.13 6.81-1.66 14.05-8.46 16.18a12.72 12.72 0 0 1-3.92.59l-294.85-2.13a12.9 12.9 0 0 1-12.07-9.08L73.54 528.94c-2.16-6.8 1.6-14.07 8.4-16.24 1.34-.43 2.74-.63 4.14-.61z"
        className={laptop}
      />
      <path d="M86.08 517.59l98.89.97 115.53.59 48.6.23 18.98.1c7.03.04 14.26-.38 18.91 6.01 1.88 3.16 3.23 6.6 4.02 10.18l3.24 10.27 7.72 24.51 17.91 56.96 17.62 56.14 7.42 23.68c1.78 5.69 7 15.55-.74 19.09-2.61 1.19-5.96.67-8.78.66l-9.11-.03-21.02-.08-50.26-.21-114.34-.69-92.77-1.08c-3.44-.07-6.71-.88-8.29-4.33-1.1-2.86-2.02-5.78-2.75-8.76l-6.65-21.32-16.7-53.24L80.5 532.67c-.97-3.04-2.75-6.56-1.77-9.72.98-3.23 3.99-5.42 7.36-5.35 7.07-.09 7.09-11.09 0-11-10.3.03-18.62 8.41-18.59 18.7 0 1.2.12 2.39.36 3.57a108.79 108.79 0 0 0 3.26 10.59l3.6 11.36 17.17 54.36 33.8 107.75c2.52 8.13 4.24 17.11 12.75 21.11 6.43 3.03 14.99 1.97 21.98 2.07l47.08.57 116.3.81 103 .44 9.29.03a30.37 30.37 0 0 0 11.64-1.29c5.27-2.1 9.31-6.49 10.95-11.92 1.49-4.92.27-9.52-1.21-14.24l-15.92-50.8-35.93-114.29c-2.32-7.37-4.08-15.41-7.37-22.41-4.66-9.93-14.55-14.47-25.06-14.54l-41.11-.21-114.15-.53-111.34-.88-20.52-.29c-7.08-.11-7.08 10.89 0 11.01zm217.27-85.89c3.31 10.71 6.98 21.32 10.75 31.88.81 2.93 3.84 4.65 6.77 3.84s4.65-3.84 3.84-6.77c-3.76-10.56-7.45-21.17-10.75-31.88-.81-2.93-3.84-4.65-6.77-3.84s-4.65 3.84-3.84 6.77h0z" />
      <path
        d="M658.54 248.19c-.93-1.72-1.15-3.74-.63-5.63 2.58-10.39 6.16-20.5 10.69-30.19l1.6-2.21a199.21 199.21 0 0 0 36.55 16.52l-.19 2.75c.85 2.26-7.17 19.96-11.23 27.16-.71 1.27-1.62 2.42-2.69 3.41-2.17 1.42-4.73 2.13-7.32 2.01a143.12 143.12 0 0 1-20.49-8.69c-2.42-1.07-4.53-2.73-6.13-4.83l-.15-.3z"
        opacity=".4"
      />
      <path
        d="M742.3 146.47l2.75 3.69c9.53 13.33 10.81 30.87 3.33 45.45-3.2 6.61-7.7 12.51-13.22 17.35-4.04 3.79-8.56 7.02-13.46 9.61a58.72 58.72 0 0 1-12.68 4.81c-14.49-4.61-28.38-10.94-41.37-18.84-6.7-6.76-9.45-22.34-8.66-30.68a61.41 61.41 0 0 1 3.9-17.85 52.34 52.34 0 0 1 11.18-16.8c6.22-6.66 14.32-11.27 23.23-13.21 9.76-1.54 19.75-.25 28.8 3.71a47.25 47.25 0 0 1 16.21 12.77z"
        fill="#ffda71"
      />
      <path d="M738.41 150.36c4.44 5.47 7.46 11.96 8.78 18.89a40.05 40.05 0 0 1-3.37 23.18c-7.18 14.7-20.43 25.53-36.26 29.65h2.92a173.6 173.6 0 0 1-33.5-14.36 26.8 26.8 0 0 1-6.28-3.95 21.64 21.64 0 0 1-3.67-7.26c-1.81-5.23-2.72-10.73-2.67-16.26.41-23.61 18.75-47.02 43.74-45.43a42.34 42.34 0 0 1 30.31 15.55c2.16 2.12 5.62 2.12 7.78 0a5.61 5.61 0 0 0 0-7.78c-14.21-16.9-39-23.86-59.56-14.92-7.73 3.51-14.52 8.78-19.83 15.41-8.07 10.08-12.75 22.46-13.37 35.36-.74 10.4 1.69 20.77 6.99 29.75 3.23 5.03 8.19 7.56 13.34 10.32 5.29 2.81 10.73 5.32 16.25 7.65 4.87 2.06 9.79 4.02 14.8 5.68 2.23.94 4.71 1.11 7.06.49a67.66 67.66 0 0 0 9.73-3.61c9.11-4.26 17.16-10.48 23.6-18.2a55.25 55.25 0 0 0 13.52-34.76c-.2-12.17-4.63-23.89-12.52-33.16-2.16-2.13-5.62-2.13-7.78 0a5.64 5.64 0 0 0-.02 7.78zm-75.02 85.51c10.86 5.23 21.99 9.88 33.34 13.93 2.93.79 5.94-.92 6.77-3.84.73-2.92-.96-5.9-3.84-6.77-5.28-1.89-10.51-3.94-15.69-6.09l-1.02-.43c-.09-.03-1.02-.43-.62-.26s-.53-.23-.62-.27l-1.02-.44-4.01-1.76c-2.6-1.16-5.18-2.35-7.73-3.59-2.62-1.53-5.99-.65-7.53 1.97-1.53 2.62-.65 5.99 1.97 7.53h0z" />
      <path d="M663.85 209.59a56.01 56.01 0 0 0-3.88 8.75 216.62 216.62 0 0 0-4.28 11.92c-1.25 3.55-2.28 7.17-3.09 10.84-1.38 6.99 1.69 12.35 7.63 15.96 3.8 2.14 7.74 4.04 11.78 5.68 3.79 1.91 7.75 3.44 11.85 4.56 5.24.91 10.58-.96 14.09-4.96 2.42-3.3 4.46-6.87 6.06-10.65 2.15-4.49 4.19-9.05 5.98-13.7 1.15-3.01 2.79-6.77 1.88-10.04-1.9-6.81-12.52-3.92-10.61 2.92-.12-.54-.13-1.1-.03-1.65-.13.41-.23.83-.29 1.25-.35 1.3-.81 2.58-1.28 3.84-1.25 3.35-2.26 5.61-3.81 8.97-1.42 3.08-2.9 6.13-4.5 9.12-.59 1.28-1.39 2.45-2.35 3.48 1.02-.97-.37.06-.92.27-.55.1-1.08.24-1.6.42.69-.02-.61-.14-.92-.23-.66-.2-1.32-.43-1.97-.66a78.6 78.6 0 0 1-4.72-1.89c-3.64-1.58-7.24-3.26-10.8-5.03-2.82-1.4-5.42-2.4-4.66-5.64s1.75-6.47 2.79-9.66a222.59 222.59 0 0 1 4.17-11.69l1.02-2.56.39-.93c-.48 1.12.1-.23.17-.36a23.79 23.79 0 0 1 1.41-2.81c3.71-6.06-5.8-11.59-9.5-5.55h0zm108-95.73l-12.43 8.63c-1.21.75-2.11 1.92-2.52 3.29-.38 1.43-.18 2.95.55 4.24a5.55 5.55 0 0 0 3.29 2.52 5.47 5.47 0 0 0 4.24-.55l12.43-8.63a5.88 5.88 0 0 0 2.52-3.29c.38-1.43.18-2.95-.55-4.24a5.55 5.55 0 0 0-3.29-2.52 5.47 5.47 0 0 0-4.24.55zm-27.01-3.94a153.57 153.57 0 0 1 5.64-11.8 5.75 5.75 0 0 0 .55-4.24 5.62 5.62 0 0 0-2.52-3.29c-2.62-1.53-5.99-.65-7.53 1.97h0a159.46 159.46 0 0 0-5.64 11.8 4.13 4.13 0 0 0-.65 2.04c-.16.73-.13 1.48.1 2.19a5.62 5.62 0 0 0 2.52 3.29 5.56 5.56 0 0 0 4.24.55 5.32 5.32 0 0 0 3.29-2.52h0zm-27.37-6.25c-.54-5.57-1.21-11.15-2.22-16.66a5.55 5.55 0 0 0-2.52-3.29c-2.62-1.53-5.99-.65-7.53 1.97-.68 1.3-.88 2.8-.55 4.24a147.36 147.36 0 0 1 1.04 6.63l-.2-1.46a246.83 246.83 0 0 1 .98 8.57 5.96 5.96 0 0 0 1.6 3.9 5.5 5.5 0 0 0 7.78 0c1.04-1.03 1.62-2.43 1.6-3.9h0zm9.76 91.23a23.78 23.78 0 0 0-5.96-14.85c-3.44-4.26-7.96-8.89-13.57-9.84-5.02-.8-10.15.6-14.05 3.86-4.5 3.86-6.32 10.01-4.63 15.7 1.57 5.28 5.85 9.32 11.2 10.59 5.34 1.4 11.01-.41 14.56-4.64 4.01-4.19 5.57-10.16 4.13-15.78-1.5-5.03-4.54-9.46-8.69-12.68-9.24-8.65-23.75-8.17-32.4 1.08a24 24 0 0 0-1.6 1.9 5.65 5.65 0 0 0 0 7.78c2.16 2.12 5.62 2.12 7.78 0 4.19-4.94 9.63-7.67 15.57-4.72a19.55 19.55 0 0 1 6.72 5.56c.82 1.03 1.45 2.19 1.86 3.44l.23.83c.03.13.19 1.27.14.67-.04-.44-.25 2.13-.04 1.2-.19 1.1-.7 2.11-1.46 2.93-.25.27-.52.53-.8.78 0 0-.75.63-.32.3-.33.25-.7.46-1.05.69l-.53.3c.36-.12.36-.13.02-.02-.71.32.75.09-.03-.02-.61-.08-.07.04.04.05a11.04 11.04 0 0 1-2.34-.61c.61.23-.85-.44-1.19-.69.6.44-.12-.14-.19-.19l-.38-.39.04.06c-.2-.29-.38-.6-.53-.92-.39-.77.17.69-.04-.18l-.27-1.07c-.17-.9.02.71 0-.24a3.98 3.98 0 0 1 .76-2.81c.29-.32.6-.61.93-.89-.18.17-.97.58-.11.13.48-.26.94-.55 1.43-.8.75-.37-.75.23.09-.02.34-.1.67-.21 1.02-.3.13-.04 1.22-.23.61-.15s.81 0 .94-.02c.45-.02.9.06 1.32.23.58.29 1.11.64 1.6 1.06 1.66 1.39 3.2 2.92 4.6 4.57 1.16 1.33 2.13 2.82 2.87 4.42.4.88-.18-.58.12.33.15.46.3.92.41 1.39a10.77 10.77 0 0 1 .23 1.13c-.11-.92-.03.74-.03.84.04 7.08 11.05 7.09 11 0l-.03.02z" />
      <path
        d="M503.96 40.35s46.89 18.22 41.71 55.73c44.74-9.63 60.61-50.83 60.61-50.83s-37.89-89.44-102.31-4.89z"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="8"
        className="fill-black"
      />
      <path
        d="M565.93 19.06l4.6-.82 1.15-.14c1.86-.22-.88.02.19-.04l2.33-.09c3.22-.01 6.43.24 9.6.76-1.37-.21.66.15 1.11.25l2.26.59 4.43 1.49 2.16.89.79.36c-.71-.36.39.21.51.27 1.47.77 2.89 1.62 4.27 2.52a6.892 6.892 0 1 0 7.6-11.5l-.09-.06c-12.94-8.41-28.72-11.28-43.8-7.97a6.89 6.89 0 0 0-5.3 8.18c.79 3.72 4.45 6.09 8.17 5.3h.02zm-255.05 68.3l3.86.18 1.92.22c-1.15-.15.8.14 1 .17 2.41.42 4.78 1.03 7.1 1.81l1.51.54.86.34 3.18 1.56 2.91 1.78c.2.14 1.63 1.23.61.41l1.23 1.03c2.04 2.01 5.32 1.98 7.33-.06 1.98-2.02 1.98-5.25 0-7.27A48.77 48.77 0 0 0 310.85 77a5.19 5.19 0 0 0-5.19 5.18 5.19 5.19 0 0 0 5.18 5.19h.03z"
        className="fill-black"
      />
      <path d="M336.59 108.7c-8.43-1.66-17.17-.46-24.84 3.41a47.43 47.43 0 0 0-17.03 15.02c-1.42 2.48-.59 5.64 1.86 7.09 2.48 1.38 5.61.56 7.09-1.86a37.16 37.16 0 0 1 12.79-11.04c2.78-1.39 5.76-2.34 8.83-2.82 2.84-.37 5.72-.3 8.54.2 2.75.69 5.56-.91 6.38-3.62a5.24 5.24 0 0 0-3.62-6.38z" />
      <path
        d="M497.44 249.36v-48.54s-47.17 85.21-90.66 82.27-75.52-44.46-75.52-44.46-8.26 70.44 83.09 72.44c85.49-17.45 83.09-61.71 83.09-61.71z"
        className="fill-black"
      />
      <path
        d="M343.88,252.11s9.15-16.71,56.12-19.42,67.24,9.71,67.24,9.71v16.98s-38.06-14.16-64.78-16.36-54,19-54,19l-4.58-9.91Z"
        className="fill-black"
      />
      <path
        id="B"
        d="M534.78 139.72l3.51.11.86.08c1.4.13-.65-.12.15 0l1.73.3a42.89 42.89 0 0 1 6.94 2.06c-.97-.37.46.22.78.36l1.57.79 3.02 1.79 1.45 1 .53.39c-.47-.37.25.22.33.28.96.79 1.87 1.64 2.75 2.53 2.01 2.04 5.29 2.07 7.33.06s2.07-5.29.06-7.33l-.06-.06c-8.21-8.21-19.36-12.8-30.98-12.72-2.86 0-5.18 2.32-5.18 5.19a5.18 5.18 0 0 0 5.18 5.18h.02z"
        className="fill-black"
      />
    </svg>
  );
};