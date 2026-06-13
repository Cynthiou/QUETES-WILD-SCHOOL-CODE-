interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: { name: string; imgSrc?: string }[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
  const click = (name: string) => {
    setPokemonName(name);
    if (name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  return (
    <nav>
      {pokemonList.map((p) => (
        <button type="button" onClick={() => click(p.name)} key={p.name}>
          {p.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
