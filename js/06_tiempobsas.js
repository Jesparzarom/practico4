
function hora(){
    const now = new Date();
    const options = { timeZone: 'America/Argentina/Buenos_Aires' };
    const timeString = now.toLocaleTimeString('es-AR', options);
    document.write(timeString)
}

window.onload = hora()