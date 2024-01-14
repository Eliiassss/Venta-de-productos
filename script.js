const productData = [
  // aca empieza 
  //  { 
  //    name: "Nombre del producto",
  //    images: [
  //      "Nombre del producto (entre "")"
  //    ],
  //    description: "Aca Va la descripcion del producto (con los "" )",
  //    price: "Aca va el precio del producto (con los "")"
  //  }
  //aca termina
  { 
    name: "Collar Cadena Cubana Michy Con Diamantes Iced Simil Oro M®",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_887795-MLA54991867334_052023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_811841-MLA69325825827_052023-O.webp"
    ],
    description: "Descubre la elegancia con este collar Iced Simil Oro M®.",
    price: "$23.491"
  },
  { 
    name: "Cadena Collar Constelaciones Signos Acero Blanco Cubic",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_941260-MLA53989687805_022023-O.webp",
    ],
    description: "Descubre la elegancia celestial con nuestro impresionante Collar de Constelaciones con Signos en Acero Blanco y detalles cúbicos.",
    price: "$7.896"
  },
  { 
    name: "Anillo Sello Turco Hombre Con Piedra + Cajita De Regalo M®",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_993975-MLA71810624659_092023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_855959-MLA54840151387_042023-O.webp"
    ],
    description: " Añade un toque de estilo con este elegante Anillo Sello Turco M®.",
    price: "$3.599"
  },
  { 
    name: "Cadena Cubana Con Diamantes Slim Shadow Simil Oro M®",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_651749-MLA73800459413_012024-O.webp"
    ],
    description: "Elegancia y estilo con esta cadena Slim Shadow Simil Oro M®.",
    price: "$21.991"
  },
  { 
    name: "Cadena Cubana Michy Con Diamantes Iced Simil Oro M®",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_766657-MLA71901355783_092023-O.webp"
    ],
    description: "Descubre la elegancia con esta cadena Iced Simil Oro M®.",
    price: "$23.331"
  },
  { 
    name: "Xiaomi Lite Redmi Watch 2 Lite Sport 1.55\" caja de abs black, malla black de tpu silicona y bisel negro",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_942099-MLA49011470720_022022-O.webp"
    ],
    description: "Diseño moderno y funcionalidad en un solo dispositivo.",
    price: "$63.152"
  }
  // Agrega más productos aquí
];
document.addEventListener("DOMContentLoaded", function() {
  const productosSection = document.getElementById("muñecos");

  productData.forEach(product => {
    const productElement = createProductElement(product);
    productosSection.appendChild(productElement);
  });

  const crearProductoBtn = document.getElementById("crearProductoBtn");
  const formularioCrearProducto = document.getElementById("formularioCrearProducto");

  crearProductoBtn.addEventListener("click", mostrarFormularioCrearProducto);

  const agregarProductoForm = document.getElementById("agregarProductoForm");

  agregarProductoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    agregarProductoPersonalizado();
  });
});

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("producto");

  const imgElement = document.createElement("img");
  imgElement.src = product.images[0];
  imgElement.alt = product.name;

  productElement.appendChild(imgElement);

  productElement.innerHTML += `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>Precio: ${product.price}</p>
  `;

  return productElement;
}

function mostrarFormularioCrearProducto() {
  const formularioCrearProducto = document.getElementById("formularioCrearProducto");
  formularioCrearProducto.style.display = "block";
}

function agregarProductoPersonalizado() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const imagen = document.getElementById("imagen").value;

  if (nombre && descripcion && precio && imagen) {
    const nuevoProducto = {
      name: nombre,
      images: [imagen],
      description: descripcion,
      price: precio
    };

    productData.push(nuevoProducto);

    const productosSection = document.getElementById("muñecos");
    const productElement = createProductElement(nuevoProducto);
    productosSection.appendChild(productElement);

    // Limpia el formulario después de agregar el producto
    document.getElementById("agregarProductoForm").reset();

    // Desaparecer el producto después de 5 minutos
    setTimeout(() => {
      productosSection.removeChild(productElement);
      // También puedes eliminar el producto de productData si lo deseas
    }, 5 * 60 * 1000); // 5 minutos en milisegundos
  } else {
    alert("Por favor, complete todos los campos del formulario.");
  }
}