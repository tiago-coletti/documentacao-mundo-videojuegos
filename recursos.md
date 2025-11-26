# 3. Principais Recursos e Funcionalidades

O sistema **Mundo de los Videojuegos** conta com módulos específicos para atender às demandas de administradores e clientes. Abaixo estão detalhadas as funcionalidades principais.

## Módulos do Sistema

### 1. Cadastro de Clientes
Permite que administradores registrem informações completas dos clientes, como nome, endereço, telefone, e-mail e identificador único.

### 2. Cadastro de Produtos
Administradores podem cadastrar jogos, consoles e acessórios, incluindo título, plataforma, gênero, fabricante, preço e quantidade em estoque.

### 3. Controle de Estoque
O sistema atualiza automaticamente o estoque após cada venda e envia avisos quando a quantidade de um produto estiver baixa.

### 4. Vendas e Geração de Nota Fiscal
Clientes podem comprar produtos diretamente pelo sistema, que gera automaticamente a nota fiscal e registra a transação no histórico do cliente.

### 5. Pré-compras
Quando um produto está sem estoque, o cliente pode reservar o item para garantir prioridade assim que ele for reabastecido.

### 6. Histórico de Compras e Pagamentos
Cada cliente tem acesso ao seu histórico completo de compras e transações realizadas.

### 7. Promoções e Cupons de Desconto
Administradores podem cadastrar promoções e cupons, e os clientes podem visualizar e utilizar esses benefícios no portal.

### 8. Gerenciamento de Eventos Gamers
Administradores podem criar eventos como campeonatos e lançamentos, e os clientes podem se inscrever diretamente pelo sistema.

### 9. Portal do Cliente
Área exclusiva onde o cliente acessa seus dados pessoais, acompanha compras, verifica promoções e se inscreve em eventos.

### 10. Relatórios Gerenciais
O sistema gera relatórios sobre vendas, faturamento, inadimplência de pré-compras, produtos mais vendidos, estoque crítico e participação em eventos.

---

## 3.1 Requisitos Funcionais (RF)

| ID | Descrição do Requisito |
| :--- | :--- |
| **RF01** | Cadastrar, editar e excluir clientes. |
| **RF02** | Cadastrar produtos (jogos, consoles e acessórios). |
| **RF03** | Controlar estoque e atualizar quantidades automaticamente. |
| **RF04** | Enviar avisos de estoque baixo. |
| **RF05** | Permitir vendas e gerar nota fiscal. |
| **RF06** | Registrar histórico de compras e pagamentos dos clientes. |
| **RF07** | Permitir pré-compras de produtos indisponíveis. |
| **RF08** | Gerenciar promoções e cupons de desconto. |
| **RF09** | Criar e gerenciar eventos gamers e permitir inscrições. |
| **RF10** | Disponibilizar portal para os clientes acessarem dados e compras. |
| **RF11** | Gerar relatórios de vendas, estoque, faturamento e eventos. |
| **RF12** | Gerenciar usuários com diferentes níveis de acesso. |

---

## 3.2 Requisitos Não Funcionais (RNF)

Os requisitos não funcionais definem os critérios de qualidade do sistema:

* **RNF01 – Desempenho:** O sistema deve carregar páginas e realizar operações em até 3 segundos.
* **RNF02 – Segurança:** Os dados de clientes e administradores devem ser protegidos com autenticação e criptografia.
* **RNF03 – Disponibilidade:** O sistema deve estar disponível para uso em pelo menos 99% do tempo.
* **RNF04 – Usabilidade:** A interface deve ser simples, intuitiva e fácil de usar para clientes e administradores.
* **RNF05 – Confiabilidade:** O sistema deve registrar transações sem risco de perdas de dados.
* **RNF06 – Escalabilidade:** O sistema deve suportar aumento de usuários e produtos sem perda de desempenho.
* **RNF07 – Compatibilidade:** O sistema deve funcionar em navegadores modernos e dispositivos variados.
* **RNF08 – Manutenibilidade:** O código deve ser organizado para facilitar atualizações e correções futuras.
* **RNF09 – Privacidade:** Informações pessoais dos clientes devem ser armazenadas de acordo com normas de proteção de dados.
* **RNF10 – Backup:** O sistema deve realizar backups periódicos para evitar perda de informações importantes.