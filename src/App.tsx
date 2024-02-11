import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IServices } from './App.types';

function App() {
  //const [count, setCount] = useState(0);
  const [services, setServices] = useState<IServices[]>([]);

  const arrayToTree = (data: IServices[]) => {
    const tree:IServices[] = [];
    const map = {};

    data.forEach(service => {
        map[service.id] = service;
        service.children = [];
    });

    data.forEach(service => {
        if (service.head === null) {
            tree.push(service);
        } else {
            const parent = map[service.head];
            if (parent) {
                parent.children.push(service);
            }
        }
    });

    const sortLayer = (node) => {
      node.children.sort((a, b) => a.sorthead - b.sorthead);
      node.children.forEach(child => sortLayer(child));
    };

    tree.forEach(root => sortLayer(root));

    return tree;
  }

  const drawTree = (tree: IServices[]) => {
    return (
    <ul>
      {tree.map((service) => (
        <li key={service.id}>
          {service.name}
          {service.children && drawTree(service.children)}
        </li>
      ))}
    </ul>
    );
  }
  
  useEffect(() => {
    fetch('/api/services').then((res) => res.json()).then((data) => setServices(arrayToTree(data)));
    
  }, []);


  return (
    <>
      {/* {services.map((service) => <div key={service.id}>{service.name}</div>)} */}
      {drawTree(services)}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          {services.map((service) => <div key={service.id}>{service.name}</div>)}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>   */}
    </>
  )
}

export default App


