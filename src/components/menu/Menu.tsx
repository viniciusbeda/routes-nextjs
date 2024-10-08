import link from "next/link"

export const Menu = ()  => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
                <li>
                    <a href="/produtos">Produtos</a>
                </li>
                <li>
                    <a href="/contato">Contato</a>
                </li>
            </ul>
        </nav>
    )
}