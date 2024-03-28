import Image from 'next/image';
import React from 'react';

const Loader = () => {
	return (
		<div className='z-20 absolute left-0 w-[100%] h-full flex justify-center items-center bg-[#cccccc44] backdrop-blur-lg'>
			<Image
				width={300}
				height={300}
				alt='loader'
				src='/loader.png'
				className='animate-spin z-20'
			/>
		</div>
	);
};
export default Loader;
