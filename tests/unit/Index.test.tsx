import { render, screen } from '@testing-library/react-native'
import Index from '../../app/index'

// Mock do Link do expo-router
jest.mock('expo-router', () => ({
  Link: ({ href, children, style }: any) => (
    <a href={href} style={style}>
      {children}
    </a>
  ),
}))

describe('Index Page', () => {
  it('deve renderizar o título e os dois botões de navegação', () => {
    render(<Index />)

    expect(screen.getByText('Tarefas Prioritárias')).toBeTruthy()
    expect(screen.getByText('Ver Tarefas')).toBeTruthy()
    expect(screen.getByText('Adicionar Tarefa')).toBeTruthy()
  })
})
