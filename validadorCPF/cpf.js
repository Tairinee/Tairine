function validaCPF() {

    var cpf = document.getElementById('CPF').value;
    var Soma = 0;
    var Resto;
    
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11) {
    console.log('tamanho excedente')
    window.alert('Erro')
    return false }
    
    if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ].indexOf(strCPF) !== -1) {
    console.log('numeros repetidos')
    window.alert('Erro')
    return false
    }
    
    
    for (i=1; i<=9; i++)
    Soma = Soma + strCPF[i - 1] * (11 - i);
    
    Resto = (Soma * 10) % 11
    
    if ((Resto == 10) || (Resto == 11))
    Resto = 0
    
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {
    console.log('dois ultimos digitos diferentes no verificador 1')
    window.alert('Erro')
    return false
    }
    
    Soma = 0
    
    for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
    
    Resto = (Soma * 10) % 11
    
    if ((Resto == 10) || (Resto == 11))
    Resto = 0
    
    if (Resto != parseInt(strCPF.substring(10, 11) )) {
    console.log('dois ultimos digitos diferentes no verificador 2')
    window.alert('Erro')
    return false
    }
    
    
    
    window.alert('Tudo Certo!!')
    return true
    }