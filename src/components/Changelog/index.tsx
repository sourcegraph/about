import { CustomLink } from './CustomLink';
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
	pre: (props: any) => <PreCodeBlock {...props} />
}

export default Components;
