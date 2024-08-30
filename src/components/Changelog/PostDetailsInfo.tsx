import React from 'react';

import { Calendar, Tags } from 'lucide-react'

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
    <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center space-y-4 2xl:space-y-0 2xl:space-x-6 my-4 mb-8 text-gray-700 text-sm font-sans">
      <span className="flex items-center space-x-2 text-gray-700 text-sm font-sans">
        <img
          src={avatar}
          alt={username}
          className="w-[28px] h-[28px] rounded-full"
        />
        <span className="text-gray-700 font-sans text-sm font-normal leading-[150%] tracking-[0px]">
          {username}
        </span>
      </span>

      <span className="flex items-center text-gray-500 space-x-1">
        <Calendar className="w-4 h-4 text-gray-300" />
        <span>{date}</span>
      </span>

      <span className="flex flex-wrap md:flex-nowrap items-center text-gray-500 space-x-2">
        <span className="flex items-center space-x-1">
          <Tags className="w-5 h-5 text-gray-300" />
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="text-gray-700 font-sans text-sm font-normal leading-[150%] tracking-[0px]"
            >
              {keyword},
            </span>
          ))}
          <span className="text-gray-700 font-sans text-sm font-normal leading-[150%] tracking-[0px]">
            {version}
          </span>
        </span>
      </span>
    </div>

  );
}
