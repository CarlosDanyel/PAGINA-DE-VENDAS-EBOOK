
import style from "./style.module.scss";

const ListaDePerguntas = () => {

    const ListaPerguntas = 
    [
        {
            Pergunta: "Quem pode se beneficiar deste ebook?", 
            Resposta: '" Este ebook é especialmente projetado para jovens que estão prestes a ingressar no mercado digital e desejam obter orientações práticas para iniciar sua carreira profissional com sucesso. "'
        },
        {
            Pergunta: "O que este ebook aborda?", 
            Resposta: '" "Construindo um Futuro Brilhante" aborda uma ampla variedade de tópicos relevantes, incluindo identificação de oportunidades de emprego, elaboração de currículos atrativos, dicas para entrevistas, habilidades de comunicação eficazes, ética no trabalho, construção de uma imagem profissional positiva e estabelecimento de metas realistas para o crescimento profissional."'
        },
        {
            Pergunta: "Quais são os principais benefícios de ler este ebook?", 
            Resposta: '" Ao ler este ebook, você receberá orientações valiosas sobre como se preparar adequadamente para o mercado digital, construir uma base sólida em sua carreira e se destacar em um ambiente profissional. Ele oferece dicas práticas, exemplos inspiradores e conselhos acessíveis para garantir que você esteja preparado para enfrentar os desafios iniciais e aproveitar as oportunidades de aprendizado e crescimento. "'
        },
        {
            Pergunta: "Este ebook é adequado para pais que desejam ajudar seus filhos?", 
            Resposta: 'Sim, "Construindo um Futuro Brilhante" é um recurso indispensável para pais que desejam ajudar seus filhos a se prepararem para sua iniciação no mundo profissional. Ele oferece orientações claras e práticas que podem ser compartilhadas com seus filhos para capacitá-los a dar os primeiros passos em direção a um futuro brilhante.'
        },
        {
            Pergunta: "Como posso adquirir o ebook?", 
            Resposta: 'Você pode adquirir o ebook "Construindo um Futuro Brilhante" clicando no botão de compra em nossa página de vendas. Após a conclusão do pagamento, você receberá um link para fazer o download imediato do ebook em formato digital.'
        },
        {
            Pergunta: 'Por que devo escolher "Construindo um Futuro Brilhante" ?', 
            Resposta: '"Construindo um Futuro Brilhante" se destaca por ser um guia abrangente e prático, especialmente projetado para jovens que desejam entrar no mercado digital. Ele oferece orientações claras e acessíveis, repletas de dicas práticas e exemplos inspiradores. Além disso, aborda temas relevantes, como ética profissional, imagem positiva e estabelecimento de metas realistas. Com este ebook, você terá um roteiro claro para construir uma base sólida em sua carreira, garantindo um começo bem-sucedido na vida profissional.'
        },
    ]

    return (
        <div className={style.detailsContainer}>
          {ListaPerguntas.map((item, indice) => {
            return (
              <details className={style.details_item} key={indice}>
               <summary>{item.Pergunta}</summary>
               <p>{item.Resposta}</p>
              </details>
            );
          })}
        </div>
      );
    };

export default ListaDePerguntas;