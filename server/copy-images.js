import chokidar from 'chokidar'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, 'src', 'images')
const destDir = path.join(__dirname, 'dist', 'src', 'images')

fs.ensureDir(destDir)
	.then(() => console.log(`Destination directory ensured: ${destDir}`))
	.catch(err => console.error(`Error ensuring destination directory: ${err}`))

async function copyFile(filePath) {
	const relativePath = path.relative(sourceDir, filePath)
	const destPath = path.join(destDir, relativePath)

	try {
		await fs.copy(filePath, destPath, { overwrite: true })
		console.log(`File ${filePath} copied to ${destPath}`)
	} catch (err) {
		console.error(`Error copying file ${filePath}:`, err)
	}
}

async function removeFile(filePath) {
	const relativePath = path.relative(sourceDir, filePath)
	const destPath = path.join(destDir, relativePath)

	try {
		await fs.remove(destPath)
		console.log(`File ${destPath} removed`)
	} catch (err) {
		console.error(`Error removing file ${destPath}:`, err)
	}
}

const watcher = chokidar.watch(sourceDir, {
	ignored: /(^|[\/\\])\../, // игнор скрытых файлов
	persistent: true,
})

watcher
	.on('add', filePath => {
		console.log(`File ${filePath} has been added`)
		copyFile(filePath)
	})
	.on('change', filePath => {
		console.log(`File ${filePath} has been changed`)
		copyFile(filePath)
	})
	.on('unlink', filePath => {
		console.log(`File ${filePath} has been removed`)
		removeFile(filePath)
	})
	.on('addDir', dirPath => {
		console.log(`Directory ${dirPath} has been added`)
		fs.readdir(dirPath, (err, files) => {
			if (err) {
				console.error(`Error reading directory ${dirPath}:`, err)
				return
			}
			files.forEach(file => {
				const filePath = path.join(dirPath, file)
				copyFile(filePath)
			})
		})
	})
	.on('unlinkDir', dirPath => {
		console.log(`Directory ${dirPath} has been removed`)
		const relativePath = path.relative(sourceDir, dirPath)
		const destPath = path.join(destDir, relativePath)
		fs.remove(destPath)
	})
	.on('error', error => console.log(`Watcher error: ${error}`))
	.on('ready', () => {
		console.log('Initial scan complete. Ready for changes')
	})
