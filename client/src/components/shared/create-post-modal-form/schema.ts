import z from 'zod'

export const createPostFormSchema = z.object({
	text: z.string().optional(),
	image: z.string().optional(),
})

export type TCreatePostFormSchema = z.infer<typeof createPostFormSchema>
