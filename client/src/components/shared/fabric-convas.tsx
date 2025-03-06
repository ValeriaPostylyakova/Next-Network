'use client'

import { fabric } from 'fabric'
import { useCallback, useEffect, useRef, useState } from 'react'

export const FabricConvas = ({
	selectedImage,
}: {
	selectedImage: string | null
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
	const [isImageLoaded, setIsImageLoaded] = useState(false)
	const [fontSize, setFontSize] = useState(20)

	useEffect(() => {
		if (!canvasRef.current) return

		const newCanvas = new fabric.Canvas(canvasRef.current, {
			width: 300,
			height: 400,
		})
		setCanvas(newCanvas)

		return () => {
			if (newCanvas) {
				newCanvas.dispose()
			}
		}
	}, [])

	useEffect(() => {
		if (!canvas || !selectedImage) return

		fabric.Image.fromURL(
			selectedImage,
			img => {
				if (!canvas) return
				img.scaleToWidth(canvas.getWidth())
				img.set({
					originX: 'center',
					originY: 'center',
					left: canvas.getWidth() / 2,
					top: canvas.getHeight() / 2,
				})
				canvas.add(img)
				canvas.renderAll()
				setIsImageLoaded(true)
			},
			{
				crossOrigin: 'anonymous',
			}
		)
	}, [selectedImage, canvas])

	const addTextInput = useCallback(() => {
		if (!canvas) return

		const iText = new fabric.IText('Введите текст', {
			left: 50,
			top: 50,
			fontSize: 20,
			fill: 'black',
			fontFamily: 'Arial',
			hasControls: true,
			hasBorders: true,
		})
		canvas.add(iText)
		canvas.renderAll()
	}, [canvas])

	return (
		<canvas
			ref={canvasRef}
			id='myCanvas'
			style={{ display: isImageLoaded ? 'block' : 'none' }}
		/>
	)
}
