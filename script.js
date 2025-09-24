function toggleMode() {
  const html = document.documentElement
  // pega a tag <html>

  html.classList.toggle("light")
  // adiciona ou tira a classe "light"

  const img = document.querySelector("#profile img")
  // pega a imagem do perfil

  if (html.classList.contains("light")) {
    // se tiver no modo claro, troca a foto
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver no modo escuro, volta pra foto normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
