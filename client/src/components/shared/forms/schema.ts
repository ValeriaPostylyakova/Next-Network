import { z } from 'zod'

export const registerFormSchema = z
	.object({
		email: z.string().email({ message: 'Введите корректную почту' }),
		password: z
			.string()
			.min(4, { message: 'Пароль должен содержать не менее 4 символов' }),
		confirmPassword: z
			.string()
			.min(4, { message: 'Пароль должен содержать не менее 4 символов' }),
		firstname: z
			.string()
			.min(3, { message: 'Имя должно содержать не менее 3 символов' }),
		lastname: z
			.string()
			.min(3, { message: 'Имя должно содержать не менее 3 символов' }),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export const loginFormSchema = z.object({
	email: z.string().email({ message: 'Введите корректную почту' }),
	password: z
		.string()
		.min(4, { message: 'Пароль должен содержать не менее 4 символов' }),
})

export type TRegisterForm = z.infer<typeof registerFormSchema>
export type TLoginFormSchema = z.infer<typeof loginFormSchema>
