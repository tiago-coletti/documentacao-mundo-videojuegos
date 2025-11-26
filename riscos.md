# 8. Riscos e Mitigação

Identificação dos principais riscos que podem impactar o projeto e as estratégias para mitigá-los.

| Risco Identificado | Mitigação |
| :--- | :--- |
| **1. Erros no Cadastro de Produtos e Clientes**<br>Informações incorretas (como preço, estoque ou dados pessoais) podem gerar vendas inválidas, falhas em relatórios e problemas de atendimento. | Validação automática dos campos, revisão obrigatória antes de salvar e permissões restritas para alterações. |
| **2. Falhas no Controle de Estoque**<br>Estoque desatualizado pode permitir compras de produtos indisponíveis, afetando pré-compras e satisfação do cliente. | Atualização automática após cada compra, avisos de estoque crítico e auditorias periódicas. |
| **3. Perda de Dados (clientes, compras, eventos)**<br>Perda de histórico de compras, pré-compras, notas fiscais e inscrições em eventos. | Backups automáticos diários, armazenamento em nuvem e sistema de redundância de dados. |
| **4. Sistema Indisponível em Períodos de Alta Demanda**<br>Indisponibilidade impede compras, inscrições em eventos e cadastro de clientes. | Infraestrutura escalável, monitoramento constante e plano de contingência para registro manual temporário. |