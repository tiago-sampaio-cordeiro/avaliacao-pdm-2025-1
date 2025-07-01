# TaskList

Aplicativo simples de gerenciamento de tarefas com prioridades.

---

## Descrição

O **TaskList** é um projeto React Native criado com foco em avaliação técnica. Ele demonstra o uso de:

- `useEffect` para simular carregamento inicial de dados.
- `SectionList` para exibição de tarefas agrupadas por prioridade (Alta, Média, Baixa).
- `ActionSheet` para interações com as tarefas (editar ou remover).

---

## Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/tiago-sampaio-cordeiro/avaliacao-pdm-2025-1.git
cd avaliacao-pdm-2025-1

yarn install

npx expo start --tunnel
```

## Telas

Tela inicial

![alt text](<WhatsApp Image 2025-05-20 at 03.23.22.jpeg>)

Tela de listagem das tarefas

![alt text](<WhatsApp Image 2025-05-20 at 03.24.00.jpeg>)

Tela de detalhes de uma tarefa

![alt text](<WhatsApp Image 2025-05-20 at 03.24.51.jpeg>)

Tela do ActionSheet

![alt text](<WhatsApp Image 2025-05-20 at 03.25.13.jpeg>)


# Diferenças entre testes unitários e end-to-end(e2e)

## Testes unitários

Os testes unitários testam partes isoladas do codigo como funções , classes, métodos, etc. Eles são executados em ambiente de desenvolvimento e são 
utilizados para garantir que cada unidade de código esteja funcionando corretamente.

Nessa aplicação, para os testes unitários foram usados o Jest e o React Testing Library.

## Testes e2e

Os testes end-to-end (e2e) testam o comportamento do sistema como um todo, desde a interface de usuário até a lógica de negócios. Eles são executados em ambiente de produção e são utilizados para garantir que o sistema esteja funcionando corretamente em diferentes cenários. 
Os testes e2e garantem que o fluxo real de uso funcione do inicio até o fim, testando todas as interações do usuário com o sistema.

Nessa aplicação para os testes e2e foi utililizado o playwright