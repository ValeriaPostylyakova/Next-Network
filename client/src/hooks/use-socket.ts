import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { Status } from '../../@types/fetchStatus'
import { TProfile } from '../../@types/profile'

const useSocket = (
	url: string,
	profile?: TProfile,
	status?: Status
): Socket | null => {
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		const newSocket = io(url)
		setSocket(newSocket)

		newSocket.on('connect', () => {
			if (status === 'success' && profile) {
				newSocket.emit('onlineUsers', profile.id)
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
