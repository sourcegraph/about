import React from 'react';

interface PostInfoProps {
  version: string;
  avatar: string;
  username: string;
  keywords: string[];
  date: string;
}

export function PostDetailsInfoContainer({ children }: { children: React.ReactNode }): any {
  return children;
}

export function PostDetailsInfo({ version, avatar, username, keywords, date }: PostInfoProps): any {
  return (
    <div className="flex items-center space-x-6 my-4 mb-8 text-[#111928] text-sm font-sans">
      <span  className="flex items-center space-x-2 text-[#111928] text-sm font-sans" >
        <img
          src={avatar}
          alt={username}
          className="w-[28px] h-[28px] rounded-full"
        />
        <span className="text-[#111928] font-sans text-sm font-normal leading-[150%] tracking-[0px]">{username}</span>
      </span>
      <span className="flex items-center text-gray-500 space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.33333 1.33334V4.00001M10.6667 1.33334V4.00001M2 6.66668H14M3.33333 2.66668H12.6667C13.403 2.66668 14 3.26363 14 4.00001V13.3333C14 14.0697 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0697 2 13.3333V4.00001C2 3.26363 2.59695 2.66668 3.33333 2.66668Z"
            stroke="#A6B6D9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{date}</span>
      </span>

      <span className="flex items-center text-gray-500 space-x-2">
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              >
              <path
                d="M5.41602 8.33332C5.64613 8.33332 5.83268 8.14678 5.83268 7.91666C5.83268 7.68654 5.64613 7.49999 5.41602 7.49999C5.1859 7.49999 4.99935 7.68654 4.99935 7.91666C4.99935 8.14678 5.1859 8.33332 5.41602 8.33332Z"
                fill="#A6B6D9"
                />
              <path
                d="M12.4993 4.16666L17.7493 9.41666C17.9358 9.60246 18.0837 9.82325 18.1847 10.0664C18.2856 10.3095 18.3376 10.5701 18.3376 10.8333C18.3376 11.0966 18.2856 11.3572 18.1847 11.6003C18.0837 11.8434 17.9358 12.0642 17.7493 12.25L14.166 15.8333M7.98768 4.65499C7.6752 4.34241 7.25134 4.16675 6.80935 4.16666H2.49935C2.27834 4.16666 2.06637 4.25445 1.91009 4.41073C1.75381 4.56701 1.66602 4.77898 1.66602 4.99999V9.30999C1.66611 9.75198 1.84177 10.1758 2.15435 10.4883L6.90768 15.2417C7.28644 15.618 7.79872 15.8293 8.33268 15.8293C8.86664 15.8293 9.37892 15.618 9.75768 15.2417L12.741 12.2583C13.1174 11.8796 13.3286 11.3673 13.3286 10.8333C13.3286 10.2994 13.1174 9.78708 12.741 9.40832L7.98768 4.65499ZM5.83268 7.91666C5.83268 8.14678 5.64613 8.33332 5.41602 8.33332C5.1859 8.33332 4.99935 8.14678 4.99935 7.91666C4.99935 7.68654 5.1859 7.49999 5.41602 7.49999C5.64613 7.49999 5.83268 7.68654 5.83268 7.91666Z"
                stroke="#A6B6D9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
                {keywords.map((keyword, index) => (
            <span key={index} className="text-[#111928] font-sans text-sm font-normal leading-[150%] tracking-[0px]">
              {keyword}, 
            </span>
        ))}
        <span  className="text-[#111928] font-sans text-sm font-normal leading-[150%] tracking-[0px]">
          {version}
            </span>
        
          </span>
      </span>
    </div>
  );
}
