import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="Money Control" />
            <button type='button'>
                Nova Transação
            </button>
        </header>
    )
}