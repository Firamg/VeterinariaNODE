const fs=require('fs')
const registrar=(nombre,edad,tipo,color,enfermedad)=>{
    console.log(`hola: tu Mascota se llama ${nombre} y tiene ${edad}, es de tipo ${tipo} y su color es ${color}. Viene a la consulta por la siguiente enfermedad ${enfermedad}`);
    
    const saveInfo=JSON.parse(fs.readFileSync('citas.json','utf-8'))

   
    saveInfo.push({
        nombre:`${nombre}`,
        edad:`${edad}`,
        tipo:`${color}`,
        enfermedad:`${enfermedad}`
    })
    
    fs.writeFileSync('citas.json',JSON.stringify(saveInfo));
   console.log('La información ha sido guardad')
    
    
}

const leer=()=>{
    const leers=fs.readFileSync('citas.json','utf-8')


    JSON.parse(leers).forEach((x)=>{
    console.log(x)
})
}

module.exports={registrar,leer}
