const fs = require('fs-extra')
const path = require('path')
const chokidar = require('chokidar')

const sourceDir = path.join(__dirname, 'src', 'images')
const destDir = path.join(__dirname, 'dist', 'src', 'images')

fs.ensureDir(destDir)
	.then(() => console.log(`Destination directory ensured: ${destDir}`))
	.catch(err => console.error(`Error ensuring destination directory: ${err}`))

async function copyFile(filePath) {
	const relativePath = path.relative(sourceDir, filePath)
	const destPath = path.join(destDir, relativePath)
	try {
		await fs.copy(filePath, destPath, {
			overwrite: true,
		})
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
	ignored: /(^|[/\\])\../,
	persistent: true,
})

// Add event listeners
watcher
	.on('add', path => {
		console.log(`File ${path} has been added`)
		copyFile(path)
	})
	.on('change', path => {
		console.log(`File ${path} has been changed`)
		copyFile(path)
	})
	.on('unlink', path => {
		console.log(`File ${path} has been removed`)
		removeFile(path)
	})
	.on('addDir', path => {
		console.log(`Directory ${path} has been added`)
		// If a new directory is added, copy all files inside it
		fs.readdir(path, (err, files) => {
			if (err) {
				console.error(`Error reading directory ${path}:`, err)
				return
			}
			files.forEach(file => {
				const filePath = path + '/' + file
				copyFile(filePath)
			})
		})
	})
	.on('unlinkDir', path => {
		console.log(`Directory ${path} has been removed`)
		// If a directory is removed, remove the corresponding directory in the destination
		const relativePath = path.relative(sourceDir, path)
		const destPath = path.join(destDir, relativePath)
		fs.remove(destPath)
	})
	.on('error', error => console.log(`Watcher error: ${error}`))
	.on('ready', () => {
		console.log('Initial scan complete. Ready for changes')
	})
