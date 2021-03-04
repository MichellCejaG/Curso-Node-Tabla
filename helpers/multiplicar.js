var color= require('colors');
const fs= require('fs');
const crearArchivo = async(base = 5, listar=false,hasta=10) => {

    try {

       
          
        
            let salida='';
        
            for(let i=1; i<=hasta;i++){
            
              salida += `${ base } x ${ i } = ${ base * i}\n`.rainbow;
            }
            
            if(listar==true){
                console.log('===================='.blue);
                console.log('TABLA DEL '.yellow, base);
                console.log('===================='.blue);

                console.log(salida);
            }
           
              
    
            
            
           
            
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
            
            return`tabla-${ base }.txt`;
        
      
        
    } catch (error) {
        throw error;
    }
 
 
   
}

    module.exports = {
            crearArchivo : crearArchivo
        }