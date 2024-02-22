// Datos de ejemplo de proyectos (no usar este codigo)
const proyectos = [
  { titulo: "Proyecto 1 [Chat-Online]", descripcion: "Este fue uno de mis peoyecto que he subido a mi github, se basa de un sitio web basico que simula ser un Chat Online (Red social) pero en realidad no lo es por que no tiene servidores y eso, solo son plantillas que puedes usarlas siempre y cuando quieras para mejorar tus proyectos, mira este proyecto aqui: https://github.com/matias-crypto/Chat-Online." },
  
  { titulo: "Proyecto 2 [Katzy-Simple-Bot]", descripcion: "Bot Simple y eficiente para whatsapp: A este bot lo he hecho con el proposito de ayudar a la gente a que se adientre al mundo de los bots de whatsapp, aunque sea simple pueden mejorarlo a su gusto asi se adapta a sus necesidades, Puedes ver este Repositorio/Proyecto aqui: https://github.com/matias-crypto/Katzy-Simple-Bot" },
  
  { titulo: "Proyecto 3 [Generador de contraseñas]", descripcion: "Es un generador de contraseñas aleatorias y no repetitivas para usarlo de plantilla paro que desees, puedes mejorarlo o hasta implementarlo en tu sitio web, echale un vistazo aqui: https://github.com/matias-crypto/Generador-de-contrase-as" }
];

// No tocar
const publicaciones = [
  { titulo: "Sobre mi :D", contenido: "Me gusta la programacion, la poesia y la escritura, me enfoco mas en el desarrollo web actualmente, me encanta ayudar a gente que recien empieza en esto del desarrollo web, por eso mismo me encanta hacer plantillas para que las usen la gente asi la mejoran y aprendan sobrw su codigo." },
  { titulo: "¿Donde contactarme?", contenido: "Para contactarme pueden escribirme por whatsapp, pueden contactarme si tienen dudas de algo sobre la programacion u otras cosas parecidas, mi numero es: +54 9 221 503 4412" },
 { titulo: "Contenido Extra", contenido: "Pronto mejorare este sitio web, solo es una beta, como no soy paciente la publico ahora jaja, diganme que quieren que ponga en este sitio web, mandenme msj a mi Numero, despues pondre mas de mis peoyectos aqui." },
];

document.addEventListener("DOMContentLoaded", function() {
  // Mostrar proyectos
  const proyectosSection = document.getElementById("proyectos");
  proyectos.forEach(proyecto => {
    const proyectoElement = document.createElement("div");
    proyectoElement.classList.add("proyecto");
    proyectoElement.innerHTML = `
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>
    `;
    proyectosSection.appendChild(proyectoElement);
  });

  // Mostrar publicaciones de blog
  const blogSection = document.getElementById("blog");
  publicaciones.forEach(publicacion => {
    const publicacionElement = document.createElement("div");
    publicacionElement.classList.add("publicacion");
    publicacionElement.innerHTML = `
      <h3>${publicacion.titulo}</h3>
      <p>${publicacion.contenido}</p>
    `;
    blogSection.appendChild(publicacionElement);
  
  });
});
