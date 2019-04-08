// Validação Pagina 1

function valida() {
	var nome = pag1.nome.value;
	var data-nasc = pag1.data-nasc.value;
	var masc = pag1.masc.value;
	var fem = pag1.fem.value;
	var rg = pag1.rg.value;
	var data-rg = pag1.data-rg.value;
	var org = pag1.org.value;
	var cpf = pag1.cpf.value;
	var est-civ = pag1.est-civ.value;
	var pai = pag1.pai.value;
	var mae = pag1.mae.value;
	var ender = pag1.ender.value;
	var bair = pag1.bair.value;
	var est-uf = pag1.est-uf.value;
	var cep = pag1.cep.value;
	var telef = pag1.telef.value;

	if (nome == "") {
		alert("Campo nome obrigatório");
		pag1.nome.focus();
		return false;
	}
}