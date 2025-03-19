import { Eye, EyeClosed } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	visible: boolean
	onClick: () => void
}

export const PasswordVisibleToggle: FC<Props> = ({ visible, onClick }) => {
	return (
		<div
			style={{
				cursor: 'pointer',
				position: 'absolute',
				top: '48px',
				right: '16px',
				zIndex: 100,
				color: 'inherit',
			}}
			onClick={onClick}
		>
			{visible ? <Eye /> : <EyeClosed />}
		</div>
	)
}
