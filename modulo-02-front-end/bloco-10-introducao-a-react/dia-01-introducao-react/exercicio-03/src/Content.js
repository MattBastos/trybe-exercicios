import React, { Component } from 'react';

class Content extends Component {
  render() {

    const contents = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <main>
        <section className='content'>
          { contents.map((content) => (
            <div key={content.conteudo} className='card'>
              <h3>{ `O conteúdo é: ${content.conteudo}` }</h3>
              <div>{ `Status: ${content.status}` }</div>
              <div>{ `Bloco: ${content.bloco}` }</div>
            </div>
            ))}
        </section>
      </main>
    );
  }
}

export default Content;