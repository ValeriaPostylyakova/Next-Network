import multer from 'multer'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images/')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + '' + file.originalname)
	},
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req: any, file: any, cb: any) => {
	if (types.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

export const multersAvatar = multer({ storage, fileFilter })
