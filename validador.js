function validarFormulario(){
 
    //capitação de dados 

const nome = document.getElementById('nome_maquinista').value.trim();
console.log(nome)

const cpf = document.getElementById('cpf_maquinista').value.trim();
console.log(cpf)


const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
console.log(idade)


const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);
console.log(experiencia)


//processar os dados


if(!nome){
    alert('Por favor, preencha o nome.');  
    return   
    
} else{
    console.log(nome)
}
if(!cpf || cpf.length !== 11 || isNaN(cpf)){
  alert('Por favor, insira um CPF valido com 11 digitos');
  return
} else{
console.log(cpf)
}

if(isNaN(idade) || idade < 30  || idade > 0 ){
alert(' a idade tem que ser maior que 30')
return
}else{
console.log(idade)    
}

if(isNaN(experiencia) || experiencia < 3 ){
    alert('Os anos de experiência devem ser maiores que 3 ou igual');
    return;
}else{
console.log(experiencia)  
}


//Devolver

alert('formulário enviado com sucesso')



}