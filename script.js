document.addEventListener('DOMContentLoaded', () => {
    const botaoCriptografar = document.getElementById('botao-criptografar');
    const botaoDescriptografar = document.getElementById('botao-descriptografar');
    const botaoCopiar = document.getElementById('botao-copiar');
    const entradaTexto = document.getElementById('entrada-texto');
    const textoSaida = document.getElementById('texto-saida');
    const imagemContexto = document.getElementById('imagem-contexto');
    const textoPadrao = document.getElementById('texto-padrao');
    const textoOrientacao = document.getElementById('texto-orientacao');

    const criptografar = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const descriptografar = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const exibirTexto = (texto) => {
        textoSaida.value = texto;
        imagemContexto.style.display = 'none';
        textoPadrao.style.display = 'none';
        textoOrientacao.style.display = 'none';
        botaoCopiar.style.display = 'block'; 
    };

    const limparTexto = () => {
        entradaTexto.value = '';
        textoSaida.value = 'Nenhuma mensagem encontrada';
        
        imagemContexto.style.display = 'block'; 
        textoPadrao.style.display = 'block'; 
        textoOrientacao.style.display = 'block';    
        botaoCopiar.style.display = 'none'; 
    };

    botaoCriptografar.addEventListener('click', () => {
        const texto = entradaTexto.value.toLowerCase().trim();
        if (texto) {
            exibirTexto(criptografar(texto));
        } else {
            limparTexto();
        }
    });

    botaoDescriptografar.addEventListener('click', () => {
        const texto = entradaTexto.value.toLowerCase().trim();
        if (texto) {
            exibirTexto(descriptografar(texto));
        } else {
            limparTexto();
        }
    });

    botaoCopiar.addEventListener('click', () => {
        textoSaida.select();
        document.execCommand('copy');
    });
});
