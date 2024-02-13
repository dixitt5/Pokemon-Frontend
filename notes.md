# React with TypeScript

- developed by facebook devs.

### CSR vs SSR

SSR is good for scalability in older devices, but one disadvantage is that when refreshing or routing server fetches again, while CSR does not refreshes again when routing, therefor fast.

### Installation with Vite

> ### What Vite does ?
>
> - optimizes the code , minify and compresses the code.
> - therefore no one can reverse engineer the code.

### CDN (Content Delivery Network)

- It is faster and browser can also cache it. (widely spread to servers across the world)

### Virtual DOM

- only renders the component, not the whole dom.

### Enums in TypeScript

- Crete your own datatypes.
  > Just like solidity enums.

```typescript
export enum PokemonType {
  Grass,
  Water,
  Fire,
  Rock,
  Other,
}
```

### Props

- are called functional arguements , can pass values from one component to another component

```typescript
export type PokemonProps = {
  pokemon: Pokemon;
};

export function Header(pokemon: PokemonProps) {
```

### Bootstrap

#### Installation

- run this command

```
npm install bootstrap
```

### Hooks

1. useEffect - re-renders the component when dependency array values are changed.

```typescript
useEffect(() => {
  "Callback Function";
}, ["Dependency Array"]);
```

1. useState - has one

```typescript
useEffect(() => {
  "Callback Function";
}, ["Dependency Array"]);
```

### Children props

> every element present in component <></> brackets are considered as children props and it can be used like this:
> `{props.children}`

### Routing

can create a custom routing mechanism like this:

```typescript
import { type ReactElement, useState } from "react";
import Home from "./pages/Home";
import Details from "./components/Details";

const CustomRouter = (): ReactElement => {
  const [route, setRoute] = useState<string>("home");
  return (
    <div>
      {route === "home" ? (
        <Home setRoute={setRoute} />
      ) : (
        <Details id={parseInt(route.split("/")[1])} />
      )}
    </div>
  );
};

export default CustomRouter;
```

### Custom Hooks

- We can create custom hooks for whatever usecases, here's the one I created for fetching pokemon details -

```typescript
import { useEffect, useState } from "react";
import { type PokemonApi } from "../types/Pokemon";
import axios from "axios";

export const usePokemonsApi = (): {
  pokemons: PokemonApi[];
  isLoading: boolean;
  error: any;
} => {
  const [pokemons, setPokemons] = useState<PokemonApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((result) => {
        const pokes: PokemonApi[] = result.data.results.map(
          (p: PokemonApi, index: number) => ({ ...p, id: index + 1 })
        );
        setPokemons(pokes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { pokemons, isLoading, error };
};
```

### APIs

> axios or fetch can be used to use APIs.

- you have to provide types according to the data got from API, so first you have to test the APIs.

### React-router-dom

> Helps to route pages efficiently.

- useNavigate() - route to page with onClick functionality
- useParams() - use query params in components

### Context API

- Provider : wraps the parent element to provide props to other children components
- Consumer : for using the data from the context

```typescript
// createContext(props) - to create contexts lol
import { createContext } from "react";

export interface ContextParameters {
  isDarkMode: boolean;
  setIsDarkMode: (
    isDarkMode: boolean | ((isDarkMode: boolean) => boolean)
  ) => void;
}

export default createContext<ContextParameters>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

//useContext() - to use the context
const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

//wrapper provider
const Container = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <RouterProvider router={router} />
      </DarkModeContext.Provider>
    </div>
  );
};

export default Container;
```

### Interceptors

> works like middleware for APIs in backend.

// To-do

// implement the searchbar
// pagination
// convert it to tailwind, responsive and dark mode
// custom styles in tailwind config file

brownie points - clone a social media page
