# 4. Diagrama de Caso de Uso

Abaixo está o diagrama que representa as interações entre os atores (Clientes e Administradores) e as principais funcionalidades do sistema.

![Diagrama de Caso de Uso](/img/uso.png)

---

## 4.1 Descrição de Casos de Uso

Detalhamento dos fluxos principais do sistema para compreensão da lógica de negócios.

### Caso de Uso 1: Realizar Compra
**Ator Principal:** Cliente
**Atores Secundários:** Sistema de Pagamento (opcional), Administrador (apenas em compras presenciais).
**Objetivo:** Permitir que o cliente compre produtos do catálogo da loja, gerando nota fiscal, atualizando o estoque e registrando a transação no histórico do cliente.

**Pré-condições:**
* O cliente deve estar cadastrado no sistema.
* O produto deve estar disponível em estoque ou permitir pré-compra.

**Pós-condições:**
* A compra é registrada no sistema.
* Estoque atualizado automaticamente.
* Nota fiscal gerada.
* Histórico do cliente atualizado.

**Fluxo Principal:**
1. O cliente escolhe produtos do catálogo.
2. O sistema exibe informações detalhadas do produto (preço, plataforma, gênero, fabricante, estoque).
3. O cliente adiciona os itens ao carrinho.
4. O cliente confirma os dados da compra.
5. O sistema calcula o valor total, aplicando promoções e cupons, se houver.
6. O cliente confirma a forma de pagamento.
7. O sistema processa a compra.
8. O sistema gera automaticamente a nota fiscal.
9. O sistema atualiza o estoque.
10. O sistema registra a compra no histórico do cliente.
11. O sistema exibe mensagem de sucesso.

**Fluxos Alternativos:**
* **A1: Produto indisponível (estoque zero):** O sistema oferece a opção "Realizar Pré-Compra" (caso de uso extend).
* **A2: Pagamento recusado:** O sistema exibe falha no pagamento e permite o cliente tentar novamente ou trocar forma.
* **A3: Cupom inválido:** O sistema informa que o cupom não pode ser aplicado.

---

### Caso de Uso 2: Inscrever-se em Evento
**Ator Principal:** Cliente
**Atores Secundários:** Administrador (somente para criar o evento).
**Objetivo:** Permitir que o cliente visualize eventos disponíveis e realize uma inscrição.

**Pré-condições:**
* O cliente deve estar cadastrado.
* O evento deve existir e aceitar inscrições.
* Haver vagas disponíveis.

**Pós-condições:**
* A inscrição é registrada no sistema.
* O cliente passa a constar na lista de participantes do evento.

**Fluxo Principal:**
1. O cliente acessa a área de eventos.
2. O sistema lista todos os eventos cadastrados com data, descrição, vagas e regras.
3. O cliente escolhe um evento.
4. O sistema exibe os detalhes do evento.
5. O cliente solicita inscrição.
6. O sistema valida se ainda há vagas.
7. O sistema registra a inscrição.
8. O sistema confirma a inscrição ao cliente.

**Fluxos Alternativos:**
* **A1: Evento sem vagas:** O sistema informa que não há mais vagas e impede a inscrição.
* **A2: Evento expirado ou já realizado:** O sistema não permite inscrições e exibe aviso.
* **A3: Inscrição já existente:** O sistema impede duplicidade e informa que o cliente já está inscrito.
* **A4: Promoções de evento (extend):** O caso Visualizar Promoções pode ser acionado como extensão — exemplo: descontos exclusivos para inscritos.