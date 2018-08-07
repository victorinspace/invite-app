import axios from 'axios'

export function getUsers() {
	let randos = axios.get('htpps://randomuser.me/api/?inc=name,phone,email,picture')
}