interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: { name: string; imgSrc?: string }[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((p) => (
        <button
          type="button"
          onClick={() => setPokemonName(p.name)}
          key={p.name}
        >
          {p.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
