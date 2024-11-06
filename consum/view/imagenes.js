import { getDatos, fetchIMG } from "../supaservice";
export { getListaImagenesUrl };

const nombreURL = "https://pfzdlpckanlmhawvceda.supabase.co/storage/v1/object";

async function getListaImagenesUrl(datos){
    let listaImagenesUrl = [];
    for (const i of datos) {
        //    console.log(i.imatgeUrl);
    
        let objetoBlob = await fetchIMG(nombreURL, i.imatgeUrl);
    
        listaImagenesUrl.push(URL.createObjectURL(objetoBlob));
      }
      // console.log(listaImagenesUrl);
    
      return listaImagenesUrl;

}

