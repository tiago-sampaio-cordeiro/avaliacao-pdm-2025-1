import { render, fireEvent, screen } from "@testing-library/react-native";
import CustomInput from "../../components/Input";

describe("CustomInput", () => {
  it("deve renderizar o label e o placeholder corretamente", () => {
    render(
      <CustomInput
        label="Nome"
        value=""
        onChangeText={() => {}}
        placeholder="Digite seu nome"
      />
    );

    expect(screen.getByText("Nome")).toBeTruthy();
    expect(screen.getByPlaceholderText("Digite seu nome")).toBeTruthy();
  });

  it("deve chamar onChangeText quando o texto muda", () => {
    const mockFn = jest.fn();

    render(
      <CustomInput
        label="Email"
        value=""
        onChangeText={mockFn}
        placeholder="Digite seu email"
      />
    );

    const input = screen.getByPlaceholderText("Digite seu email");
    fireEvent.changeText(input, "teste@example.com");

    expect(mockFn).toHaveBeenCalledWith("teste@example.com");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("deve bater com o snapshot atual", () => {
    const tree = render(
      <CustomInput
        label="Senha"
        value=""
        onChangeText={() => {}}
        placeholder="Digite sua senha"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
