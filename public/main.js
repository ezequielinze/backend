const socket = io()
// 5- recive info del server
socket.on('mensaje', data => {
    const html = data.map(msj => {
        return `<div class="col-4">
        <strong>${msj.nombre}:</strong>
        <em>${msj.texto}</em>
        <br>
        <em>${msj.fecha}</em>
        </div>`
    })
    .join("<br>")
// 6- envia info al id....
    document.getElementById("msj").innerHTML = html
})
// 1- toma la info del formulario
function infoForm() {
    const info = {
        nombre: document.getElementById("name").value,
        texto: document.getElementById("text").value,
        fecha: new Date().toLocaleString()
    }
    
// 2- envia al server
    socket.emit('NuevoMensaje', info)
    return
}
