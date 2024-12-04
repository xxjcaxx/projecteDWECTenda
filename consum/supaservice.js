export {getDatos, fetchIMG, enviarRegistre};

async function getDatos(taula, camps, filtres) {
    if (!camps) {
        camps = "*";
    }
    let ruta = `https://pfzdlpckanlmhawvceda.supabase.co/rest/v1/${taula}?select=${camps}`;
    
    if (filtres) {
        ruta += `&${filtres}`;
    }

    const response = await fetch(ruta, {
        method: 'get',
          
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmemRscGNrYW5sbWhhd3ZjZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODYyMjcsImV4cCI6MjA0NDY2MjIyN30.Mj86y-xlHRd8oLDG9rBI7W1fjlD9BD0CmzR3-i5fcbg",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmemRscGNrYW5sbWhhd3ZjZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODYyMjcsImV4cCI6MjA0NDY2MjIyN30.Mj86y-xlHRd8oLDG9rBI7W1fjlD9BD0CmzR3-i5fcbg"
        }
    })
    .then(response => response.status == 200 ? response : Promise.reject(response.status))
    .then(response => response.json())
    .catch(error => Promise.reject("ERROR : " + error));

    return response;
}


async function fetchIMG(nombreURL,nombre) {
    
    
    let ruta = `${nombreURL}${nombre}`;
    

    const response = await fetch(ruta, {
        method: 'get',
          
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmemRscGNrYW5sbWhhd3ZjZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODYyMjcsImV4cCI6MjA0NDY2MjIyN30.Mj86y-xlHRd8oLDG9rBI7W1fjlD9BD0CmzR3-i5fcbg",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmemRscGNrYW5sbWhhd3ZjZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODYyMjcsImV4cCI6MjA0NDY2MjIyN30.Mj86y-xlHRd8oLDG9rBI7W1fjlD9BD0CmzR3-i5fcbg"
        }
    })
    .then(response => response.status == 200 ? response : Promise.reject(response.status))
    .then(response => response.blob())
    .catch(error => Promise.reject("ERROR en el metodo fetchIMG, : " + error));

    return response;

}

async function enviarRegistre(correu, contrasenya) {
    const ruta = 'https://pfzdlpckanlmhawvceda.supabase.co/auth/v1/signup';
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmemRscGNrYW5sbWhhd3ZjZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwODYyMjcsImV4cCI6MjA0NDY2MjIyN30.Mj86y-xlHRd8oLDG9rBI7W1fjlD9BD0CmzR3-i5fcbg";

    try {
        const response = await fetch(ruta, {
            method: 'POST',
            headers: {
                "apikey": apiKey,
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: correu,
                password: contrasenya
            })
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error al enviar el registro:", error);
        throw error;
    }
}
