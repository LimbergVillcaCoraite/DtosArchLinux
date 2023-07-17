import './Body.css'

function Body() {
    return(
        <body>
          <div className='ConteinerBody'>
            <div className="title">
             <h1>Antivirus desde línea de comandos para Linux</h1>
            <div className="Conteiner">
              <div className="ContainerSeccion">
                <h2>¿Porque usar antivirus en linux?</h2>
                <p>Aunque linux es un sistema operativo relativamente seguro, las amenazas de seguridad pueden producirse en cualquier momento. Aunque los ataques están más dirigidos a servidores linux, podemos prevenirnos usando antivirus tales como: Acronys Cyber Project o ClamAv.</p>
              </div>
              <div className="ContainerSeccion">
                <h2>ClamAv</h2>
                <p>ClamAv es un antivirus de código abierto. Actualemte está soportado para los siguientes sistemas operativos: GNU/Linux (Alpine, Ubuntu, Debian, CentOS, Fedora y OpenSUSE), UNIX (FreeDSB, macOS) y Windows (Windows 7, Windows 10). Aunque podemos realizar una instalación en la mayoria de los sistemas operativos</p>
              </div>
              <div className="ContainerSeccion">
                <h2>Un antivirus sin actualización en distribuciones basadas en ArchLinux</h2>
                <p>Actualmente en los repositorios de archlinux vemos que ClamAv está deprecado, pero deprecado no quiere decir que este ya no funcione. Si bien es correcto decir que el software no tiene actualización, también tenemos que mencionar que podemos actualizar la base de datos de firmas (virus, malware, etc), esto hace que el antivirus siga operativo.</p>
              </div>
              <div className="ContainerSeccion">
                <h2>Instalación en ArchLinux</h2>
                <div className='Command'>
                  <p>sudo pacman -S clamav</p>
                </div>
              </div>
              <div className="ContainerSeccion">
                <h2>Uso</h2>
                <p>Comando de actualizar las firmas</p>
                <div className='Command'>
                  <p>sudo refresh</p>
                </div>
                <p>Comando para habilitar el demonio de ClamAv</p>
                <div className='Command'>
                  <p>sudo systemctl enable clamav-refreshclam.service</p>
                </div>
                <p>Estructura general de comandos</p>
                <div className='Command'>
                  <p>sudo clamscan -[parametro] [ruta a escanear]</p>
                </div>
                <p>Comando para escanear el directorio home y root</p>
                <div className='Command'>
                  <p>sudo clamscan -r /home</p>
                  <p>sudo clamscan -r /</p>
                </div>
                <p>Para que suene un pitido cada vez que se encuentre un archivo infectado en home</p>
                <div className='Command'>
                  <p>sudo clamscan -r --bell /home</p>
                </div>
                <p>Guardando reporte del escaneo de home</p>
                <div className='Command'>
                  <p>sudo clamscan -r /home -l reporte.txt</p>
                </div>
                <p>Comando para escanear particiones montadas</p>
                <div className='Command'>
                  <p>sudo clamscan -r /RutaDeMontaParticion</p>
                </div>
                <p>Comando para eliminar amenazas detectadas</p>
                <div className='Command'>
                  <p>sudo clamscan -r -i --remove /home</p>
                </div>
                <p>También podemos usar desde la parte gráfica con ClamTK</p>
              </div>
            </div>
            </div>
          </div>
        </body>
    )
}
export default Body;
