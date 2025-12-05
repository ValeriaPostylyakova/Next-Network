export interface ProfileForm {
	firstname: string
	lastname: string
	jobTitle: string
	identifier: string
}

interface InputField {
	name: keyof ProfileForm
	labelText: string
}

export const inputFields: InputField[] = [
	{
		name: 'firstname',
		labelText: 'Ваше имя',
	},
	{
		name: 'lastname',
		labelText: 'Ваша фамилия',
	},
	{
		name: 'jobTitle',
		labelText: 'Ваша деятельность',
	},
	{
		name: 'identifier',
		labelText: 'Ваш никнейм',
	},
]
