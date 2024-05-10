function cadastrarEmpresa() {
    var razaoSocial = document.getElementById("razaoSocial").value;
    var cnpj = document.getElementById("cnpj").value;
    var nomeFantasia = document.getElementById("nomeFantasia").value;
    var emailEmpresa = document.getElementById("emailEmpresa").value;
    var senhaEmpresa = document.getElementById("senhaEmpresa").value;
    var confirmarSenhaEmpresa = document.getElementById("confirmarSenhaEmpresa").value;

    if (razaoSocial === "" || cnpj === "" || nomeFantasia === "" || emailEmpresa === "" || senhaEmpresa === "" || confirmarSenhaEmpresa === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senhaEmpresa !== confirmarSenhaEmpresa) {
        alert("As senhas não coincidem.");
        return;
    }

   
    localStorage.setItem("nomeEmpresa", razaoSocial);


    window.location.href = "login.html";
}
