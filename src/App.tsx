import { useEffect, useState } from 'react'
import './App.css'
import { Services } from './App.types';
import { DataTree } from './components/DataTree/DataTree';

function App() {
  const [services, setServices] = useState<Services[]>([]);

  const arrayToTree = (data: Services[]) => {
    const tree:Services[] = [];
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
  
  useEffect(() => {
    fetch('/api/services').then((res) => res.json()).then((data) => setServices(arrayToTree(data)));
  }, []);


  return (
    <div className="app">
      <DataTree tree={services}/>
    </div>
  )
}

export default App


