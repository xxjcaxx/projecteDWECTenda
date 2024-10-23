import { getDatos } from "../supaservice"
export {getUsuarios}

async function getUsuarios(ids = null) {

	let filtro = "";

	if (typeof ids == 'string')
		filtro = `?id=eq.${ids}`;

	if (Array.isArray(ids))
		filtro = `?id=in.(${ids.join(",")})`;

	const profiles = await getDatos('profiles', '*', filtro);
	return profiles;
}