const form = document.getElementById('formMensaje')
const inputMensaje = document.getElementById('inputMensaje')
const ulMensajes = document.getElementById('ulMensaje')

let usuarioActual;

const mostrarVentanaBienvenida = async () => {
    const result = await Swal.fire({
        title: "Bienvenido al chat! Ingrese su nombre de usuario",
        input: "text",
        inputLabel: "Tu nombre de usuario",
        inputPlaceholder: "Ingresa su nombre de ususario",
        allowOutsideClick: false,
        confirmButtonText: 'Ingresar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            // Validar que el campo no esté vacío
            return value ? '' : '¡Por favor, ingrese un nombre de usuario!';
        }

    })
    if (result.isConfirmed) {
        usuarioActual = result.value;
        iniciarChat(usuarioActual);
        inputMensaje?.focus();
    } else {
        // El usuario hizo clic en cancelar o cerró la ventana de entrada
        // Puedes manejarlo según tus necesidades
        console.log('Ingreso cancelado');
    }
}
mostrarVentanaBienvenida();

function iniciarChat(user){
    //@ts-ignore
    if(user){
        const socket = io({
            auth:{
                user,
            }
        })

        form?.addEventListener('submit', event =>{
            event.preventDefault()
            const message = inputMensaje?.value
            if(message){
                socket.emit('mensaje', {
                    user, 
                    message,
                    timestamp: Date.now()
                })
            }
            form.reset()
        })

        socket.on('nuevoUsuario', nuevoUsuario=>{
            //@ts-ignore
            Swal.fire({
                text:  nuevoUsuario + ' esta en linea',
                toast: true,
                position: 'top-right'
            })
        })

        socket.on('usuarioDesconectado', usuarioDesconectado=>{
            //@ts-ignore
            Swal.fire({
                text:  usuarioDesconectado + ' se ha desconectado',
                toast: true,
                position: 'top-right'
            })
        })

        socket.on('mensajes', mensajes=>{
            //@ts-ignore
            ulMensajes.innerHTML = ''
           for (const {timestamp, user, message} of mensajes) {
                const li = document.createElement('li')
                li.innerHTML = `(${new Date(timestamp).toLocaleTimeString()}) <b>${user}: </b> ${message}`
                if (user === usuarioActual) {
                    li.classList.add('currentUser');
                } else{
                    li.classList.remove('currentUser')
                }
                ulMensajes?.appendChild(li)
           }
        })
    }     
}


