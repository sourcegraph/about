import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface PreProps extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  raw?: string
  dataLanguage?: string
  dataTheme?: string
}

const extractCodeContent = (children: ReactNode): string => {
  let codeContent = '';

  const traverseChildren = (node: ReactNode): any => {
    const childArray = React.Children.toArray(node);

    for (const child of childArray) {
      if (typeof child === 'string') {
        codeContent += child;
      } else if (React.isValidElement(child) && child.props.children) {
        traverseChildren(child.props.children);
      }
    }
  };

  traverseChildren(children);
  return codeContent;
}

export function PreCodeBlock({ children, dataLanguage = 'javascript', dataTheme = 'solarizedlight', ...props }: PreProps): any {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const codeContent = extractCodeContent(children);

  if (!isMounted) {
    // Render a fallback or nothing until the component is mounted
    return null;
  }

  return (
    <div className="relative my-6">
      <SyntaxHighlighter
        language={dataLanguage}
        showLineNumbers={true}
        wrapLongLines={true}
        classNames='react-syntax-highlighter-content'
        lineNumberStyle={{
          color: 'red',
          fontFamily: 'var(--font-Mono, "Roboto Mono")',
          fontSize: '14px',
          marginRight: '10px',
          marginLeft: '6px'
        }}
        customStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '-1px',
          alignSelf: 'stretch',
          borderRadius: 'var(--radius-sm, 4px)',
          border: '1px solid var(--border-default, #E4E9F4)',
          background: 'var(--bg-tertiary, #F5F7FB)',
          lineHeight: '150%',
          fontWeight: '400',
          padding: '14px 5px', 
          fontFamily: 'var(--font-Mono, "Roboto Mono") !important',
          fontSize: '14px',
          fontStyle: 'normal'
        }}
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
}
