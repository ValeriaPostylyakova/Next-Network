import { fabric } from 'fabric'
import React, { useCallback, useState } from 'react'
import { FabricJSCanvas } from './fabric-canvas'

function MyComponent() {
	const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
	const [inputText, setInputText] = useState('')

	const handleCanvasUpdate = useCallback(
		(canvasInstance: fabric.Canvas | null) => {
			setCanvas(canvasInstance)
		},
		[]
	)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newText = event.target.value
		setInputText(newText)

		if (canvas) {
			// Find the existing textbox or create a new one
			let textbox = canvas
				.getObjects()
				.find(obj => obj.type === 'textbox') as fabric.Textbox
			if (!textbox) {
				textbox = new fabric.Textbox(newText, {
					left: 50,
					top: 50,
					width: 150,
					fontSize: 20,
					fill: '#000000',
				})
				canvas.add(textbox)
			} else {
				textbox.set('text', newText)
			}
			canvas.renderAll()
		}
	}

	const containerStyle = {
		position: 'relative',
		width: '400px',
		height: '400px',
	}

	const inputStyle = {
		position: 'absolute',
		top: '10px',
		left: '10px',
		zIndex: 2,
	}

	return (
		<div style={containerStyle}>
			<FabricJSCanvas
				width={400}
				height={400}
				options={{ backgroundColor: 'transparent' }} // Transparent background
				updateCanvasContext={handleCanvasUpdate}
			/>
			<input
				type='text'
				style={}
				value={inputText}
				onChange={handleInputChange}
			/>
		</div>
	)
}
