import { useState } from 'react'
import { Search, ShoppingCart, Menu, X } from 'lucide-react' // importar icones Lucide

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navegacao = [
        'Categorias',
        'Todos os Produtos',
        'Novidades',
        'Destaques',
    ]

    return (
        <header className = "sticky top-0 z-50 bg-white shadow-sm">
            <div className = "mx-auto max-w-7xl px-4 py-3 lg:px-8">
                <div className = "flex items-center gap-4">

                    {/* MENU MOBILE */}
                    <button
                        className = "lg:hidden text-foreground"
                        onClick = {() => setMenuOpen(!menuOpen)}
                        aria-label = {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                        aria-expanded = { menuOpen }
                    >
                        { menuOpen ? <X size = {24} /> : <Menu size = {24} /> }
                    </button>

                    {/* LOGO DO CATÁLOGO */}
                    <a href = "/" className = "flex items-center gap-2 shrink-0">
                        <img
                            src = "/catalogo-a7.svg"
                            alt = "Catálogo A7"
                            className = "h-12 w-auto"
                        />

                        <div>
                            <h1 className = "text-xl font-bold text-foreground">
                                Catálogo A7
                            </h1>

                            <p className = "hidden sm:block text-xs text-gray-500">
                                Integrado ao A7 ERP
                            </p>
                        </div>
                    </a>

                    {/* PESQUISA PC */}
                    <div className ="hidden lg:flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-background px-4 py-3">
                        <Search size={20} className = "text-gray-400" />

                        <input
                            type = "search"
                            placeholder = "Buscar por nome, código ou referência..."
                            aria-label = "Buscar produtos"
                            className = "w-full bg-transparent text-sm outline-none"
                        />
                    </div>

                    {/* CARRINHO DE COMPRA */}
                    <button
                        type = "button"
                        aria-label = "Abrir carrinho"
                        className = "ml-auto flex items-center gap-2 rounded-lg p-2 text-primary-hover transition-colors hover:bg-blue-50"
                    >
                        <div className = "relative">
                            <ShoppingCart size = {26} />

                            {/* CONTADOR DE ITENS NO CARRINHO */}
                            <span className = "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                0
                            </span>
                        </div>

                        <span className = "hidden lg:block font-medium">
                            Carrinho
                        </span>
                    </button>

                </div>

                {/* MENU MOBILE */}
                <div className = "mt-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-background px-4 py-3 lg:hidden">
                    <Search size = {20} className = "text-gray-400" />

                    <input
                        type = "search"
                        placeholder = 'Buscar produtos...'
                        aria-label = "Buscar produtos"
                        className = "w-full bg-transparent text-sm outline-none"
                    />
                </div>

            </div>
            
            {/* NAVEGAÇÃO DESKTOP */}
            <nav className = "hidden bg-primary-hover lg:block">
                <div className = "mx-auto flex max-w-7xl items-center gap-8 px-8">
                    { navegacao.map ((item, index) => (
                        <button
                            key = {item}
                            className = "flex items-center gap-2 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
                        >
                            { index === 0 && <Menu size={18}/> } {/*Renderiza o ícone do menu apenas no primeiro item*/}
                            { item }

                        </button>
                        ) )
                    }
                </div>
            </nav>

            {/* NAVEGAÇÃO MOBILE */}
            { menuOpen && (
                <nav className = "border-t border-gray-100 bg-white p-4 lg:hidden">
                    { navegacao.map ((item) => (
                        <button
                            key = {item}
                            onClick = {() => setMenuOpen (false)}
                            className = "block w-full rounded-lg px-4 py-3 text-left text-sm font-medium hover:bg-blue-50"
                        >
                            { item }
                        </button>
                    ))
                    }
                </nav>
            )}

        </header>
    ) 
}