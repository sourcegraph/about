import { CustomLink } from './CustomLink';
import { Heading } from './Heading';
import { PreCodeBlock } from './PreCodeBlock';

const Components = {
	code: (props: any) => {
		const isCodeBlock = props.style?.display === 'grid';
		const codeClasses = isCodeBlock
			? 'bg-transparent'
			: 'text-gray-700 font-sans text-sm font-normal leading-[150%] tracking-normal rounded-[5px] bg-gray-100 p-[2px]';

		return <code className={codeClasses} {...props} />;
	},
	a: (props: any) => <CustomLink {...props} />,
	pre: (props: any) => <PreCodeBlock {...props} />,
	p: (props: any) => <p {...props} className='self-stretch text-gray-700 font-sans text-base font-normal leading-[150%] tracking-[0px]'>{props.children}</p>,
	li: (props: any) => <li {...props} className='self-stretch text-gray-700 font-sans text-base font-normal leading-[150%] tracking-[0px]'>{props.children}</li>,
	h2: (props: any) => <Heading level="2" id={props.id} props={props} />,
	h3: (props: any) => <Heading level="3" id={props.id} props={props} />,
}

export default Components;
