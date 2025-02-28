'use client'

import Typography from '@mui/material/Typography'
import { OctagonX, Pen } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	onClickDelete: () => void
	setOpen?: (value: boolean) => void
	text?: string
}

export const ListTooltipAndModal: FC<Props> = ({
	onClickDelete,
	setOpen,
	text,
}) => {
	return (
		<ul
			style={{
				backgroundColor: 'inherit',
			}}
		>
			{setOpen && (
				<li onClick={() => setOpen(true)} className='tooltip-item'>
					<Pen color='#898989' size={13} />
					<Typography fontSize={13}>Изменить {text}</Typography>
				</li>
			)}
			<li className='tooltip-item' onClick={onClickDelete}>
				<OctagonX color='#898989' size={13} />
				<Typography fontSize={13}>Удалить {text}</Typography>
			</li>
		</ul>
	)
}
