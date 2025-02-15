"use server"

import { signInFormSchema, signUpFormSchema } from "../validators"
import { signIn, signOut } from "@/auth"
import { prisma } from "@/db/prisma"
import { hashSync } from "bcrypt-ts-edge"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { formatErrors } from "../utils"

// sign in user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData){
	try {
		const user = signInFormSchema.parse({
			email: formData.get('email'),
			password: formData.get('password')
		})
		const result = await signIn('credentials', user)
		console.log('resutls', result)
		return { success: true, message: 'Signed in successfully' }
	} catch (error) {
		if(isRedirectError(error)){
			throw error
		}

		return { success: false, message: 'Invalid email or password'}
	}
}

// sign out user
export async function signOutUser(){
	console.log('clicked')
	await signOut()
	console.log('signed out')
}

// sign up user
export async function signUpUser(prevState: unknown, formData: FormData){
	try {
		const user = signUpFormSchema.parse({
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
			confirmPassword: formData.get('confirmPassword'),
		})

		const plainPassword = user.password

		user.password = hashSync(user.password, 10)

		await prisma.user.create({
			data: {
				name: user.name,
				email: user.email,
				password: user.password,
			}
		})

		await signIn('credentials', {
			email: user.email,
			password: plainPassword
		})

		return { success: true, message: 'Signed up successfully, now signed in.' }

	} catch (error) {
		// console.log(error.name, error.code, error.errors, error.meta?.target)

		if(isRedirectError(error)){
			throw error
		}
		return { success: false, message: formatErrors(error)}
	}
}