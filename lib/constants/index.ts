export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Traversy Store'
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern e-commerce app'
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4

export const SIGN_IN_DEFAULT_VALUES = {
	email: '',
	password: ''
}