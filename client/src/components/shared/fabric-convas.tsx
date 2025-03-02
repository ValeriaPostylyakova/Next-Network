'use client'

import { fabric } from 'fabric'
import { FC, ReactNode, useEffect, useRef } from 'react'

interface FabricJSCanvasProps {
	width?: number | string
	height?: number | string
	options?: fabric.ICanvasOptions
	updateCanvasContext: (canvas: fabric.Canvas | null) => void
	children?: ReactNode
}

export const FabricJSCanvas: FC<FabricJSCanvasProps> = ({
	width = '100%',
	height = '100%',
	options = {
		backgroundColor: 'transparent',
	},
	children,
	updateCanvasContext,
}) => {
	const canvasEl = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (!canvasEl.current) {
			console.error('Canvas element is not available.')
			return
		}

		const canvas = new fabric.Canvas(canvasEl.current, {
			...options,
		})

		if (updateCanvasContext) {
			updateCanvasContext(canvas)
		}

		return () => {
			if (updateCanvasContext) {
				updateCanvasContext(null)
			}
			canvas.dispose()
		}
	}, [options, updateCanvasContext])

	return (
		<canvas width={width} height={height} ref={canvasEl}>
			{children}
		</canvas>
	)
}
