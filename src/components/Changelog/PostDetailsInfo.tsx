import React from 'react';

import { CalendarIcon, TagIcon } from './icons'

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
        <CalendarIcon />
        <span>{date}</span>
      </span>
      <span className="flex items-center text-gray-500 space-x-2">
        <span className="flex items-center space-x-1">
          <TagIcon />
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
