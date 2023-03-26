# STL Repair

imati-stl-repair is a node package that is based on the ImatiSTL. ImatiSTL is a C++ library for applications that need to finely post-process raw polygon meshes represented by STL files. It is particularly useful in 3D printing scenarios: the repairing functions provided by ImatiSTL bridge the gap between printable meshes and real-world meshes with diverse potential defects and flaws (e.g. degenerate triangles, self-intersections, surface holes, ...).

## Installation
Installation using yarn
```sh
yarn imati-stl-repair
```
Installation using npm
```sh
npm imati-stl-repair
```

## How to use ?

```sh
const repair = require('imati-stl-repair');
await repair('INPUT_FILE_PATH','OUTPUT_FILE_PATH');
```

## License

MIT


   
