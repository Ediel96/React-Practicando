
export const fileUpload = async(file) => {

if(!file) throw new Error('No tenemos ningun archivo a subir.')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dnmko7jvi/upload';
    
    const formData = new FormData();
    formData.append('upload_preset','react-jourmal');
    formData.append('file',file);


    try {

        const resp = await fetch(cloudUrl, {
            method:'POST',
            body: formData
        })

        if(!resp.ok)throw new Error('No se pudo subir imagen');

        const cludResp = await resp.json();
        return cludResp.secure_url;
        
    } catch (error) {
        throw new Error(error.message);
    }

}