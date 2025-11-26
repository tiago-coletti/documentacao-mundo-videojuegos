import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mundo de los Videojuegos",
  description: "Documentação do Sistema de Gestão",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Introdução', link: '/introducao' },
      { text: 'Descrição', link: '/descricao' },
      { text: 'Diagramas', link: '/uso' }
    ],

    sidebar: [
      {
        text: 'Documentação do Projeto',
        items: [
          { text: '1. Introdução', link: '/introducao' },
          { text: '2. Descrição do Projeto', link: '/descricao' },
          { text: '3. Recursos e Funcionalidades', link: '/recursos' },
          { text: '4. Diagrama de Caso de Uso', link: '/uso' },
          { text: '5. Diagramas de Classe', link: '/classe' },
          { text: '6. Protótipos de Telas', link: '/prototipos' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Considerações Finais', link: '/consideracoes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tiago-coletti/documentacao-mundo-videojuegos' }
    ]
  }
})