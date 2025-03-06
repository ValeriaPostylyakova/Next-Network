import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const useSocket = (url: string, id?: string): Socket | null => {
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		const newSocket = io(url)
		setSocket(newSocket)

		newSocket.on('connect', () => {
			if (id) {
				newSocket.emit('onlineUsers', id)
			}

			console.log('User connected')
		})
		newSocket.on('disconnect', () => {
			console.log('User disconnected')
		})

		return () => {
			if (newSocket) {
				newSocket.disconnect()
			}
		}
	}, [url])

	return socket
}

export default useSocket
