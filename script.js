const frm = document.querySelector("form");
const email = document.querySelector("#inEmail");
const outResultado = document.querySelector("span");

frm.addEventListener("submit", (e) =>{
  e.preventDefault();
  const verificar = frm.inEmail.value;
  if(verificar.trim() === ""){ //o m�todo trim() remove os espa�os em brancos do inicio e do fim da string
    outResultado.innerText = `Insira um email v�lido!`;
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

function noTopo(){ //FUN��O PARA VOLTAR AO TOPO DA P�GINA
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}