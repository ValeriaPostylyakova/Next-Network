import { FC } from 'react'

export interface Props {}

export const Logo: FC<Props> = () => {
	return (
		<svg className='svg' viewBox='0 0 960 300'>
			<symbol id='s-text'>
				<text textAnchor='middle' x='50%' y='80%'>
					Next Network
				</text>
			</symbol>

			<g className='g-ants'>
				<use href='#s-text' className='text-copy'></use>
				<use href='#s-text' className='text-copy'></use>
				<use href='#s-text' className='text-copy'></use>
				<use href='#s-text' className='text-copy'></use>
				<use href='#s-text' className='text-copy'></use>
			</g>
		</svg>
	)
}
