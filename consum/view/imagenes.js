import { getDatos, fetchIMG } from "../supaservice";
export { listaImagenes };

const nombreURL = "https://pfzdlpckanlmhawvceda.supabase.co/storage/v1/object";

async function listaImagenes(taula, camps, filtres) {
  let listaImagenesUrl = [];

  let datos = await getDatos(taula, camps, filtres);

  for (const i of datos) {
    //    console.log(i.imatgeUrl);

    let objetoBlob = await fetchIMG(nombreURL, i.imatgeUrl);

    listaImagenesUrl.push(URL.createObjectURL(objetoBlob));
  }
  // console.log(listaImagenesUrl);

  return listaImagenesUrl;
}


