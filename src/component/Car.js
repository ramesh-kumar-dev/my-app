function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const types = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {types.map((ramesh) => <Car key={ramesh.id} brand={ramesh.brand} />)}
        </ul>
      </>
    );
  }
  
  export default Garage;
  