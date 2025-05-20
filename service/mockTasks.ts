export type Task = {
  id: number;
  title: string;
  priority: "Alta" | "Média" | "Baixa";
};

export const mockTasks: Task[] = [
  { id: 1, title: "Estudar React Native", priority: "Alta" },
  { id: 2, title: "Lavar roupa", priority: "Baixa" },
  { id: 3, title: "Fazer almoço", priority: "Média" },
  { id: 4, title: "Ler um livro", priority: "Baixa" },
  { id: 5, title: "Atualizar portfólio", priority: "Alta" },
  { id: 6, title: "Ir ao mercado", priority: "Média" },
  { id: 7, title: "Fazer backup do celular", priority: "Alta" },
  { id: 8, title: "Organizar arquivos", priority: "Média" },
  { id: 9, title: "Responder e-mails", priority: "Baixa" },
  { id: 10, title: "Treinar inglês", priority: "Alta" },
  { id: 11, title: "Planejar viagem", priority: "Média" },
  { id: 12, title: "Limpar o quarto", priority: "Baixa" },
  { id: 13, title: "Revisar código", priority: "Alta" },
  { id: 14, title: "Criar post pro LinkedIn", priority: "Média" },
  { id: 15, title: "Agendar consulta médica", priority: "Baixa" },
  { id: 16, title: "Fazer exercícios", priority: "Alta" },
  { id: 17, title: "Assistir aula gravada", priority: "Média" },
  { id: 18, title: "Organizar agenda da semana", priority: "Alta" },
  { id: 19, title: "Ajustar orçamento do mês", priority: "Média" },
  { id: 20, title: "Trocar senha dos serviços", priority: "Baixa" },
];
