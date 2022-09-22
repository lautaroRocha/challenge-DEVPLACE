class Password {
    //el constructor por defecto new Password() generará una contraseña con 8 caracteres. Si se le pasa un entero, por ejemplo new Password(12) generará una contraseña de 12 caracteres.
    constructor (longitud = 8){
        this.longitud = longitud;
        this.contraseña = this.generarPassword();
    }
    //este metodo incluye una string con caracteres disponibles, y asigna un caracter aleatorio por cada unidad de longitud de la contraseña
    generarPassword(){
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let charLength = chars.length;
        let result = '';
        //se repetirá la adición de un valor de CHARS a RESULT hasta que se cubra la longitud del objeto
        for (let i = 0; i < this.longitud; i++) {
           result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        this.contraseña = result
     }
    esFuerte(){
        //regex que matchea con 2 mayusuclas y una minuscula
        let checkForStrength = /[A-Z]*[A-Z][a-z]/
        //regex que matchea con todos los números
        let numberReg = /\d/g
        let contraseña = this.contraseña
        let esFuerte = checkForStrength.test(contraseña);
        let digitos = contraseña.match(numberReg);
        ///antes de comprobar la cantidad de digitos, comprueba que haya, sino, se salta ese paso. Esto permite evaluar contraseñas que no incluyen dígitos. 
        if(digitos){
        if(digitos.length > 3){
            digitos = true
        }else{
            digitos = false;
        }
        }

        if(esFuerte && digitos){
            return true
        }else{
            return false
        }
    }
    get clave() {
        return this.contraseña;
    }
    get largo() {
        return this.longitud;
    }
    //VSCode tira un error acá por falta de declaración de tipo; para solucionar habría que implementar TypeScript, aunque la aplicación corre correctamente sin hacerlo
    set definir(largoNuevo)  {
        this.longitud = largoNuevo;
    }
};



//proporciono un objeto de prueba
let contra = new Password()

//si se descomenta la declaración de abajo, la contraseña será fuerte
// contra.contraseña = '2fFARa769!'


///No sé generar proyectos de consola con JS plano, así que el último ejercicio está resuelto a tráves de una interfaz web, usando la siguiente función para instanciar un objeto con el input del usuario

let passBtn = document.querySelector('button')
let result = document.querySelector('p')

passBtn.onclick = () => {
    createAndTest()
}

//crea el objeto y establece su atributo contraseña al valor generado por el usario, luego invoca a su método esFuerte e imprime un mensaje acorde
function createAndTest(){
    let passwordValue = document.querySelector('input').value;
    let passwordToTest = new Password();
    passwordToTest.contraseña = passwordValue;
    let verified = passwordToTest.esFuerte()
    if(verified){
        result.textContent = "La contraseña es fuerte"
    }else{
        result.textContent = "La contraseña es débil, debe tener más de dos mayúsuclas, más de una minúscula y más de tres números (recomendamos intercalar mayus, minus y nums)"

    }
}

