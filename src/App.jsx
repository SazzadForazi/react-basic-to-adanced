import "./App.css"
import MessayTernary from "./MessyTernary";

export default function App() {
  function Item({ name, isPacked }) {
    // type1:
    // if (isPacked) {
    //   // return <li className="item">{name}✅</li>;
    //   return null;
    // }
    // return <li className="item">{name}❌</li>;

// type2:
    // return <li className="item">{name}{isPacked ? "✅": null}</li>;

// type3:
   return <li>{name}{isPacked && "✅"}</li>

  }
  return (
    <section>
    <h1>Sally Rides Packing List</h1>
    <ul>
      <Item 
        isPacked={true} 
        name="Space suit" 
      />
      <Item 
        isPacked={true} 
        name="Helmet with a golden leaf" 
      />
      <Item 
        isPacked={false} 
        name="Photo of Tam" 
      />
    </ul>
    <MessayTernary user={true} isAdmin={true} isGuest={false}/>
  </section>
  )
}