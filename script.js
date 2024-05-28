const frm = document.querySelector("form");
const email = document.querySelector("#inEmail");
const outResultado = document.querySelector("span");

frm.addEventListener("submit", (e) =>{
  e.preventDefault();
  const verificar = frm.inEmail.value;
  if(verificar.trim() === ""){ //o método trim() remove os espaços em brancos do inicio e do fim da string
    outResultado.innerText = `Insira um email válido!`;
      setTimeout(() => {
        outResultado.innerText = "";
      }, 3000);
  } else{
    outResultado.innerText = `Email enviado com sucesso :)`;
      setTimeout(() => {
        outResultado.innerText = "";
      }, 3000);
  }
  
})

function noTopo(){ //FUNÇÃO PARA VOLTAR AO TOPO DA PÁGINA
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}