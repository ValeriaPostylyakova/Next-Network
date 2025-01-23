export class PostUserDTO {
	fullname
	jobTitle
	userImageUrl

	constructor(data: any) {
		this.fullname = data.fullname
		this.jobTitle = data.jobTitle
		this.userImageUrl = data.userImageUrl
	}
}
